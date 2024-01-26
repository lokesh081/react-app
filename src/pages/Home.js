// Home.js
import React, { useState, useEffect } from 'react';
import './home.css';
import ShowCard from '../components/ShowCard';
import ShowCardInfo from '../components/ShowCardInfo';
import Header from '../components/Header';
import BookTicket from '../components/BookTicket';

const Home = ({user , setLoggedIn , shows , setShows}) => {

  const [currentShow,setCurrentShow] = useState(null);
  const [bookTicket,setBookTicket] = useState(false);
  const [movieName , setMovieName] = useState('');
  const [url , setUrl] = useState('');


  console.log(user);

  //to initiate setshow
  useEffect(() => {

    if(url === ''){
      setUrl('all');
    }

    const fetchData = async () => {
      try {
        const API = 'https://api.tvmaze.com/search/shows?q=' + url;
        const response = await fetch(API);    
        const result = await response.json();

        setShows(result);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setUrl,setShows,url]);

  //to initiate curretshow
  useEffect(() => {
    if(shows){
        setCurrentShow(shows[0]);
    }else{
        return;
    }
  },[shows]);
  
  if (!shows) {
    // If data is still being fetched, return a loading state or null
    return <div>Loading...</div>;
  }

    return (
        <>
            <Header setUrl = {setUrl} user = {user} setLoggedIn = {setLoggedIn} setShows = {setShows}/>
            <div className="container d-flex" >
                <ShowCard shows = {shows} setCurrentShow = {setCurrentShow} setBookTicket = {setBookTicket}/>
                {bookTicket ? <BookTicket movieName = {movieName} /> : 
                <ShowCardInfo 
                    shows = {shows} 
                    currentShow = {currentShow} 
                    setCurrentShow = {setCurrentShow} 
                    setBookTicket = {setBookTicket}
                    setMovieName = {setMovieName}
                    />
                    
                    }
            </div>
        </>
        
      );
  }
;

export default Home;