import React from "react";

function MyRenovationCard({ renovation, handleRenovationDelete }) {

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
      <h4>Title: {renovation.title}</h4>
      <h4>Location: {renovation.location}</h4>
      <h4>Room: {renovation.room}</h4>
      <h4>Cost: ${renovation.cost}</h4>
      <img src={renovation.before_image} alt="Not Available" />
      <img src={renovation.during_image} alt="Not Available" />
      <img src={renovation.after_image} alt="Not Available" />
      <h4>Likes: {renovation.likes}</h4>
      <button onClick={handleDeleteClick}>Remove Renovation</button>
      <h4>Reviews: {renovation.reviews}</h4>
    </ul>
  );
}

export default MyRenovationCard