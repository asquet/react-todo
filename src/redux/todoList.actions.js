export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export function createTodoAction(payload) {
  return {
    type: CREATE_TODO,
    payload
  };
}

export function updateTodoAction({ id, isDone }) {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      isDone
    }
  };
}
