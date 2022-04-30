import React from "react";
import MyRenovationCard from "./MyRenovationCard";

function MyRenovation({ user, renovations, handleRenovationDelete }) {
  console.log(user.renovations)

  const userRenovations = renovations.filter((renovation) => renovation.user_id === user.id) 

  return (
    <ul className="cards">
      {userRenovations.map((renovation) =>
      <MyRenovationCard
        key={renovation.id}
        renovation={renovation}
        handleRenovationDelete={handleRenovationDelete}
      />
      )}
    </ul>
  )
};

export default MyRenovation

