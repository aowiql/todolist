export const updateTodo = async (backUrl, todoId, todoDone) => {
  try {
    const response = await fetch(`${backUrl}/api/lists`, {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        id:todoId,
        todoDone:!todoDone,
      }),
    });

    if(response.ok) {
      console.log('Todo update Success');
      return true;
    } else {
      console.error('Fail to update');
      return false;
    }
  } catch (error) {
    console.error('Error', error);
    return false;
  }
}