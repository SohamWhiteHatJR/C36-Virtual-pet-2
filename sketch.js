/*var dog , dogImage , happyDogImage;
var database;
var foodS , foodStock;
var fedTime , lastFed;
var feed , addFood;
var foodObj;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(600,600);
  
  database = firebase.database();

  dog = createSprite(300,350);
  dog.addImage(dogImage);
  dog.scale = 0.3
   
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
 
  background(46, 139, 87);
  drawSprites();

  foodObj.display();

  textSize(25);
  fill("brown");
  text("Food Remaining"+foodS,100,75);
  text("NOTE:Press Up Arrow Key To Feed Dog",100,30);

 /* if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  }
 
  if(foodS === 0){
    dog.addImage(happyDogImage)
  }
}
fedTime = database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed = data.val();
})

fill(255,255,254)
textSize(15)
if(lastFed>=12){
  text("Last Feed: "+lastFed%12 + "PM",350,30);
}else if(lastFed == 0){
  text("Last Feed : 12 Am",350,30);
}else{
  text("Last Feed : "+lastFed + "Am",350,30);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0
  }else{
    x -= 1;
  }

database.ref('/').update({
  Food : x
})
}

function feedDog(){
  dog.addImage(happyDogImage);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
  Food : foodObj.getFoodStock(),
  fedTime : hour()
  })
}

function addFood(){
  foodS++;
  database.ref('/').update({
    Food : foodS
  })
}*/

var rabbitImage;
var rabbitImage2;
var rabbit;
var database;
var food,foodStock,nameref,foodS;
var feed,addfood;
var fedTime,lastFed;
var input,button,greeting,Name;

function preload(){
  DogImage = loadImage("images/dogImg.png");
  DogImage2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  Dog = createSprite(400,250,50,50);
  Dog.addImage(DogImage);
  Dog.scale = 0.3;

  food = new Food()

  database = firebase.database();

  
  foodStock = database.ref("Food");
  foodStock.on("value",read,console.log("error"));

 
  nameref=database.ref("name");
  nameref.on("value",function(data){
    name=data.val();
  })
  
  
  feed=createButton("Feed the Dog");
  feed.position(580,67);
  feed.mousePressed(feeddog);


  addFood=createButton("Add Food")
  addFood.position(400,100);
  addFood.mousePressed(addFoods);


  input=createInput("Change Pet Name");
  input.position(400,67);
  
  
  button=createButton("SUBMIT");
  button.position(500,90);
  button.mousePressed(renamindog)

}


function draw() {  
  background("yellow");
  
  food.display()
   
  fedTime=database.ref("FeedTime");
  fedTime.on("value",function(data){
     lastFed=data.val();
   })
  
 
  fill("white");
  textSize(15);
  if(lastFed>=12){
    fill("purple")
    text("Last Feed : "+ lastFed%12 + " PM",350,30);

  }else if(lastFed===0){
    fill("purple")
     text("Last Feed : 12 AM",350,30)
   }else{

     fill("purple")
     text("Last Feed : "+ lastFed + " AM",350,30);
   }
 
   if(Name!==undefined){
   text("Your Pet Name: "+ name,55,100);
   }
 
   drawSprites();
  }

function read(data){
  foodS= data.val();
  food.updateFoodStock(foodS);
}

function feeddog(){
  if(foodS>0){
  Dog.addImage(DogImage2);
  Dog.scale = 0.3
}

  food.updateFoodStock(food.getFoodStock()-1);
  database.ref("/").update({
    Food: food.getFoodStock(),
    FeedTime: hour()
  })
  
}

function addFoods(){
  foodS++;
  database.ref("/").update({
    Food:foodS
  })
}

function renamindog(){
  Name=input.value();
  button.hide();
  input.hide();
  database.ref("/").update({
  name:Name
  })

}
