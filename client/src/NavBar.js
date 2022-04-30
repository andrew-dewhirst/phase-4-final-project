import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar({ user, setUser }) {

  const navStyle = {
    display: "inline-block",
    width: "25%",
    padding: "12px",
    margin: "0 4% 6px",
    background: "black",
    color: "white",
    textAlign: "center",
  };

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      <NavLink to ="/"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        Home
      </NavLink>
      <NavLink to ="/renovations"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        View All Renovations
      </NavLink>
      <NavLink to ="/my_renovations"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        View My Renovations
      </NavLink>
      <NavLink to="/test">
     <button type="button" onClick={handleLogoutClick}>
          Logout
     </button>
    </NavLink>
    </div>
  )
}

export default NavBar
