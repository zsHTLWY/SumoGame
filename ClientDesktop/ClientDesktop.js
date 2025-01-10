<script>
    const player = document.getElementById("Player");
    const playerSpeed = 40;

    let playerX = window.innerWidth / 2 - 10;
    let playerY = window.innerHeight / 2 - 10;

    player.style.top = playerY + "px";
    player.style.left = playerX + "px";

    const keysPressed = {};

    window.addEventListener("keydown", function(event) {
        keysPressed[event.key.toLowerCase()] = true;
        movePlayer();
    });

    window.addEventListener("keyup", function(event) {
        keysPressed[event.key.toLowerCase()] = false;
    });

    function movePlayer() {
        if (keysPressed["w"]) {
            playerY -= playerSpeed;
        }
        if (keysPressed["s"]) {
            playerY += playerSpeed;
        }
        if (keysPressed["a"]) {
            playerX -= playerSpeed;
        }
        if (keysPressed["d"]) {
            playerX += playerSpeed;
        }

        player.style.top = playerY + "px";
        player.style.left = playerX + "px";
    }

</script>