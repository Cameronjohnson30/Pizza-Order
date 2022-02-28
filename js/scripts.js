function customPizza(size, toppings){
  this.size = size;  
  this.toppings = toppings;
  this.price = 0;
}

//price based on size and toppings 
customPizza.prototype.piePrice= function() {
  let toppingsPrice = this.toppings.length;
  let pPrice = 0;

  return this.price = toppingsPrice + pPrice;
}

let newPizza = new customPizza("Family",["anchovies", "pineapple","olives"]); 
newPizza.piePrice()