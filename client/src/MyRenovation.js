import React from "react";
import RenovationCard from "./RenovationCard";

function MyRenovation({ user }) {
  console.log(user.renovations)

  return (
    <ul className="cards">
      {user.renovations.map((renovation) =>
      <RenovationCard
        key={renovation.id}
        renovation={renovation}
        // handleAttendanceClick={handleAttendanceClick}
      />
      )}
    </ul>
  )
};

export default MyRenovation

