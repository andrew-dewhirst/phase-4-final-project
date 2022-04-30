import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import RenovationList from "./RenovationList";
import NewRenovation from "./NewRenovation";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <button type="button" onClick={handleLogoutClick}>
          Logout
     </button>
      <Switch>
        <Route exact path="/">
          <RenovationList />
        </Route>
        <Route exact path="/new_renovation">
          <NewRenovation user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
