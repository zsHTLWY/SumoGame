const express = require('express'); // 🌟 Import Express
const app = express(); // 🎉 Initialize the app
const PORT = 3000; // 📌 Port to listen on

// Middleware to parse JSON bodies 🧰
app.use(express.json());
app.use(cors());
let players = [{ x: 20, y: 80 }, { x: 57, y: 57 }, { x: 80, y: 20 }, { x: 80, y: -20 }, { x: 57, y: -57 }, { x: 20, y: -80 }, { x: -20, y: -80 }, { x: -57, y: -57 }, { x: -80, y: -10 }, { x: 20, y: -80 }, { x: 57, y: -57 }, { x: -20, y: -80 }];
// Handle PUT requests for coordinates 

app.get('/test', (req, res) => {
    res.send("Hello World!");
    res.end("Ende!");
});

app.put('/player:id', (req, res) => {

    

    let data = JSON.parse(req.body); // 🔍 Extract x and y coordinates from the request body

    x = data.x;
    y = data.y;

    console.log(x+" "+y+" id:"+req.params.id);
    if (x === undefined || y === undefined) {
        
        return res.status(400).json({ message: 'Missing x or y coordinate!' });
    }
    console.log(`Received move percentage: x = ${x}, y = ${y}`); 

    //spieler id = req.params
    //hier die gewünschte pos ausrechnen
    //und dann mit checkIfsumoOut überprüfen ob bewegung passt
    
    if(Math.SQRT2(Math.pow(y,2) + Math.pow(x,2)) > 100.0000001)
        {
            players[req.params.id].x = undefined;
            players[req.params.id].y = undefined;
        }
    else{
            players[req.params.id].x = x;
            players[req.params.id].y = y;
        }


    checkIfSumosCollade(players);

    if(Math.SQRT2(Math.pow(y,2) + Math.pow(x,2)) > 100.0000001)
        {
            players[req.params.id].x = undefined;
            players[req.params.id].y = undefined;
        }
    else{
            players[req.params.id].x = x;
            players[req.params.id].y = y;
        }

    // Respond with the result 📤
    res.status(200).json({
        message: 'Coordinates processed successfully! ',
        data: { players},
    });
    res.write(JSON.stringify(players));
    res.end();
});

// Start the server 🚀
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🌐`);
});

function checkIfSumosCollade(players){	

    let countOut = 0;
    let countIn = 0;
    players.forEach(player1 => {
        
        players.forEach(player2 => {
        
            if(countOut =! countIn && player1.x == player2.x && player1.y == player2.y)
            {
                if(player1.x > player2.x&& player1.y < player2.y){
                    player1.x += 10;
                    player2.x += -10;
                    player1.y += -10;
                    player2.y += 10;
                }
                else{
                    player1.x += -10;
                    player2.x += 10;
                    player1.y += 10;
                    player2.y += -10;
                }
            }
            countIn++;
        });
        countOut++;
    });
}

