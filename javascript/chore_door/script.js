let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let numClosedDoors = 3;

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const opennedDoors = [0, 0, 0];
let openDoor1;
let openDoor2;
let openDoor3;
let curentlyPlaying = true;

const startButton = document.getElementById('start');


const playDoor = (door) => {
    numClosedDoors--;
    // console.log(door);
    if (numClosedDoors === 0) {
        gameOver('win');
    } else {
        if (door === botDoorPath) {
            gameOver('lose');
        };
    };
};

doorImage1.onclick = () => {
    if (curentlyPlaying) {
        doorImage1.src = openDoor1;
        if (opennedDoors[0] === 0) {
            opennedDoors[0] = 1;
            playDoor(openDoor1);
        };
    };
};

doorImage2.onclick = () => {
    if (curentlyPlaying) {
        doorImage2.src = openDoor2;
        if (opennedDoors[1] === 0) {
            opennedDoors[1] = 1;
            playDoor(openDoor2);
        };
    };
};

doorImage3.onclick = () => {
    if (curentlyPlaying) {
        doorImage3.src = openDoor3;
        if (opennedDoors[2] === 0) {
            opennedDoors[2] = 1;
            playDoor(openDoor3);
        };
    };
};

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML="You win! Play Again?"
    } else {
        startButton.innerHTML="ChoreBot! You lose! Play Again?"
    }
    curentlyPlaying = false;
}

const randomChoreDoorGenerator = () => {
    const randomInt = Math.floor(Math.random() * numClosedDoors)
    switch(true) {
        case randomInt == 0:
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
        break;
        case randomInt == 1:
            openDoor2 = botDoorPath;
            openDoor3 = beachDoorPath;
            openDoor1 = spaceDoorPath;
        break;
        case randomInt == 2:
            openDoor3 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor1 = spaceDoorPath;
        break;
    }
};

randomChoreDoorGenerator();
