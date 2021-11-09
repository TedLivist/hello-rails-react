import React from "react"
import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from "./Greeting";
import store from "../redux/configureStore";

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element="Home.....Home.....Hello!" />
            <Route path="/greeting" element={<Greeting greeting="Hello, GReetings..."/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
