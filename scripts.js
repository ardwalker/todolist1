

const addItemForm = document.querySelector('.add-item');
const newItemInput = document.querySelector('.add-item [name=item]');
const todoItems = document.querySelector('.todo-items');

let todoListItems = [];

function addItem(e) {
  // stop normal event chain
  e.preventDefault();  

  // create a list item and add to the list
  todoListItems.push(newItemInput.value);
  
  populateTodoList(todoListItems);
  
  // clears the form
  this.reset(); 
}

function populateTodoList(text) {
  todoItems.innerHTML = todoListItems.map((item, i) => {
    return `
    <li class="todo-item">
      <input type="checkbox" id="item${i}"/>
      <label for="item${i}">${item}</label>
    </li>
  `;
  }).join('');
}

addItemForm.addEventListener('submit', addItem);