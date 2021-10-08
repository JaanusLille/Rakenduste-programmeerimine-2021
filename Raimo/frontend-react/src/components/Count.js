import React, { useState } from "react"
import Prost from './Prost';


const Count = (props) => {
  const [counter, setCounter] = useState(0)
  const thing = props.thing;
    if ((thing === "drink")&&(counter === 28)) {
      return <Prost />;
    }

  return(
    <>
      <h1 onClick={() => setCounter(counter+1)}>Hello, this is our {props.name}-counter: {counter}</h1>
      <h1>Time for a {props.thing}! </h1>
    </>
  )
}

export default Count