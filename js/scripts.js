function customPizza(Size, toppings){
  this.Size = Size;
  this.toppings = toppings;
  this.price = 0;
}

//price based on size and toppings 
customPizza.prototype.piePrice= function(){
  let toppingsPrice = this.toppings.length -2; 
  let pPrice = 0;
  let size = this.Size.toString();
    if (size === "Small"){
      pPrice += 8;
  } else if (size === "Medium"){
      pPrice+= 15;  
  } else if (size === "Large"){
      pPrice+= 20;   
  } else if (size === "Family"){
      pPrice+= 30;  
  } 
    return this.price = toppingsPrice + pPrice;
  }


// UI function 
$(document).ready(() =>{
  $("#form-one").submit((e) =>{
    e.preventDefault();
    this.Size = $("#Size").val();
    let toppings = [];
    $("input[name='toppings']:checked").each(function(){
      toppings.push($(this).val());
    });
    newPizza = new customPizza(Size, toppings,);
    $("#Price").text("$"+ newPizza.piePrice() + " dollars" + "  " + toppings + " YUMMMMM");  
  })
});
