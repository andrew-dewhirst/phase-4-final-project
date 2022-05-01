import React from "react";

function RenovationCard({ renovation, user, handleUpdateRenovation }) {

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

  const title = renovation.reviews.map((review) => review.title);
  const description = renovation.reviews.map((review) => review.description);
  const rating = renovation.reviews.map((review) => review.rating);
  
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
      <button onClick={handleLikesClick}>Favorite Renovation</button>
      <h4>Reviews:</h4>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Rating: {rating}</p>
    </ul>
  );
}

export default RenovationCard

