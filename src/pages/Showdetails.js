import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Showdetails.css";

function Showdetails() {
  const { showId } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(response => response.json())
      .then(data => {
        setShowDetails(data);
        setGenres(data.genres);
      })
      .catch(error => {
        console.error(error);
      });
  }, [showId]);


  if (!showDetails) {
    return <div className='load'>Loading...</div>;
  }

  return (
    <div className="show-details">
      <img src={showDetails.image?.medium} alt={showDetails.name} className="show-image" />
      <div className="show-info">
        <h1 className="show-title">{showDetails.name}</h1>
        <div className="show-summary" dangerouslySetInnerHTML={{ __html: showDetails.summary }}></div>
          <div className="genres">

            {genres.map((genre, index) => (
              <span key={index} className="badge bg-secondary me-1">
                {genre}
              </span>
            ))}
            </div>
          
        </div><br/><br/>
        <div className="wrapper">
          <Link to="BookingForm" className="btn1">
            Book Tickets
          </Link>
          <Link to="/" className="btn2">
            Go Back
          </Link>
          </div>
    </div>
  );
}

export default Showdetails;
