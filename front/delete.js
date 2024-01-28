export const deleteTodoBackend = async (backUrl, todoId) => {
  const url = `${backUrl}/api/lists/${todoId}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });


    if(!response.ok) {
      throw new Error(`Failed delete - ${response.status}`)
    }

  } catch (error) {
    console.error('Error', error);
  }
};