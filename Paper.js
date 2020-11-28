class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius
      
      World.add(world, this.body);
    }
    display(){
     var pos = this.body.position

      push();
      fill("pink");
      translate(pos.x,pos.y);
      circle(0,0,this.radius)
      pop();
    }
  };
  