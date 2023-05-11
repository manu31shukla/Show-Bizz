import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Showdetails() {
  const { showId } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(response => response.json())
      .then(data => {
        setShowDetails(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [showId]);

  const handleBooking = () => {
    localStorage.setItem('showName', showDetails.name);
    localStorage.setItem('showImage', showDetails.image.medium);
    localStorage.setItem('showSummary', showDetails.summary);
  };

  if (!showDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <img src={showDetails.image?.medium} className="img-fluid" alt={showDetails.name} />
        </div>
        <div className="col-md-8 mb-4">
          <h2>{showDetails.name}</h2>
          <p>{showDetails.summary}</p>
          <button onClick={handleBooking} className="btn btn-primary">
            Book Tickets
          </button>
          <Link to="/" className="btn btn-secondary ml-2">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Showdetails;
