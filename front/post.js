export const addTodoBackend = async (backUrl, todoTask) => {
  try {
    await fetch(`${backUrl}/api/lists`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todoTask, todoDone:false }),
    });
  } catch (error) {
    console.error('Error', error);
  }
}