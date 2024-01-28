import { getTodoItems } from './get.js';
import { addTodoBackend } from './post.js';
import { deleteTodoBackend } from './delete.js';

document.addEventListener('DOMContentLoaded', async () => {
  const addBtn = document.querySelector('.addBtn'); 
  const todoLists = document.querySelector('.todo-list')
  const inputTodo = document.querySelector('.inputTodo');
  const delAllBtn = document.querySelector('.delAllBtn');
  const backUrl = 'http://localhost:8080';

  const delBtn = document.createElement('button');
  delBtn.textContent = '삭제';

  // GET
  await getTodoItems(backUrl, todoLists);

  const todoItems = document.querySelectorAll('.todoItem');

  todoItems.forEach((item) => {
    const todoId = item.getAttribute('todoId');
    const deleteButton = item.querySelector('button');
    
    // GET -> DELETE
    deleteButton.addEventListener('click', async () => {
      await deleteTodoBackend(backUrl, parseInt(todoId));
      todoLists.removeChild(item);
    });
  });

  delBtn.addEventListener('click', async () => {
    const todoId = delBtn.parentElement.getAttribute('todoId');

    if(todoId) {
      await deleteTodoBackend(backUrl, parseInt(todoId));
      todoLists.removeChild(delBtn.parentElement);
    }
  })

  // 투두 리스트 추가
  addBtn.addEventListener('click', async () => {
    const item = document.createElement('div');
    item.classList.add('todoItem');

    const text = document.createElement('span');

    const delBtn = document.createElement('button');
    delBtn.textContent = '삭제';
  
    
    if(inputTodo.value != '') {
      text.textContent = inputTodo.value;

      item.appendChild(text);
      todoLists.append(item);
      item.append(delBtn);
      
      inputTodo.value = '';
      inputTodo.focus();

      // backend API
      const addItem = await addTodoBackend(backUrl, text.textContent);
      
      if(text.textContent.trim() !== '') {
        console.log('ad',addItem)
        item.setAttribute('todoId', addItem.id);

      }
        // POST -> DELETE
         delBtn.addEventListener('click', async () => {
          await deleteTodoBackend(backUrl, parseInt(addItem.id));
          todoLists.removeChild(item);
         });
    }
  })

  // 전체 삭제
  delAllBtn.addEventListener('click', (e) => {
    while(todoLists.childNodes.length > 2) {
      todoLists.removeChild(todoLists.lastChild);
    }
  })

});