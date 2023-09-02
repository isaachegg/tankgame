function Tank() {
    this.isMoving = false;
    this.rightOrLeft;
    
    //Creates the Tank
    this.pos = createVector(width - 70, height - 82);
    this.render = function() {
        push();
        fill(121,153,67);
        circle(this.pos.x + 30, this.pos.y, 15)
        rect(this.pos.x, this.pos.y, 60, 24, 10, 10);
        fill(51);
        rect(this.pos.x, this.pos.y + 12, 60, 12, 5, 5);
        pop();
    }

    this.moving = function(x) {
        this.isMoving = x;
    }

    this.update = function() {
        if (this.isMoving == true) {
            if (this.rightOrLeft == "r" && this.pos.x < width - 60) {
                this.pos.x ++;
                barrel.x1 ++;
                barrel.x2 ++;
            } else if (this.rightOrLeft == "l" && this.pos.x >= width - 220) {
                this.pos.x --;
                barrel.x1 --;
                barrel.x2 --;
            } 
        }
    }
}