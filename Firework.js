function Firework() {

  this. hu = random(255);
  this.firework = new Praticle(random(width), height, this.hu, true,);
  this.exploded = false;
  this.praticles = [];

  this.done = function() {
    if (this.exploded && this.praticles.length ===0 ) {
      return true;
    } else {
        return false;
    }
  }

  this.update= function() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }  
    }
    for (var i = this.praticles.length-1; i >= 0; i--) {
        this.praticles[i].applyForce(gravity);
        this.praticles[i].update();
        if (this.praticles[i].done()) {
          this.praticles.splice(i, 1);
        }
        }



  }

  this.explode = function() {
    for (var i = 0; i < 100; i++) {
      var p = new Praticle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.praticles.push(p);
    }
  }

  this.show = function() {
    if (!this.exploded) {
    this.firework.show(); 
  }
  for (var i = 0; i < this.praticles.length; i++) {
    this.praticles[i].show();
    }

  }


}
