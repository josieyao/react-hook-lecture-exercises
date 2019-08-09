import React, { useState, useEffect } from 'react';


function App() {

  // state = {
  //   count: 0
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3001/counts/1')
  //     .then(res => res.json())
  //     .then((result) => {
  //       this.setState({
  //         count: result.count
  //       })
  //     })
  // }

  let [ value, incrementValue ] = useState({
    count: 0
  })

  useEffect( () => {
      fetch('http://localhost:3000/counts/1')
          .then( res => res.json())
          .then( count => incrementValue(count))
  }, [] )

    return (
      <div>
        <h1 onClick={() => {
          incrementValue({ 
            count: ++value.count
          })
        }} >
          {value.count}
        </h1>
      </div>
    );
}


export default App;
