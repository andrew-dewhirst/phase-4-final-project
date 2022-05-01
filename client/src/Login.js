import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Login({ onLogin }) {

  return (
    <div>
      <h2>Welcome to Renov8!</h2>
      <h4>Share and view renovations from around the world!</h4>
      <SignupForm onLogin={onLogin} />
      <LoginForm onLogin={onLogin} />
    </div>
  )
}

export default Login