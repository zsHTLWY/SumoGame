window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    var x = event.beta;
    var y = event.gamma;
    if (x > 90) { x = 90; }
    if (x < -90) { x = -90; }
    if (y > 90) { y = 90; }
    if (y < -90) { y = -90; }
    var xPos = (x + 90) * (window.innerHeight / 180);
    var yPos = (y + 90) * (window.innerWidth / 180);
    if (typeof character !== "undefined") {
        character.style.top = xPos + "px";
        character.style.left = yPos + "px";
    }
    var playerId = 0;
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", `http://localhost:3000/player/${playerId}`, true); 
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ x: xPos, y: yPos }));
}
