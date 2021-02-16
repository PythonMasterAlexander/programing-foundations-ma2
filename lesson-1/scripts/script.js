/*Question 1 Use a JavaScript string method to determine whether 
these strings are equal regardless of letter case.*/

var requireName = "Gerterud";
var suppliedName = "GERTERUD"

if (requireName.toUpperCase() === suppliedName) {
  console.log("The requierd name is equal to the supplied name ");
}

/*Question 2 Write an if statement to check if the variable below has a 
minimum character count of 4 and a maximum of 10
If both tests pass log a message saying "Acceptable username".
If either test fails use nested if statements to indicate which test failed, 
e.g. if the character count is too low, log the message "Too few characters". 
If the character count is too high, log the message "Too many characters".
Change the variable's value to test your code.*/

var userName = "ale";
if ((userName.length >= 4) && (userName.length <= 10)) {
  console.log("Acceptable username ");
} else {
  if (userName.length < 4) {
    console.log("Too few characters");
  }
  if (userName.length > 10) {
    console.log("Too many characters");
  }
}

/*Question 3 The following criteria need to be met before an order 
can be considered complete:
The invoice must be paid
The product must have been dispatched
The customer must have signed for the delivery
Using the variables below write an if/else statement that determines whether 
the order is complete
If the order is complete log the message "Order complete". If not, 
use nested if statements to indicate why the order is incomplete.
Use the logical AND (&&) operator to complete this task.
Change the variables' values to test your code.
*/

//NB if I use === operator, on any of the nested if statements, the statment will be true, so use not equal operator
var invoicePaid = false;
var productDispatched = true;
var customerHasSigned = false;

if ((invoicePaid === true) && (productDispatched === true) && (customerHasSigned === true)) {
  console.log("Order complete");
} else {
  if (invoicePaid !== true) {
    console.log("The invoice have not been paid");
  }

  if (productDispatched !== true) {
    console.log("The product has not been dispatched yet");
  }

  if (customerHasSigned !== true) {
    console.log("The customer have not signed yet");
  }
} 

//NB when using the or operator we switch the first console log message to Order not completed
//NB Remember to place the else statment outside the if block
/*Question 4 Re-write your code from the question above using the logical OR (||) operator.*/

if ((invoicePaid === true) || (productDispatched === true) || (customerHasSigned === true)) {
  console.log("The order is not completed");  

  if (invoicePaid !== true) {
    console.log("The invoice has not been paid");
  }

  if (productDispatched !== true) {
    console.log("The product has not been dispatched yet");
  }

  if (customerHasSigned !== true) {
    console.log("The customer has not signed yet");
  }
} else {
    console.log("Order complet");
}

