var hr;
var mn;
var sc;

function setup() {
  createCanvas(1200,800);
  angleMode(DEGREES);
 // createSprite(400, 200, 50, 50);

 circle1 = new Circle(350,400,150,"red");
 circle2 = new Circle(100,300,150,"green");
 circle3 = new Circle(880,250,150,"blue");
 circle4 = new Circle(700,150,150,"red");
 circle5 = new Circle(650,225,150,"black");
 circle6 = new Circle(750,400,150,"green");
 circle7 = new Circle(500,300,150,"brown");
 circle8 = new Circle(450,750,150,"blue");
 circle9 = new Circle(300,600,150,"yellow");
 circle10 = new Circle(750,700,150,"pink");
}

function draw() {
  background(255,255,255);  
  edges = createEdgeSprites();

  circle1.bubble.bounceOff(edges);
  circle2.bubble.bounceOff(edges);
  circle3.bubble.bounceOff(edges);
  circle4.bubble.bounceOff(edges);
  circle5.bubble.bounceOff(edges);
  circle6.bubble.bounceOff(edges);
  circle7.bubble.bounceOff(edges);
  circle8.bubble.bounceOff(edges);
  circle9.bubble.bounceOff(edges);
  circle10.bubble.bounceOff(edges);

  hr = hour();
  mn = minute();
  sc = second();

  translate(200,200);

 var scAngle = map(sc, 0, 60, 0, 360);
 var mnAngle = map(mn, 0, 60, 0, 360);
 var hrAngle = map(hr %12, 0, 12, 0, 360);

 
 
 push();
 rotate(hrAngle);
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,0,100);
 pop();

 push();
 rotate(mnAngle);
 stroke(0,255,0);
 strokeWeight(7);
 line(0,0,0,100);
 pop();

 push();
 rotate(scAngle);
 stroke(0,0,255);
 strokeWeight(7);
 line(0,0,0,100);
 pop();

 strokeWeight(10);
 stroke(255,0,0);
 noFill();
 arc(0,0,300,300,90,hrAngle);
 
 stroke(0,255,0);
 strokeWeight(10);
 noFill();
 arc(0,0,280,280,90,mnAngle);

 stroke(0,0,255);
 strokeWeight(10);
 noFill();
 arc(0,0,260,260,90,scAngle);
 

  drawSprites();
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();
  circle9.display();
  circle10.display();
}