var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;
let comments = [];
var frameC = 0;
var frameNum;
var fillC = 70;
var textS = 30;

function setup(){
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("review");
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options = {
    isStatic: true
  }

  comments[0]="I love, love, love this product.";
  comments[1]="I liked it!";
  comments[2]="Great product! Exactly what it says works very well.";
  comments[3]="Awesome value!";
  comments[4]="I didn't really like the smell of the lotion.";
  comments[5]="It doesn't last very long...";


  for (let i = 0; i < 10; i++) {
    w = 300;
    h = 80;
    var posx = random(0.2*width,width-0.2*width);
    var posy = random(0,height);
    fillC = random(50,60);
    textS = random(20,30);
    boxes.push(new Box(posx, posy,w,h,textS,fillC))
  }
  ground = Bodies.rectangle(800, height, width, 50, options);
  wallLeft = Bodies.rectangle(-30,0,30,canvas.height);
  wallRight = Bodies.rectangle(canvas.width,0, 30, canvas.height);
  World.add(world,ground);
  World.add(world,wallLeft);
  World.add(world,wallRight);
}

function draw(){
  background(24);
  push();
  frameC += 0.1;
  frameNum = ceil(frameC);
  if (frameNum%5 == 0) {
    w = 300;
    h = 80;
    textS = random(20,30)
    var posx = random(0.2*width,width-0.2*width);
    var posy = random(0,height);
    fillC = random(50,60);
    boxes.push(new Box(posx, posy,w,h,textS,fillC))
  }
  for (var i=0; i < boxes.length; i++){
    boxes[i].show();
  }
}

function mouseDragged(){
    w = 300;
    h = 80;
    textS = random(20,30)
    var posx = random(0.2*width,width-0.2*width);
    var posy = random(0,height);
    boxes.push(new Box(posx, posy,w,h,textS,fillC))
}


function Box(x,y,w,h,textS,fillC){
    this.body = Bodies.rectangle(x, y, w, h);
    this.w=w;
    this.h=h;
    this.comment = random(comments)
    World.add(world, this.body);

    this.show = function(){
    var pos=this.body.position;
    var angle=this.body.angle;
    fill(fillC);
    push();
    translate(pos.x,pos.y);
    textSize(textS);
    textFont('DM Serif Display');
    text(this.comment, 0,0,this.w,this.h);
    //image(this.emoji, 0,0,this.w,this.h);
    pop();
  }
}

