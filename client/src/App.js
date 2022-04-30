import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import RenovationList from "./RenovationList";
import NewRenovation from "./NewRenovation";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route path="/new">
          <NewRenovation user={user} />
        </Route>
        <Route path="/">
          <RenovationList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
