let DootIt = [];
let bub1;
let bubble = [];
let x=0

let self = {};
self.id = 0;
self.name = "David Queiroga";
self.foods = ["oatmeal", "avacados", "cookies"];

let object = {};
object.id = 1;
object.name = "Disney World Statue";

function setup() {
  createCanvas(600, 600);
  
  DootIt[0] = loadImage('assets/image0.jpg');
  
  bub1= new Star();
  frameRate(10);
  
    for (let i = 0; i < 200; i++) {
    bubble[i] = new Bobble();
  }
}

function draw() {
  background(0,0,0,30);
  
    for (let i = 0; i < 200; i++) {
    bubble[i].show();
    bubble[i].move();
  }
  
  image(DootIt[0], 50, 0,500,600);
  
  x1 = random(0, width);
  y1 = random(0, height);
  x2 = random(0, width);
  y2 = random(0, height);
  x3 = random(0, width);
  y3 = random(0, height);
  x4 = random(0, width);
  y4 = random(0, height);
  x5 = random(0, width);
  y5 = random(0, height);
  
  ellipse (x1,y1,5,5);
  ellipse (x2,y2,7,7);
  ellipse (x3,y3,3,3);
  ellipse (x4,y4,4,4);
  ellipse (x5,y5,5,5);
  
  bub1.show();
  fill(0);
  rect(50,0,x,40);
  if (x < 200) {x++;
   }else if(x >= 200)
   { x = 0;}
  
  fill(random(0,255),random(0,255),random(0,255));
  textSize(20);
  text("DAVID QUEIROGA",50,20);
  
  fill(255);
  textSize(10);
  text("Gift from my parents when I was",400,20);
  textSize(10);
  text("around 5. It's my treasured bobble",400,30);
  textSize(10);
  text("head.",400,40);
}

class Star {
  constructor(){
    this.x=random(0,width);
    this.y=random(0,height);
  }
  
  show(){
    ellipse(this.x,this.y,5,5)
  }
}

class Bobble {
  constructor() {
    this.bubX = random(width);
    this.bubY = random(height);
    this.bubC = 20;
    this.speed = 1;
    this.rc = color(random(255), random(255), random(255));
  }

  show() {
    noStroke();
    fill(this.rc);
    ellipse(this.bubX, this.bubY, this.bubC - 10, this.bubC + 10)
    if (this.bubX > 200) {
      this.bubC = this.bubC + 0.25;
    } else if (this.bubX < 200) {
      this.bubC = this.bubC - 0.75;
    }
    if (this.bubC > 100 || this.bubC < -100) {
      this.bubC = 20;
    } 
  }
  
  move() {
  this.bubX = this.bubX + this.speed;
  this.bubY = this.bubY - this.speed;
  if (this.bubY <= 0) {
    this.speed = -1;
  }
  if (this.bubY >= 400) {
    this.speed = 1;

    if (this.bubX >= 400) {
      this.speed = -1;
    } else if (this.bubX <= 0) {
      this.speed = 1;
    }
  }
  }
}