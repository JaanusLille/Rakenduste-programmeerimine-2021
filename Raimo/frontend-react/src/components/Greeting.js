import React from "react"

const Greeting = ({ name, age }) => {
  return (
    <>
      <h1>Hello, I am { name }</h1>
      <p> { age } years old</p>
    </>
  )
}

export default Greeting