function customPizza(size, toppings){
  this.size = size;  
  this.toppings = toppings;
  this.price = 0;
}

let newPizza = new customPizza("medium",["anchovies", "pineapple"]); 
newPizza