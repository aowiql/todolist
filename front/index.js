import { getTodoItems } from './get.js';
import { addTodoBackend } from './post.js';
import { deleteTodoBackend } from './delete.js';

document.addEventListener('DOMContentLoaded', async () => {

  const addBtn = document.querySelector('.addBtn'); 
  const todoLists = document.querySelector('.todo-list')
  const inputTodo = document.querySelector('.inputTodo');

  const delBtn = document.createElement('button');
  delBtn.textContent = '삭제';

  const delAllBtn = document.querySelector('.delAllBtn');

  const backUrl = 'http://localhost:8080';

  // GET
  await getTodoItems(backUrl, todoLists);

  const todoItems = document.querySelectorAll('.todoItem');
  console.log(todoItems);

  todoItems.forEach((item) => {
    const todoId = item.getAttribute('todoId');
    const deleteButton = item.querySelector(`.todoId\\=${todoId}`);
    
    deleteButton.addEventListener('click', () => {
      deleteTodoBackend(backUrl, parseInt(todoId));
    });
  });

  // 투두 리스트 추가
  addBtn.addEventListener('click', (e) => {
    const item = document.createElement('div');
    item.classList.add('todoItem');

    const text = document.createElement('span');
    
    if(inputTodo.value != false) {
      text.textContent = inputTodo.value;

      item.appendChild(text);
      todoLists.append(item);
      item.append(delBtn);
      
      inputTodo.value = '';
      inputTodo.focus();

      // backend API
      if(text.textContent.trim() !== '') {
        addTodoBackend(backUrl, text.textContent);
      }
    }
  })

  // 투두리스트 하나 삭제
  delBtn.addEventListener('click', (e) => {
      console.log('삭제 버튼 클릭됨');

      const item = e.target.parentNode;
      todoLists.removeChild(item);
      console.log('Parent Node:', item);

      const todoId = item.getAttribute('todoId');
      console.log('Todo ID:', todoId);

      deleteTodoBackend(backUrl, todoId);
  });

  // 전체 삭제
  delAllBtn.addEventListener('click', (e) => {
    while(todoLists.childNodes.length > 2) {
      todoLists.removeChild(todoLists.lastChild);
    }
  })

});