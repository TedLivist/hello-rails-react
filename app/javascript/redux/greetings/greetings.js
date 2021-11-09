import store from "../configureStore"

export const DISPLAY_GREETING = 'helloRailsReact/greetings/DISPLAY_GREETING'

const initialState = []

export const displayGreeting = () => {
  fetch(`api/v1/greeting.json`)
    .then((response) => response.json())
    .then((json) => store.dispatch({
      type: DISPLAY_GREETING,
      payload: json
    }))
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_GREETING:
      return { greeting: action.payload }
    default:
      return state
  }
}

export default reducer;