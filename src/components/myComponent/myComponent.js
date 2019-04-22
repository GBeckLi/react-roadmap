/* eslint-disable no-console */
import React from 'react';

export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: this.props.name
    };
    this.onInput = this.onInput.bind(this);
    console.log('constructor', this.props, this.state);
    console.log(this.props, this.state);
  }

  componentWillMount() {
    console.log('component will mount!');
    console.log(this.props, this.state);
  }

  componentDidMount() {
    console.log('component did mount');
    console.log(this.props, this.state);
  }

  componentWillReceiveProps() {
    console.log('component will receive props');
    console.log(this.props, this.state);
  }

  shouldComponentUpdate() {
    console.log('should component update');
    console.log(this.props, this.state);
    return true;
  }

  onInput(e) {
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    });
  }
  
  render() {
    console.log('render');
    console.log(this.props, this.state);
    const name = this.props.name;
    return (
      <div>
        {name && (<span> Hello, {name}</span>)}
        <input type="text" name="name" onInput={this.props.input}  />
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: 'default Name'
};
