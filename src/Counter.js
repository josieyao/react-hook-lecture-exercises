import React from 'react';

class Counter extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count: props.count
        }
    }

  render() {
    return (
      <h1 onClick={() => {
        this.setState({ count: this.state.count + 1 })
      }}>
        {this.state.count}
      </h1>
    );
  }

}

export default Counter;
