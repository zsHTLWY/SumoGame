function Spawn()
{
    let xPosition = 0;
    let yPosition = -100;
    let circle = document.getElementById("circle");
    let xPositionClient = ((xPosition + 100) / 200) * circle.offsetWidth - 50;
    let yPositionClient = (yPosition + 100) / 200 * circle.offsetHeight - 50 ;
    let player = document.getElementById("player");
    player.style.left = xPositionClient + "px" ;
    player.style.top = yPositionClient + "px";
    
}

function defineSpawnPoint(){
   
}