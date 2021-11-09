import React, { useEffect } from "react"
import PropTypes from "prop-types"
import store from "../redux/configureStore"
import { displayGreeting } from "../redux/greetings/greetings"
import { useSelector } from "react-redux"

const Greeting = () => {
  useEffect(() => {
    displayGreeting()
  }, [])

  const greeting = useSelector((state) => state.greetingsReducer.greeting)

  return (
    <div>
      <h1>Greeting: {greeting && greeting.message}</h1>
    </div>
  )
}

Greeting.propTypes = {
  greeting: PropTypes.string
};

export default Greeting
