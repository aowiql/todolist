export const addTodoBackend = async (backUrl, todoTask) => {
  try {
    const response = await fetch(`${backUrl}/api/lists`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todoTask, todoDone:false }),
    });

    if (!response.ok) {
      throw new Error('Failed to add todo item');
  }

  return await response.json();
  
  } catch (error) {
    console.error('Error', error);
  }
}