import { useState, useEffect } from 'react';
import './moviecard.css';

function Homepage() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="Homepage">
      {shows.map(show => (
        <ShowCard key={show.show.id} show={show.show} />
      ))}
    </div>
  );
}

function ShowCard({ show }) {
  const { name, image, summary } = show;

  return (
    <div className="show-card">
      <img src={image?.medium} alt={name} />
      <h3>{name}</h3>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <button className='button-56'>View Summary</button>
    </div>
  );
}

export default Homepage;
