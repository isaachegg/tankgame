
function physicsProjectileMotion(bullet, xOrY) {
    
    //Set the gravity of the game and the velocity of the bullet
    this.GRAVITATIONAL_CONSTANT = 9.8;
    

    //First checks if the bullet has reached ground level
    //If it has then it stops the bullet
    //If it hasn't then it returns the distance traveled in the x or y direction
    //based on the time passed(bullet.t) and the xOrY perameter
    
    if(hit(bullet)) {
        if (bullet.c == "tank") {
            healthBarTower.pos.x -= 5;
            if (healthBarTower.pos.x <= -55 && !winOrLose) {
                winOrLose = true;
                win = true;
            } else if (bullet.t > 1) {
                winOrLose = true;
            }
            
            return 500;
        } else if (bullet.c == "tower") {
            
            winOrLose = true;
            //win = true;
            
            return 500;
        }
        
    }
    if (bullet.y > height - 62) {
        if (bullet.x > 103 && bullet.x < 180) {
            return 500;
        }
        if(xOrY == "x") {
            return bullet.x;
        }
        return bullet.y;
    } else {
        if(xOrY == "x") {
            return bullet.x + (bullet.v * cos(bullet.a));
        }
        return bullet.y + ((bullet.v * sin(bullet.a))) + ((0.5 * this.GRAVITATIONAL_CONSTANT) * (bullet.t * bullet.t));
    }
}

function hit(bullet) {
    if (bullet.y < height - 62 && bullet.y > 188) {
        if(bullet.x < 60) {
            return true;
        } 
    } 
    if (bullet.y < height - 62 && bullet.y > 308) {
        if(bullet.x > tank.pos.x && bullet.x < tank.pos.x + 60) {
            
            return true;
        }
    }
    return false;
}