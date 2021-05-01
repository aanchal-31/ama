
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;
var polygon;
var ground1,ground2;
var backgroundI;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23;
var hour;

function preload() {
 getBackgroundImage();
 polygonI=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
  
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon);



  
    slingshot = new Slingshot(this.polygon,{x:100,y:200});
    ground1 = new Ground(600,370,225,20);
    ground2 = new Ground(1000,250,140,20);
    box1 = new Box(525,350,30,40);
    box2 = new Box(550,350,30,40);
    box3 = new Box(575,350,30,40);
    box4 = new Box(600,350,30,40);
    box5 = new Box(625,350,30,40);
    box6 = new Box(650,350,30,40);
    box7 = new Box(675,350,30,40);
    box8 = new Box(550,300,30,40);
    box9 = new Box(575,300,30,40);
    box10 = new Box(600,300,30,40);
    box11 = new Box(625,300,30,40);
    box12 = new Box(650,300,30,40);
    box13 = new Box(575,275,30,40);
    box14 = new Box(625,275,30,40);
    box15 = new Box(600,275,30,40);
    box16 = new Box(600,250,30,40);
    box17 = new Box(970,210,30,40);
    box18 = new Box(1000,175,30,40);
    box19 = new Box(1000,210,30,40);
    box20 = new Box(1030,210,30,40)





}


  
function draw(){
    if(backgroundI)
 background(backgroundI);
  Engine.update(engine);
  imageMode(CENTER)
  image(polygonI,polygon.position.x,polygon.position.y,40,40);

 
  slingshot.display();
  ground1.display();
  ground2.display();
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
  
 
  

}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
};



function mouseReleased(){
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        slingshot.attach(this.polygon);
    }
};
async function getBackgroundImage(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson=await response.json();
    console.log(responseJson);
    var dateTime = responseJson.datetime;
    console.log(dateTime);
    var hour = dateTime.slice(11,13);
    console.log(hour);
 

 if(hour>=06 && hour<=18){
    bg="light.jpg";
}
else
{
    bg="dark.jpg";
}
backgroundI = loadImage(bg);
}

