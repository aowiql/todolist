import { getTodoItems } from './get.js';
import { addTodoBackend } from './post.js';

document.addEventListener('DOMContentLoaded', async () => {

  const addBtn = document.querySelector('.addBtn'); 
  const todoLists = document.querySelector('.todo-list')
  const inputTodo = document.querySelector('.inputTodo');

  const delAllBtn = document.querySelector('.delAllBtn');

  const backUrl = 'http://localhost:8080';

  // GET
  getTodoItems(backUrl, todoLists);

  // 투두 리스트 추가
  addBtn.addEventListener('click', (e) => {
    const item = document.createElement('div');
    item.classList.add('todoItem');

    const text = document.createElement('span');
    const delBtn = document.createElement('button');
    delBtn.textContent = '삭제';
    
    
    if(inputTodo.value != false) {
      text.textContent = inputTodo.value;

      item.appendChild(text);
      todoLists.append(item);
      item.append(delBtn);
      
      inputTodo.value = '';
      inputTodo.focus();

      // backend API
      if(text.textContent !== false) {
        addTodoBackend(backUrl, text.textContent);
      }
    }

    // 투두리스트 하나 삭제
    delBtn.addEventListener('click', (e) => {
        const item = e.target.parentNode;
        todoLists.removeChild(item);
    })
  })

  // 전체 삭제
  delAllBtn.addEventListener('click', (e) => {
    while(todoLists.childNodes.length > 2) {
      todoLists.removeChild(todoLists.lastChild);
    }
  })

});