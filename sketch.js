var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  //create division objects
  for (var k = 0; k <=100; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  //create 3rd row of plinko objects
  for (var j = 35; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
  
  //create 4th row of plinko objects
  for (var j = 15; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
  
  //create particle objects
  ball1=new Particle(200,200,10);
ball2=new Particle(200,210,10);
ball3=new Particle(200,220,10);
ball4=new Particle(200,230,10);
ball5=new Particle(200,240,10);
ball6=new Particle(200,250,10);
ball7=new Particle(200,260,10);
ball8=new Particle(200,270,10);
ball9=new Particle(200,280,10);
ball10=new Particle(200,290,10);
ball11=new Particle(200,300,10);
ball12=new Particle(200,310,10);
ball13=new Particle(200,320,10);
ball14=new Particle(200,330,10);
ball15=new Particle(200,340,10);
ball16=new Particle(200,350,10);
ball17=new Particle(200,360,10);
ball18=new Particle(200,370,10);
ball19=new Particle(200,380,10);
ball20=new Particle(200,390,10);
ball21=new Particle(200,400,10);
ball22=new Particle(200,410,10);
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

 
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
// if(frameCourt %60 === 0){
//particles.push(new Particles(random(width/2-50,width/2+50),10,10));
  //}
  //display the paricles 
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
ball6.display();
ball7.display();
ball8.display();
ball9.display();
ball10.display();
ball11.display();
ball12.display();
ball13.display();
ball14.display();
ball15.display();
ball16.display();
ball17.display();
ball18.display();
ball19.display();
ball20.display();
ball21.display();
ball22.display();
}