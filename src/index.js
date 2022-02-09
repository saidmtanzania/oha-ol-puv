import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

// COMPONENTS
import Home from "./components/home";
import Contact from "./components/Contact";
import Profile from "./components/profiles";

import "./css/styles.css";

// myawesomeapp.com/posts
// myawesomeapp.com/profile/posts

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header className="Header">
          <h1>Saidmtanzania</h1>
          <NavLink to="/">Home</NavLink> |
          <NavLink to="/Profile">Profile</NavLink> |
          <NavLink to="/Contact">Contact</NavLink> |
          <hr />
        </header>
        <Switch>
          <Route path="/Profile" component={Profile} />
          <Route path="/Contact" component={Contact} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
