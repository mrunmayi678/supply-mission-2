class Zone{
    constructor(x,y,width,height){
        var options={
            "restitution":0.8,
            "friction":0.3,
            "density":1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,50,50);
    }
}
