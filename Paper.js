class Paper{
    constructor(x,y){
        var option={
            density : 1,
            friction : 0.2,
            restitution : 0.8
        }

        this.body=Bodies.rectangle(x,y,30,30,option);
        this.width=30,
        this.height=30;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

  
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}