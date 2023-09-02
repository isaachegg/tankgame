function Barrel() {
    this.isRotating = false;
    this.upOrDown;
    this.angle = PI;
    this.barrelLength = 45;
    //Creates the barrel
    this.pos = createVector(height - 85, width - 89);

    this.x1 = this.pos.x;
    this.y1 = this.pos.y;
    this.x2 = this.pos.x + 45;
    this.y2 = this.pos.y;
    

    this.render = function() {
        push();
        strokeWeight(6);
        stroke(20);
        line(this.x1, this.y1, this.x2, this.y2);
        pop();
    }

    this.rotating = function(x) {
        this.isRotating = x;
        
    }

    this.update = function() {
        if (this.isRotating == true) {
            if (this.upOrDown == 'u' && this.x1 < tank.pos.x + 30) {
                this.angle += 0.01;
            } else if (this.upOrDown == 'd' && this.y1 <= tank.pos.y - 7) {
                this.angle -= 0.01;
            } 

            this.x1 = tank.pos.x + 30 + (cos(this.angle) * this.barrelLength);
            this.y1 = tank.pos.y - 7 + (sin(this.angle) * this.barrelLength);
        }
    }
}