class Mango{
    constructor(x, y, width, height){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("sprites/mango.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display(){
        
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);


    }
}