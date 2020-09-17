const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var ball_options ={
        isStatic: false,
        restitution:0.9
    }

    ball = Bodies.circle(200,100,30,ball_options);
    World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse (ball.position.x,ball.position.y,30,30);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
}