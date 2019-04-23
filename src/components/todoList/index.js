/* eslint-disable no-console */
import React from 'react';
import './index.scss';
import { Todo } from '../todo';
import { AddButton } from '../addButton';

export class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.data
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo() {
    console.log('add todos');
    const newTodos = [...this.state.todos];
    newTodos.push({
      id: this.state.todos.length + 1,
      content: `React${this.state.todos.length + 1}`
    });
    this.setState({
      todos: [ ...newTodos ]
    });
  }

  removeTodo(index) {
    console.log(index);
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos: [...todos]
    });
  }

  render() {
    return (
      <div className="todo-list-container">
        <ul className="todo-list">
          {this.state.todos.map((item, index) => {
            return (<Todo key={item.id} onRemove={() =>this.removeTodo(index)} content={item.content} />);
          })}
        </ul>
        <AddButton click={this.addTodo} />
      </div>
    );
  }
}

TodoList.defaultProps = {
  data: [
    {
      id: 1,
      content: 'harry  porter'
    },
    {
      id: 2,
      content: 'Avenger'
    },
    {
      id: 3,
      content: '剑来'
    },
  ]
};

