jQuery_Form_Validation
Below, you will complete a series of tasks that will go over form validation using jQuery.



Create a Form and add validations using jQuery

Utilize the HTML and CSS provided below

Create a function that will fire when the submit <button> is clicked

Make sure the function loaded after the DOM

Inside the function:

create variables for each of the form inputs
use jQuery to accomplish this task
(think about querySelector)
create an array named required
store the variables you've name, email, and phone number
Utilize a for loop to iterate of the entire required array
Inside the for loop:
use an if statement to check the value of each array item
if the array item is equal to an empty string ("")
populate the message <p> with the following text:
"Please Fill Out Required Fields"
add the warning class to this message
Attach the warning class to the array item's <label>
note: You want the label to turn red, if the field is empty
once the field has something other than a blank string. make sure the warning class is removed
close out the for loop
utilize another if statement
verify that no <label>'s have the warning class
if true
remove the form from the DOM
manipulate the <h2> to say: "Thanks for your feedback!"
close your function