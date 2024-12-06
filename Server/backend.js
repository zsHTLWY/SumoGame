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