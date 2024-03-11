import React,{useState} from 'react'


function Counter() {
    let [data,setdata]=useState(0)
    function increment() {
        setdata(data+1) 
     }
    function deccrement() {
        setdata(data-1) 
     }
  return (
    <div>
      <h3>{data}</h3>
      <button onClick={increment}>Add</button>
      <button onClick={deccrement}>Minus</button>
    </div>
  )
}

export default Counter
