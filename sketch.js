var en,w,ob

function setup() {
  createCanvas(400,400);
  en=Matter.Engine.create()
  w=en.world
  ob=Matter.Bodies.rectangle(200,380,400,20,{isStatic:true})
  Matter.World.add(w,ob)

  ball=Matter.Bodies.circle(200,200,20,{restitution:1})
  Matter.World.add(w,ball)
  console.log(ball)
}

function draw() {
  background(0);
  Matter.Engine.update(en)  
  fill ("brown")
 rectMode(CENTER) 
rect(ob.position.x,ob.position.y,400,20)

circle(ball.position.x,ball.position.y,40)
}