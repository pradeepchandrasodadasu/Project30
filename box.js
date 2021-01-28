class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic : false,
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 225;
        World.add(world, this.body);
    }
    
    display(){
        if(this.body.speed < 5){
            rectMode(CENTER);
            fill("blue");
            stroke("white");
            strokeWeight(1.5);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
           }else {
            World.remove(world, this.body);
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
           }
        
        
    }
}