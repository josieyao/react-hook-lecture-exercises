import React from 'react';

class App extends React.Component {

  state = {
    count: 0
  }

  componentDidMount() {
    fetch('http://localhost:3001/counts/1')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          count: result.count
        })
      })
  }

  render() {
    return (
      <div>
        <h1 onClick={() => {
          this.setState({ count: this.state.count + 1 })
        }}>
          {this.state.count}
        </h1>
      </div>
    );
  }

}

export default App;
