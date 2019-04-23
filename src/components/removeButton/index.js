import React from 'react';
import './index.scss';

export class RemoveButton extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <button className="remove-btn" onClick={this.props.onClick}>Remove</button>
    );
  }
  
}
