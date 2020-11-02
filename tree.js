class Tree{
    constructor(x, y, width, height){
        var options = {
            isStatic:true
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("sprites/tree.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display(){
        
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);


    }
}