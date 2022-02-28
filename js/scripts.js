function customPizza(size, toppings){
  this.size = size;  
  this.toppings = toppings;
}

let newPizza = new customPizza("medium",["anchovies", "pineapple"]); 
newPizza