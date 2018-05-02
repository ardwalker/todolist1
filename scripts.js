

const addItems = document.querySelector('.add-items');
const newItemInput = document.querySelector('.add-items [name=item]');
const listItems = document.querySelector('.list-items');


function addItem(e) {
  e.preventDefault();  
  createTodoItem(newItemInput.value);
  newItemInput.text = '';
}

function createTodoItem(text) {
  const newItem = document.createElement('li');
  newItem.appendChild(document.createTextNode(text));
  listItems.appendChild(newItem); 
}

addItems.addEventListener('submit', addItem);