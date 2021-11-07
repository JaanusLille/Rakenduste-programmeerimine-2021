import React from "react"
import PropTypes from "prop-types"


const Greeting = ({ name, age }) => {
  return (
    <>
      <h1>Hello, I am { name }</h1>
      <p> { age } years old</p>
    </>
  )
}

Greeting.defaultProps = {
  name: "defaultProps",
  age: "-5"
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired, 
  age: PropTypes.number.isRequired
}

export default Greeting