class Ground{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        var groundOptions = {
            isStatic: true,
        }

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, groundOptions); 
        World.add(world, this.body);
        
    }

    display(){
        var pos = this.body.position;
         rectMode(CENTER);
         fill(255);

         rect(pos.x, pos.y, this.width, this.height);

    }

}