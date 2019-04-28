/* eslint-disable no-console */
import { connect } from 'react-redux';
import { toggleTodo } from '../store/actions';
import TodoList from './../components/TodoList';

function getVisiableTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisiableTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  }
}

const VisiableTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisiableTodoList;

