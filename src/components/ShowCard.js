import React from "react";
import './ShowCard.css';

function ShowCard({ shows, setCurrentShow , setBookTicket }) {

  function handleClick(e) {
    const data = shows.filter((item) => (item.show.id === parseInt(e.target.id)));
    setBookTicket(false);
    setCurrentShow(data[0]);
  }
  console.log(shows)
  return (
    <div className="cards-list">
      {shows.map((item) => (
        item.show.image !== null && item.show.id ? (
          <div className="card-c child" key={item.show.id} onClick={handleClick}>
            <div>
              <img
                id = {item.show.id}
                src={item.show.image.medium !== null ? item.show.image.medium : 'default-image-source'}
                alt={item.show.name}
              />
            </div>
            <div className="card_title title-white">
              <p style={{color : "yellow"}}>Ratings: {item.show.rating.average ? item.show.rating.average : '--'}</p>
            </div>
          </div>
        ) : null
      ))}
    </div>
  );
}

export default ShowCard;
