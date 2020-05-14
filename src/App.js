import React from 'react';
import "./Search_bar.css"
import Main from "./Main";
import "./Navbar"
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Register from './Register';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact/>
        <Route path="/Main/:id/:name" component={Main} />
        <Route path="/Register" component ={Register} />
      </Switch>
    </div>
  );
}

export default App;
