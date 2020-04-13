import React from "react";
import UserRequest from "./UserRequest";
import Search from "./Search";
import "./main.css";
import TieInBar from "./TieInBar";


function Main() {
        return (
          <>
          <div className="mainContainer">
            <TieInBar/>
            <UserRequest />
            <Search />
           </div>
            
          </>
        );
      }
export default Main;