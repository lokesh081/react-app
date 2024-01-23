import React from "react";
import "./BookTicket.css";


function BookTicket({movieName}){

    return(
        <div class="login-box">
            <h2>Book Ticket</h2>
            <form>
                <div class="user-box">
                <input type="text" value={movieName} readonly></input>
                <label>Movie</label>
                </div>
                <div class="user-box">
                    
                <input type="password" name="" required=""></input>
                <label>No of tickets</label>
                </div>
                <a href="zasdd">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                    Book Now
                </a>
            </form>
        </div>
    )

}

export default BookTicket;