class Log{
    constructor(x,y,height,angle){
        var option={
            restitution:0.8,
            friction:1.5,
            density:1,
        }
        this.body=Bodies.rectangle(x,y,20,height,option);
        this.height=height;
        this.width=20;
        Matter.Body.setAngle(this.body,angle)

        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        push();
        fill("brown")
        stroke("black");
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
    }