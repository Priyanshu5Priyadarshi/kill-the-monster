var Engine = Matter.Engine,
      Body = Matter.Body,
     World = Matter.World;

var SuperHero,HeroImg;
var Monster,MonsterImg;
var background,BackgroundImg;


function preload() {
//preload the images here
HeroImg       = loadImage("images/Superhero-01.png");
BackgroundImg = loadImage("images/GamingBackground.png");
MonsterImg    = loadImage("images/Monster-01.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world= Engine.World;
  SuperHero = createSprite(1500,400,20,20);
  SuperHero.addImage(HeroImg);

  Monster = createSprite(200,300,20,20);
  Monster.addImage(MonsterImg);

}

function draw() {
  background(BackgroundImg);
SuperHero.dispaly();
Monster.display();
background.display();
}

