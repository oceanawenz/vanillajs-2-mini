document.querySelector("form").addEventListener("submit", addToDo);

function addToDo(event) {
  //preventing the default form action from running
  event.preventDefault();
  //create a new list item
  const item = document.createElement("li");
  //set the text of the newly created list item to the value of
  //the input with an id of item
  item.innerText = document.getElementById("item").value;
  //add completeToDo function to each item to greay out item on click
  item.addEventListener("click", completeToDo);
  //create new button element
  const button = document.createElement("button");

  //adding an "x" to the inside of the button
  button.innerText = "X";
  //add removeToDo function to the button of each list item
  button.addEventListener("click", removeToDo);
  item.appendChild(button);
  //select the unordered list that will hold the newly created li
  const list = document.querySelector("ul");
  //attach the newly created li to the unordered list
  list.appendChild(item);
  //(user experience: clear input out after submission)
  document.getElementById("item").value = "";
}

//removeToDo function as a callback to the button ofeach list item created
function removeToDo(event) {
  //event.target => button
  //event.target.parentNode => li
  event.target.parentNode.remove();
}

function completeToDo(event) {
  //value of the "aria-checked" attribute item that was clicked
  const value = event.target.getAttribute("aria-checked");
  //if the value is "false" set it to t"rue"
  if (value !== "true") {
    event.target.setAttribute("aria-checked", "true");
  } else {
    //if the value is "true" set it to "false"
    event.target.setAttribute("aria-checked", "false");
  }
}
