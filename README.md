# _Pizza-Order_

#### Authored by _Cameron Johnson,_


## _Technologies Used_

* _HMTL_
* _CSS_
* _JavaScript_
* _JQuery_
* _Markdown_

## Description 

_This website displays a form to fill out with check boxes and a list with values to make a pizza. It was constructed with the guidance of Epicodus._

## Tests

## Describe: customPizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: let customPizza = new Pizza("medium"), ["anchovies", "pineapple"];
Expected Output: Pizza {size: "medium", toppings: ["anchovies", "pineapple"]}

test: "It should return a new Pizza object with three properties for toppings, size, and price" *Code: let newPizza = new customPizza("family", ["anchovies", "pineapple", "olives"], 0); Expected *Output: newPizza { size: "family", toppings: ["anchovies", "pineapple", price: 0 }


## Describe: piePrice()

Test: "It should return the price of the pizza based on the amount of toppings"
code: let newPizza = new customPizza("family", ["anchovies", "pineapple", "olives"]);
Expected Output: newPizza { size: "family", toppings: ["anchovies", "pineapple", "olives"], price: 3}


Test: "It should return the price of the pizza based on the size and amount of toppings"
code: let newPizza = new customPizza("family", ["anchovies", "pineapple", "olives"]);
Expected Output: newPizza { size: "family", toppings: ["anchovies", "pineapple", "olives"], price: 31}

## Setup/Installation Requirements

_Clone or download the repository to your desktop._
_Open index.HTML file_
_to alter the code, open the documents in an IDE or text document
Any changes should incorporate properly formatted commits with regular history._
_if installing on a server, portfolio and related links must be updated to index.html_
_can be scene at https://github.com/Cameronjohnson30/Pizza-Order.git

## No known bugs
* _No known bugs_

## License 
 _This code utilizes a GPL License. If you have any issues/find bugs. Feel free to report them to me at here or contribute a fix to the code. Thanks!_ Copyright (c) _2022_ _Cameron Johnson_
