import {
  addTodoMutation,
  editTodoMutation,
  getTodosQuery,
} from './server-interaction.js';

export const CREATE = 'todos/CREATE';
export function create(title, description) {
  return {
    type: CREATE,
    payload: addTodoMutation(title, description),
  };
}

export const GET = 'todos/GET_TODOS';
export function get() {
  return {
    type: GET,
    payload: getTodosQuery(),
  };
}

export const EDIT = 'todos/EDIT_TODO';
export function edit(id, changes) {
  return {
    type: EDIT,
    payload: editTodoMutation(id, changes),
  };
}

export const TOGGLE_DONE = 'todos/TOGGLE_TODO';
export function toggleTodos(id) {}
