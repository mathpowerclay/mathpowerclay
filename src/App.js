import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PowerClay from "./components/pages/PowerClay";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/powerclay" component={PowerClay} />
          {/* <Route path="/products" component={Products} /> */}
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
