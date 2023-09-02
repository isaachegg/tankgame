let screenNum = 0;
var tank;
var barrel;
var tower;
var cannons;
var cannonBall;
let button;
let TSbutton;
let PAbutton;
let bg;
let healthBarPic;
var healthBarTower;
let bulletArr = [];
let cannonBallArr = []; 
let winOrLose = false;
let win = false;
function preload() {
    bg = loadImage('x.jpg');
    healthBarPic = loadImage('x2.jpg');
}

function setup() {
    createCanvas(400, 400);
    
    
    button = createButton("Start");
    button.position(160, 230);
    button.size(100, 40);
    button.style('font-size: 30px');
    button.style('background: #00C8F9');
    button.style('font-family: fantasy');
    button.mousePressed(pressed);

    barrel = new Barrel;
    tank = new Tank;
    tower = new Tower;
    cannons = new Cannons;
    cannonBall = new CannonBall;
    healthBarTower = new HealthBarTower;
}

function draw() {
    
    if (screenNum == 0) {
        menuScreen();
    } else if (screenNum == 1) {
        gameScreen();
        
    } else if (screenNum == 2) {
        winScreen();
    } else {
        loseScreen();
    }
}



function keyPressed() {
    //Arrow keys for movement and spacebar for fire
    if(!winOrLose) {
        if (keyCode == RIGHT_ARROW) {
            tank.moving(true);
            tank.rightOrLeft = "r";
        } else if (keyCode == LEFT_ARROW) {
            tank.moving(true);
            tank.rightOrLeft = "l";
        } else if (keyCode == UP_ARROW) {
            barrel.rotating(true);
            barrel.upOrDown = "u";
        } else if (keyCode == DOWN_ARROW) {
            barrel.rotating(true);
            barrel.upOrDown = "d";
        } else if (key == ' ') {
            let bullet = {
                x: barrel.x1,
                y: barrel.y1,
                t: 0,
                a: barrel.angle,
                v: 1.9,
                c: "tank"
            }
            bulletArr.push(bullet);
        }
    } 
    
    
}

function keyReleased() {
    tank.moving(false);
    barrel.rotating(false);
}

function gameScreen() {
    screenNum = 1;
    button.hide();
    
    push();
    
    background(bg);
    
    strokeWeight(0);
    
    fill("blue");
    rect(100, height - 61, 80, 12);
    pop();

    barrel.render();
    tank.render();
    tower.render();
    cannons.render();
    cannonBall.render();
    healthBarTower.render();
    tank.update();
    barrel.update();
    for(let bullet of bulletArr) {
        push();
        fill(51);
        circle(bullet.x, bullet.y, 3);
        pop();
        bullet.x = physicsProjectileMotion(bullet, "x");
        bullet.y = physicsProjectileMotion(bullet, "y");
        bullet.t += 0.006;
    }

    for(let ball of cannonBallArr) {
        push();
        fill(51);
        circle(ball.x, ball.y, 3);
        pop();
        ball.x = physicsProjectileMotion(ball, "x");
        ball.y = physicsProjectileMotion(ball, "y");
        ball.t += 0.006;
    }

    if (winOrLose) {
        if (win) {
            push();
            fill(30);
            textSize(70);
            textFont('fantasy');
            text("YOU WIN!!!", 30, 130);
            pop();
        } else {
            push();
            fill(30);
            textSize(50);
            textFont('fantasy');
            text("YOU LOSE :(", 50, 130);
            pop();
        }
        TSbutton = createButton("Title Screen");
        TSbutton.position(125, 145);
        TSbutton.size(170, 45);
        TSbutton.style('font-size: 25px');
        TSbutton.style('background: #00C8F9');
        TSbutton.style('font-family: fantasy');
        TSbutton.mousePressed(TSpressed); 
        
    
    }
    
    function TSpressed() {
        window.location.reload();
    }
}

function pressed() {
    screenNum = 1;
    
}

function menuScreen() {
    
    push();
    background(bg);
    textSize(70);
    fill(174,228,230);
    rect(123, 132, 170, 85, 5, 5);
    fill(30);
    textFont('fantasy');
    text("Tank", 135, 205);
    textSize(13);
    fill('yellow');
    text("Made By: Isaac Hegg", 270,390);
    pop();

    
    
}

function winScreen() {
    push();
    background(115, 215, 255);
    text("You Win!", 100, 100);
    pop();
}

function loseScreen() {
    push();
    background(115, 215, 255);
    text("You Lose!", 100, 100);
    pop();
}
