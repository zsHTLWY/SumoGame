const express = require('express'); // 🌟 Import Express
const app = express(); // 🎉 Initialize the app
const PORT = 3000; // 📌 Port to listen on

// Middleware to parse JSON bodies 🧰
app.use(express.json());
let players = [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}];
// Handle PUT requests for coordinates 

app.put('/player:id', (req, res) => {
    let { x, y } = req.body; // 🔍 Extract x and y coordinates from the request body

    if (x === undefined || y === undefined) {
        
        return res.status(400).json({ message: 'Missing x or y coordinate!' });
    }
    
    //spieler id = req.params
    //hier die gewünschte pos ausrechnen
    //und dann mit checkIfsumoOut überprüfen ob bewegung passt
    console.log(`Received coordinates: x = ${x}, y = ${y}`); // 🖥️ Log the coordinates

    let check = checkIfSumoOut(y,x);// check if out    

    // Respond with the result 📤
    res.status(200).json({
        message: 'Coordinates processed successfully! ',
        data: { x, y, distanceFromOrigin: result },
    });
    res.write(JSON.stringify(players));
    res.end();
});

// Start the server 🚀
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🌐`);
});

function checkIfSumoOut(y,x) {

    let middleX;
    let middleY;
    let rad = 100 /document.body.innerWidth *70;

    middleX = document.body.innerWidth / 2;
    middleY = document.body.innerHeight / 2;

    let helpX = x - middleX;
    let helpY = y - middleY;

    let angle = Math.sqrt(helpY*helpY + helpX*helpX,);

    if(angle > rad) {
        return false;
    }
    else {
        return x,y;
    }
}
