function Tower() {
    this.pos = createVector(0, height - 212);
    this.render = function() {
        push();
        fill(71);
        rect(this.pos.x, this.pos.y, 60, 150);
        fill(90);
        rect(this.pos.x, this.pos.y - 10, 65, 20);
        pop();
    }
}

function Cannons() {
    this.pos = createVector(32, height - 180);
    this.render = function() {
        push();
        fill(20);
        rect(this.pos.x, this.pos.y, 20, 20);
        rect(this.pos.x, this.pos.y + 35, 20, 20);
        rect(this.pos.x, this.pos.y + 70, 20, 20);

        fill(150);
        rect(this.pos.x, this.pos.y + 5, 25, 10, 0, 3, 3, 0);
        rect(this.pos.x, this.pos.y + 40, 25, 10, 0, 3, 3, 0);
        rect(this.pos.x, this.pos.y + 75, 25, 10, 0, 3, 3, 0);
        pop();
    }
}

function CannonBall() {
    this.posArr = [cannons.pos.y + 5, cannons.pos.y + 40, cannons.pos.y + 70];
    this.timer = 0;
    this.cannonNum = 0;

    this.render = function() {
        if (this.timer > 200 && !winOrLose) {
            let ball = {
                x: cannons.pos.x + 28,
                y: this.posArr[this.cannonNum] + 10,
                t: 0,
                a: 0,
                v: (2 * Math.random()) + 1.2,
                c: "tower"
            }
            cannonBallArr.push(ball);
            this.timer = 0;
            this.cannonNum ++;
            if(this.cannonNum == 3) {
                this.cannonNum = 0;
            }
        } else {
            this.timer ++;
        }
        
    }
}

function HealthBarTower() {
    this.health = 10;

    this.pos = createVector(5, height - 240);
    this.render = function() {
        push();
        noFill();
        rect(5, this.pos.y - 1, 55, 11);
        fill("red");
        strokeWeight(0);
        rect(this.pos.x, this.pos.y, 55, 10);
        fill(115, 215, 255);
        rect(0, this.pos.y, 5, 10);
        strokeWeight(1);
        line(5, this.pos.y, 5, this.pos.y + 10);
        strokeWeight(0);
        image(healthBarPic, 0, 160);
        pop();
        
    }
}