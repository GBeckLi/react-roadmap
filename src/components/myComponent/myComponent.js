import React from 'react';

export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  render() {
    return (
      <div>
        Hello, {this.props.name}
      </div>
    );
  }
}
