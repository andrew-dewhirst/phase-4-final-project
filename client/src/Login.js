import React, { useEffect, useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Login({ onLogin }) {

  return (
    <div>
      <SignupForm onLogin={onLogin} />
      <LoginForm onLogin={onLogin} />
    </div>
  )
}

export default Login