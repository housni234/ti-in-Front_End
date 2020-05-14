import React from "react";
import { Route, Switch } from 'react-router-dom';
import UserRequest from "./UserRequest";
import Search from "./Search";
import "./main.css";
import TieInBar from "./TieInBar";
import "./Search_bar.css"
import MyProfile from "./MyProfile";



function Main({ match }) {
  const { path, params, url } = match;
  const { id } = params;

  const profileLink = `${url}/profile`;

  return (
    <Switch>
      <Route path={`${path}/profile`}>
        <MyProfile userId={id} />
      </Route>
      <Route>
        <div className="mainContainer">
          <TieInBar profileLink={profileLink} />
          <UserRequest userId={id} />
          <Search />
        </div>
      </Route>
    </Switch>
  );
}
export default Main;
