import React from 'react';
import './index.scss'
import { RemoveButton } from '../removeButton';

export class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <li className="todo-item">
        <span>{this.props.content}</span>
        <RemoveButton onClick={this.props.onRemove} />
      </li>
    );
  }

}
