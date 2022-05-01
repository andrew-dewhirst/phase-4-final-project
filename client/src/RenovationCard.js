import React from "react";

function RenovationCard({ renovation, handleUpdateRenovation }) {

//   function handleButtonClick() {
//     fetch(`http://localhost:3000/stadiums/${stadium.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         attended: !stadium.attended,
//       }),
//    })
//       .then((r) => r.json())
//       .then((updatedItem) => handleAttendanceClick(updatedItem));
// }

  function handleLikesClick() {
    fetch(`/renovations/${renovation.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: renovation.likes + 1 }),
    })
      .then((r) => r.json())
      .then((updatedRenovation) => {
        handleUpdateRenovation(updatedRenovation);
      });
  }

  return (
    <ul className="card">
      <h4>{renovation.title}</h4>
      <h4>{renovation.location}</h4>
      <h4>{renovation.room}</h4>
      <h4>{renovation.cost}</h4>
      <h4>{renovation.likes}</h4>
      <button onClick={handleLikesClick}>Favorite This Renovation</button>
      {/* <img src={renovation.before_image} alt="Not Available" /> */}
      {/* {stadium.attended ? (
        <button onClick={handleButtonClick}>Crossed off the List</button>
      ) : (
        <button onClick={handleButtonClick}>I've Been There!</button>
      )} */}
    </ul>
  );
}

export default RenovationCard