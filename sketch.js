var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var foodcount

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  var dog = createSprite(800,300,10,10)
  database=firebase.database();
  console.log(database)
  createCanvas(1000,800);
  dog.addImage(sadDog)
  dog.scale = 0.5

  var foodcountRef = database.ref("foodcount")
  foodcountRef.on("value", function(data){
    foodcount = data.val()
  })
}

function draw() {
  background(46,139,87);
  textSize(30)
  text("food remaining:" + foodcount,600,100)
 
  if(keyDown("UP_ARROW")){
    database.ref("/").update({
      foodcount: foodcount - 1
    })
  }
  drawSprites();
}
