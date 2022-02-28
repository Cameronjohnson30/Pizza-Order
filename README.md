
Describe: customPizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: let customPizza = new Pizza("medium"), ["anchovies", "pineapple"];
Expected Output: Pizza {size: "medium", toppings: ["anchovies", "pineapple"]}

test: "It should return a new Pizza object with three properties for toppings, size, and price" Code: let newPizza = new customPizza("family", ["anchovies", "pineapple", "olives"], 0); Expected Output: newPizza { size: "family", toppings: ["anchovies", "pineapple", price: 0 }


Describe: piePrice()

Test: "It should return the price of the pizza based on the size and amount of toppings"
code: let newPizza = new customPizza("family", ["anchovies", "pineapple", "olives"]);
Expected Output: newPizza { size: "family", toppings: ["anchovies", "pineapple", "olives"], price: 3 }