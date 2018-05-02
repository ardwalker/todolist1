

const addItemForm = document.querySelector('.add-item');
const newItemInput = document.querySelector('.add-item [name=item]');
const todoItems = document.querySelector('.todo-items');

let items = JSON.parse(localStorage.getItem('todo-items')) || [];

function addItem(e) {
  // stop normal event chain
  e.preventDefault();  

  // create a list item and add to the list
  items.push({ text: newItemInput.value, done: false });
  
  populateTodoList(items,todoItems);

  localStorage.setItem('todo-items', JSON.stringify(items));

  // clears the form
  this.reset(); 
}

function populateTodoList(items = [], todoItemsNode) {
  todoItemsNode.innerHTML = items.map((item, i) => {
    return `
    <li class="todo-item">
      <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
      <label for="item${i}">${item.text}</label>
    </li>
  `;
  }).join('');
}


function toggleDone(e) {
  if(!e.target.matches('input')) return; // skip unless its an input
  const el = e.target;
  console.log(e.target);
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('todo-items', JSON.stringify(items));
  populateTodoList(items, todoItems);
}

populateTodoList(items,todoItems);

addItemForm.addEventListener('submit', addItem);
todoItems.addEventListener('click', toggleDone);

