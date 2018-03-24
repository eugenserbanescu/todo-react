import { CREATE, GET, EDIT, TOGGLE_DONE } from './actions.js';

export default function todoReducer(state={byId: {}, list: []}, action) {
  switch (action.type) {
    case GET: {
      if(action.squence === 'start') return state;
      if(action.sequence === 'error') {
        return {
          ...state,
          error: action.error,
        }
      }
      if(action.sequence === 'next') {
        const newTodos = {
          byId: {},
          list: []
        }
        action.payload.data.todos.forEach(item => {
          newTodos.byId[item.id] = item;
          newTodos.list.push(item.id);
        });
        return {
          ...state,
          ...newTodos
        };
      }
      return state;
    }
    case CREATE: {
      if(action.sequence === 'next') {
        const newTodo = action.payload.data.createTodo;
        return {
          ...state,
          byId: {
            ...state.byId,
            [newTodo.id]: newTodo
          },
          list: [...state.list, newTodo.id]
        };
      }
      return state;
    }
    case EDIT: {
      if(action.sequence === 'next') {
        const edited = action.payload.data.editTodo;
        return {
          ...state,
          byId: {
            ...state.byId,
            [edited.id]: edited
          }
        };
      }
      return state;
    }
    case TOGGLE_DONE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
