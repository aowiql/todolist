import { getTodoItems } from './get.js';
import { addTodoBackend } from './post.js';
import { deleteTodoBackend } from './delete.js';
import { updateTodo } from './put.js'

document.addEventListener('DOMContentLoaded', async () => {
  const addBtn = document.querySelector('.addBtn'); 
  const todoLists = document.querySelector('.todo-list')
  const inputTodo = document.querySelector('.inputTodo');
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

  // GET -> PUT
  todoItems.forEach((item) => {
    const todoId = item.getAttribute('todoId');
    const checkbox = item. querySelector('input[type="checkbox"]');

    if(checkbox) {

      checkbox.addEventListener('change', async () => {
        const success = await updateTodo(backUrl, parseInt(todoId), checkbox);
        
        if (success) {
          console.log(`Todo ${todoId} status updated`);

          item.classList.toggle('completed', checkbox.checked);
          item.classList.toggle('notCompleted', !checkbox.checked);
        } else {
          console.error(`Failed to update todo ${todoId} status`);
          checkbox.checked = !checkbox.checked;
        }
      })
    } else {
      console.error("Checkbox not found inside todoItem");
    }
  });

  // 투두 리스트 추가
  addBtn.addEventListener('click', async () => {
    const item = document.createElement('div');
    item.classList.add('todoItem');

    const text = document.createElement('span');

    const delBtn = document.createElement('button');
    delBtn.textContent = '삭제';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
  
    if(inputTodo.value != '') {
      text.textContent = inputTodo.value;

      item.appendChild(checkBox);
      item.appendChild(text);
      item.append(delBtn);
      todoLists.append(item);
      
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

   // POST -> PUT
   const todoId = item.getAttribute('todoId');
   const checkbox = item.querySelector('input[type="checkbox"]');

   if (checkbox) {
     checkbox.addEventListener('change', async () => {
       const success = await updateTodo(backUrl, parseInt(todoId), checkbox);

       if (success) {
         console.log(`Todo ${todoId} status updated`);
         item.classList.toggle('completed', checkbox.checked);
         item.classList.toggle('notCompleted', !checkbox.checked);
       } else {
         console.error(`Failed to update todo ${todoId} status`);
         checkbox.checked = !checkbox.checked;
       }
     });
   } else {
     console.error('Checkbox not found inside todoItem');
   }

  });

});