import { combineReducers } from 'redux';

import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO
} from './action.creator';

const {
  SHOW_ALL
} = VisibilityFilters;

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.content,
          completed: false
        }
      ];
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: return action.filter;
    default: return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
