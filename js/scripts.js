function customPizza(Size, toppings){
  this.Size = Size;
  this.toppings = toppings;
  this.price = 0;
}
console.log("fun")

//price based on size and toppings 
customPizza.prototype.piePrice= function() {
  let toppingsPrice = this.toppings.length -2; 
  let pPrice = 0;
  let size = this.Size.toString();
  console.log(size)
if (size === "Small") {
    pPrice += 8;  return this.price = this.price +pPrice + toppingsPrice;
} else if (size === "Medium") {
    pPrice+= 15;  return this.price = this.price +pPrice + toppingsPrice;
  } else if (size === "Large") {
    pPrice+= 20;   return this.price = this.price +pPrice + toppingsPrice;
} else if (size === "Family") {
    pPrice+= 30;  return this.price = this.price +pPrice + toppingsPrice;
} 
  return this.price = toppingsPrice + pPrice;
}


// UI function 
$(document).ready(() => {
  $("#form-one").submit((event) => {
    event.preventDefault();
    this.Size = $("#Size").val();
    console.log("hi")
    console.log(Size);
    let toppings = [];
    $("input[name='toppings']:checked").each(function(){
     toppings.push($(this).val());
    });
    console.log(toppings);
    newPizza = new customPizza(Size, toppings,);
    $("#Price").text("$"+ newPizza.piePrice() + " dollars" + "  " + toppings + " YUMMMMM");
    console.log(newPizza.piePrice())
    console.log("hi");
  })
});

