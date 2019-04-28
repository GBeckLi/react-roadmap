import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIABLE_FILTER
} from './action.type';

let nextTodoId = 0;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId ++,
    text
  }
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIABLE_FILTER,
    filter
  }
}
