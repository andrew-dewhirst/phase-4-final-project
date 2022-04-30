import React from "react";

function MyRenovation({ user }) {
  return (
    <div>
      Welcome to your renovations {user.first_name} {user.last_name}!
    </div>
  );
};

export default MyRenovation