import { getGreeting } from "../../helper/getGreeting"
import store from "../configureStore"

export const DISPLAY_GREETING = 'helloRailsReact/greetings/DISPLAY_GREETING'

const initialState = []

export const displayGreeting = async () => {
  const data = await getGreeting()
  store.dispatch({
      type: DISPLAY_GREETING,
      payload: data
  })
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