import React from 'react';
import "./Search_bar.css"
import Main from "./Main";
import Profile from "./Profile";
import "./Navbar"
import { Route, Switch } from 'react-router-dom';
import Login from './login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/Profile" component ={Profile} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
