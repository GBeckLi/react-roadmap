import React from 'react';
import './index.scss';

export class AddButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="add-btn" onClick={this.props.click}>Add</button>
    );
  }
}

