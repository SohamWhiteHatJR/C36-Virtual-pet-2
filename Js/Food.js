/*class Food{
    constructor(Foodstock,lastFed){
    this.image = loadImage("images/Milk.png");
   

    getFoodStock();
    updateFoodStock();
    deductFoodStock();

    }
    display(){
    var x = 80;
    var y = 100;

    imageMode(CENTER);
    image(this.image,720,220,70,70);

    if(this.Foodstock != 0){
        for (var i=0;i<this.Foodstock;i++){
            if(i%10==0){
                x = 80;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x += 30;
        }
    }
    }
}*/
class Food{
    constructor(){
        this.image=loadImage("images/Milk.png");

        this.foodStock=0;
        this.lastFed;  
    }

    getFoodStock(){
    return this.foodStock;
    }

    updateFoodStock(foodStock){
        this.foodStock=foodStock;
    }

    getFedTime(lastFed){
        this.lastFed=lastFed;
      }

    deductFood(){
      if(this.foodStock>0){
        this.foodStock=this.foodStock-1;
      }
        
    }
    
    display(){
    var x=80,y=100;
    
    imageMode(CENTER);
 
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=30;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
  }
} 

