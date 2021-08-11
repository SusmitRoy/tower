const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;
var bg = "light.jpg";

function preload(){
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(790,250,250,20);

    a = new Box(850,175);
    b = new Box(760,125);
    c = new Box(790,125);
    d = new Box(820,125);
    e = new Box(790,75);
    f = new Box(700,225);
    g = new Box(730,225);
    h = new Box(760,225);
    i = new Box(790,225);
    j = new Box(820,225);
    k = new Box(850,225);
    l = new Box(880,225);
    m = new Box(730,175);
    n = new Box(760,175);
    o = new Box(790,175);
    p = new Box(820,175);

    ball = new Ball(200,50,50,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:200, y:200});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    text(mouseX + ',' + mouseY, 30, 45);
    Engine.update(engine);

    strokeWeight(4);
    ground.display();
    platform.display();

    a.display();
    b.display();
    c.display();
    d.display();
    e.display();
    f.display();
    g.display();
    h.display();
    i.display();
    j.display();
    k.display();
    l.display();
    m.display();
    n.display();
    o.display();
    p.display();

    ball.display();

    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32)
    slingshot.attach(ball.body);
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
console.log(responseJSON)
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(datetime);
    console.log(hour);
    if(hour>=06 && hour<=19){
        bg = "light.jpg";
    }
    else{
        bg = "dark.jpg";
    }

    backgroundImg = loadImage(bg);
}
