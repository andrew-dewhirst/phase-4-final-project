import React from "react";

function MyRenovationCard({ renovation, handleRenovationDelete }) {

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

    // function handleDeleteClick(renovationId) {
    //   fetch(`/renovations/${renovationId}`, {
    //     method: "DELETE",
    //   })
    //     .then((r) => r.json())
    //     .then(() => handleRenovationDelete(renovationId));
    // }

    function handleDeleteClick() {
      fetch(`/renovations/${renovation.id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          handleRenovationDelete(renovation.id);
        }
      });
    }

  return (
    <ul className="card">
      <h4>{renovation.title}</h4>
      <h4>{renovation.location}</h4>
      <h4>{renovation.room}</h4>
      <h4>{renovation.cost}</h4>
      <button onClick= {handleDeleteClick} >Remove Renovation</button>
      {/* <img src={renovation.before_image} alt="Not Available" /> */}
      {/* {stadium.attended ? (
        <button onClick={handleButtonClick}>Crossed off the List</button>
      ) : (
        <button onClick={handleButtonClick}>I've Been There!</button>
      )} */}
    </ul>
  );
}

export default MyRenovationCard