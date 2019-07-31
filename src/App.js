import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import com1 from "./components/com1";
import com2 from "./components/com2";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={com1} />
      <Route exact path="/about" component={com2} />
    </BrowserRouter>
  )
}

export default App;
