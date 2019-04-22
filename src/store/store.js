/* eslint-disable no-console */
import { createStore } from 'redux';
import todoApp from './reducers';
import {
  addTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './action.creator';

const store = createStore(todoApp);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo('Watch some movie!'));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();

