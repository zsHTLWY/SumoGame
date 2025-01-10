window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    var x = event.beta; 
    var y = event.gamma; 
    if (x > 90) { x = 90; }
    if (x < -90) { x = -90; }
    if (y > 90) { y = 90; }
    if (y < -90) { y = -90; }

    var xPercent = ((x + 90) / 180) * 100; 
    var yPercent = ((y + 90) / 180) * 100; 
    if (typeof character !== "undefined") {
        character.style.top = xPercent + "%"; 
        character.style.left = yPercent + "%";
    }
    var playerId = 0;
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", `http://localhost:3000/player/${playerId}`, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ x: xPercent, y: yPercent }));
}


