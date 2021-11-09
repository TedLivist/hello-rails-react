import React from "react"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from "./Greeting";

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element="Home.....Home.....Hello!" />
          <Route path="/greeting" element={<Greeting greeting="Hello, GReetings..."/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
