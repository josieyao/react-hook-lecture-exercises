import React from 'react';
import Counter from './Counter';

class App extends React.Component {

  state = {
    count: null
  }

  componentDidMount(){
    fetch('http://localhost:3001/counts/1')
      .then( res => res.json())
      .then( (result) => {
        this.setState({ 
          count: result.count
        })
      })
  }

  render() {
    return (
      <div>
        { 
          this.state.count != null 
            ?
          <Counter count={this.state.count}/>
            :
          null
        } 
      </div>
    );
  }

}

export default App;
