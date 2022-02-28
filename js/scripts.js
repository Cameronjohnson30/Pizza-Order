function customPizza(Size, toppings){
  this.Size = Size;
  this.toppings = toppings;
  this.price = 0;
}

//price based on size and toppings 
customPizza.prototype.piePrice= function() {
  let toppingsPrice = this.toppings.length -2; 
  let pPrice = 0;
  let size = this.Size
  console.log(size)
if (size === "Small") {
    pPrice += 8;
} else if (size === "Medium") {
    pPrice+= 15;  
  } else if (size === "Large") {
    pPrice+= 20;   
} else if (size === "Family") {
    pPrice+= 30;  
} 
  return this.price = toppingsPrice + pPrice;
}

let newPizza = new customPizza("Family",["anchovies", "pineapple","olives"]); 
newPizza.piePrice()