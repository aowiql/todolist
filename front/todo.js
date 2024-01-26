document.addEventListener('DOMContentLoaded', () => {

  const addBtn = document.querySelector('.addBtn'); 
  const todoLists = document.querySelector('.todo-list')
  let inputTodo = document.querySelector('.inputTodo');

  const delAllBtn = document.querySelector('.delAllBtn');

  // 투두 리스트 추가
  addBtn.addEventListener('click', (e) => {
    const item = document.createElement('div');

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
})