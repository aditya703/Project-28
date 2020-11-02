class Stone{
    constructor(x, y, width, height){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("sprites/stone.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display(){

        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

    }
}