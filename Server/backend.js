const express = require('express'); // Import Express
const cors = require('cors');
const app = express(); //  Initialize the app
const PORT = 3000; //  Port to listen on
const PORTFirst = 3001;
// Middleware to parse JSON bodies 
app.use(express.json());
app.use(cors());

let players = [{ x: 20, y: 80 }, { x: 57, y: 57 }, { x: 80, y: 20 }, { x: 80, y: -20 }, { x: 57, y: -57 }, { x: 20, y: -80 }, { x: -20, y: -80 }, { x: -57, y: -57 }, { x: -80, y: -10 }, { x: 20, y: -80 }, { x: 57, y: -57 }, { x: -20, y: -80 }];
// Handle PUT requests for coordinates 

app.get('/test', (req, res) => {
    res.send("Hello World!");
});

app.get('/firstCoordinates', (req, res) => {
    res.json(players);
  });

app.get('/player:id', (req, res) => {

    
	console.log("Hello!");
	
	let { x, y } = req.body; //  Extract x and y coordinates from the request body
	
	console.log(req.body);
    

    console.log("received: X" + x + " | y:" + y + " from player " + req.params.id)


    console.log(x+" "+y+" id:"+req.params.id);
    if (x === undefined || y === undefined) {
        
        return res.status(400).json({ message: 'Missing x or y coordinate!' });
    }
    console.log(`Received move percentage: x = ${x}, y = ${y}`); 

    //spieler id = req.params
    //hier die gewünschte pos ausrechnen
    //und dann mit checkIfsumoOut überprüfen ob bewegung passt
    
    if(Math.sqrt(Math.pow(y,2) + Math.pow(x,2)) > 100.0000001)
        {
            players[req.params.id].x = undefined;
            players[req.params.id].y = undefined;
        }
    else{
            players[req.params.id].x = x;
            players[req.params.id].y = y;
        }


    checkIfSumosCollade(players);

    if(Math.sqrt(Math.pow(y,2) + Math.pow(x,2)) > 100.0000001)
        {
            players[req.params.id].x = undefined;
            players[req.params.id].y = undefined;
        }
    else{
            players[req.params.id].x = x;
            players[req.params.id].y = y;
        }

    console.log(players);

    /*// Respond with the result 
    res.status(200).json({
        message: 'Coordinates processed successfully! ',
        data: { players},
    });
    res.send(JSON.stringify(players));
    res.end();
    */

    const ipAddress = '192.168.1.100'; //hier die ip eintragen 
    const port = 8080; // hier den Port eintragen

    
    // Daten an die IP-Adresse senden
    const socket = net.createConnection(port, ipAddress);
    socket.write(data);
    socket.end();

    res.send(`Daten gesendet an ${ipAddress}:${port}`);
});

// Start the server
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

