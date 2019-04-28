import React from 'react';
import Todo from './Todo';

const TodoList = ({todos = [], onTodoClick}) => (
  <ol>
    {
      todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
        )
      )
    }
  </ol>
);

export default TodoList;

