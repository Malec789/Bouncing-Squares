class Box{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        

        var boxOptions = {
            "restitution": 1,
            "friction": 0.5,
            "density": 0.5,
        }

        this.body = Bodies.rectangle(this.x, this.y, width, height, boxOptions); 
        this.width = width;
        this.height = height;
        World.add(world, this.body);        
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);   
        pop();
    }

}