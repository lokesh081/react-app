import React from "react";
import "./ShowCardInfo.css"

function ShowCardInfo({ currentShow, setBookTicket , setMovieName}) {


  if (!currentShow || !currentShow.show.image) {
    return <div>...loading</div>;
  }else{

    function BookTicket(){
      console.log("Book ticket");
      setBookTicket(true);
      setMovieName(currentShow.show.name);
    }  
  
    function removeTags(str) {
      if ((str === null) || (str === ''))
        return false;
      else
        str = str.toString();
  
      return str.replace(/(<([^>]+)>)/ig, '');
    }
  
    // Check if currentShow is null or undefined
  
    return (
      <div className = "movie-info" style={{ width: "40%" }}>
        {/* Check if currentShow.show.image is not null or undefined before accessing its properties */}
        {currentShow.show.image && (
          <img className="img show-info" src={currentShow.show.image.original} alt='original' style={{ max_width: "100%" }} />
        )}
        {/* Check if currentShow.show.summary is not null or undefined before removing tags */}
        <p className="p-3">{currentShow.show.summary ? removeTags(currentShow.show.summary) : "No Summary"}</p>
  
        <button className="button-three" onClick={BookTicket}>Book Tickets</button>
      </div>
    );

  }

}

export default ShowCardInfo;