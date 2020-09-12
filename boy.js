class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.boy = Constraint.create(options);
        this.image = loadImage("boy.png");
        World.add(world, this.boy);
    }
     
    fly(){
        this.boy.bodyA = null;
    }

    display(){
       if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            pop();
        }
    }   
}        