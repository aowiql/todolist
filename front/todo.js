document.addEventListener('DOMContentLoaded', () => {

  const addBtn = document.querySelector('.addBtn'); 
  const todoLists = document.querySelector('.todo-list')
  let inputTodo = document.querySelector('.inputTodo');
  let result = document.querySelector('result');
  
  addBtn.addEventListener('click', (e) => {
    const item = document.createElement('div');

    const text = document.createElement('span');
    
    if(inputTodo.value != false) {
      text.textContent = inputTodo.value;

      item.appendChild(text);
      todoLists.append(item);
      
      inputTodo.value = '';
      inputTodo.focus();
    }
  })

})