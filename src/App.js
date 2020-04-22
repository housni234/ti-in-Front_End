import React from 'react';
import "./Search_bar.css"
import Main from "./Main";
import Profile from "./Profile";
import "./Navbar"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/Profile" component ={Profile} />
      </Switch>
    </div>
  );
}

export default App;
