function Spawn()
{
    fetch('http://localhost:3000/firstCoordinates')  .then(response => response.json())  .then(data => console.log(data))  .catch(error => console.error(error));
    const colors = ["green", "red", "yellow", "blue", "purple", "cyan", "grey", "magenta", "white", "black", "brown", "lime"]
    let circle = document.getElementById("circle");
    for(let i = 0; i<12 ; i= i+1){
        let player = document.createElement("div");
        let playercolor = document.createElement("div");
        playercolor.id = `playercolor-${i}`;
        playercolor.className = "playercolor";
        player.appendChild(playercolor);
        player.className = "players"
        player.id = `player-${i}`;
        circle.appendChild(player);
        playercolor.style.backgroundColor = colors[i];
    }
    defineSpawnPoint();
}

function defineSpawnPoint(){
    let xPosition = 0;
    let yPosition = -100;
    let circle = document.getElementById("circle");
    let xPositionClient = ((xPosition + 100) / 200) * circle.offsetWidth - 50;
    let yPositionClient = ((yPosition + 100) / 200) * circle.offsetHeight - 50;
    for(let i = 0; i<12;i=i+1){
        let player = document.getElementById(`player-${i}`);
        player.style.left = xPositionClient + "px";
        player.style.top = yPositionClient + "px";
    }   
}

