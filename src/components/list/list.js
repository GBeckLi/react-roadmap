import React from 'react';

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = this.props.data;
    const listItem = numbers.map(number => (<li key={number.toString()}>{number}</li>));
    return (
      <ul>
        {listItem}
      </ul>
    );
  }
}

List.defaultProps = {
  data: [1,2,3,4,5]
};
