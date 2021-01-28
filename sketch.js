const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){

}

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    shootObj = new Polygon(150,400,15);
    ground = new Ground(width/2,590,width,20);

    slingshot = new SlingShot(this.shootObj.polygon,{x : 150, y : 400});
    
    //upper stand
    stand1 = new Ground(990,270,200,20);
    //lower stand
    stand2 = new Ground(600,400,210,20);
    
    //upper stand blocks
    //5th layer
    box1 = new Box(930,240,30,40);
    box2 = new Box(960,240,30,40);
    box3 = new Box(990,240,30,40);
    box4 = new Box(1020,240,30,40);
    box5 = new Box(1050,240,30,40);
    //4th layer
    box6 = new Box(945,200,30,40);
    box7 = new Box(975,200,30,40);
    box8 = new Box(1005,200,30,40);
    box9 = new Box(1035,200,30,40);
    //3rd layer
    box10 = new Box(960,160,30,40);
    box11 = new Box(990,160,30,40);
    box12 = new Box(1020,160,30,40);
    //2nd layer
    box13 = new Box(975,120,30,40);
    box14 = new Box(1005,120,30,40);
    //1st layer 
    box15 = new Box(990,80,30,40);

    //down stand blocks
    //6th layer
    box16 = new Box(525,370,30,40);
    box17 = new Box(555,370,30,40);
    box18 = new Box(585,370,30,40);
    box19 = new Box(615,370,30,40);
    box20 = new Box(645,370,30,40);
    box21 = new Box(675,370,30,40);
    //5th layer
    box22 = new Box(540,330,30,40);
    box23 = new Box(570,330,30,40);
    box24 = new Box(600,330,30,40);
    box25 = new Box(630,330,30,40);
    box26 = new Box(660,330,30,40);
    //4th
    box27 = new Box(555,290,30,40);
    box28 = new Box(585,290,30,40);
    box29 = new Box(615,290,30,40);
    box30 = new Box(645,290,30,40);
    //3rd layer
    box31 = new Box(570,250,30,40);
    box32 = new Box(600,250,30,40);
    box33 = new Box(630,250,30,40);
    //2nd layer
    box34 = new Box(585,210,30,40);
    box35 = new Box(615,210,30,40);
    //1st layer
    box36 = new Box(600,170,30,40);

    Engine.run(engine);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    shootObj.display();
    slingshot.display();

    stand1.display();
    stand2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();

    box15.display();

    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();

    box27.display();
    box28.display();
    box29.display();
    box30.display();

    box31.display();
    box32.display();
    box33.display();

    box34.display();
    box35.display();

    box36.display();

    fill("red");
    stroke("white");
    strokeWeight(3);
    textSize(30);
    text("Drag the Hexagon and release it towards the blocks",270,30);

    keyPressed();
}

function mouseDragged(){
    Matter.Body.setPosition(shootObj.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){ 
       slingshot.attach(shootObj.polygon);
    }
}