import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {

  const navStyle = {
    display: "inline-block",
    width: "25%",
    padding: "12px",
    margin: "0 4% 6px",
    background: "black",
    color: "white",
    textAlign: "center",
  };

  return (
    <div>
      <NavLink to ="/"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        Home
      </NavLink>
      <NavLink to ="/stadiums/nfl"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        NFL
      </NavLink>
      <NavLink to ="/stadiums/mlb"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        MLB
      </NavLink>
      <NavLink to ="/stadiums/nba"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        NBA
      </NavLink>
      <NavLink to ="/stadiums/nhl"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        NHL
      </NavLink>
      <NavLink to ="/mylist"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        My List
      </NavLink>
    </div>
  )
}

export default NavBar