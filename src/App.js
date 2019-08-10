import React, { useState, useEffect } from 'react';


// function useCounter(url, initialValue){
//   let [ value, incrementValue ] = useState(value)
//   useEffect(()=> {
//     fetch(url)
//       .then( res => res.json())
//       .then( response => {
//           setState(response)
//       })
//   }, [])
// }

function App() {


  // useCounter('http://localhost:3000/counts/1', count => incrementValue(count))


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
