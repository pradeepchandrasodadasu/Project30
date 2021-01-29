class Polygon {
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            density : 1.2,
            friction : 1
        }
        this.polygon = Bodies.circle(x,y,radius,options);
        this.image = loadImage("polygon.png");
        World.add(world,this.polygon);
    }
    display(){
        var pos = this.polygon.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
    }
}
