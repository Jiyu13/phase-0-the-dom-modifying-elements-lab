// Write your code here!

// Make sure you remove the <main> with id 'main'
const main = document.getElementById("main");
main.remove()

// Make sure you create an <h1> and assign it to the 'newHeader' variable
const newHeader = document.createElement("h1");

// /the 'newHeader' variable that points to the <h1> node has an id of 'victory'
newHeader.id = "victory";

// Make sure your <h1> with id 'victory' includes the text "YOUR-NAME is the champion" inside it
newHeader.textContent = "Sam is the champion";

// document.body.append(newHeader);