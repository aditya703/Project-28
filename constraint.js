class Constraint{
    constructor(BodyA, pointB){
        var options = {
            bodyA:BodyA,
            pointB:pointB,
            stiffness:0.008,
            length:2
        }
        this.pointB = pointB;
        this.bodyA = BodyA;
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
        }

    display(){
        if(this.rope.bodyA != null){
        var posA = this.rope.bodyA.position;
        var posB = this.pointB;
        strokeWeight(4);
        line(posA.x, posA.y, posB.x, posB.y);
        }
    }

    release(){
        this.rope.bodyA = null;
    }

    attach(){
        this.rope.bodyA = this.bodyA;
    }
}