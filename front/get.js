export const getTodoItems = async (backUrl, todoLists) => {
  try {
    const response = await fetch(`${backUrl}/api/lists`);
    const data = await response.json();

    data.forEach((todo) => {
      const item = document.createElement('div');
      item.setAttribute('todoId', todo.id);
      item.classList.add('todoItem');

      const text = document.createElement('span');
      text.textContent = todo.todoTask;

      const delBtn = document.createElement('button');
      delBtn.textContent = '삭제';
      delBtn.classList.add(`todoId=${todo.id}`);

      const todoDone = todo.todoDone;

      if(todoDone) {
        item.classList.add('completed');
      } else {
        item.classList.add('notCompleted');
      }

      item.appendChild(text);
      item.appendChild(delBtn);
      todoLists.append(item);
    });
  } catch (error) {
    console.error('Error', error);
  }
};
