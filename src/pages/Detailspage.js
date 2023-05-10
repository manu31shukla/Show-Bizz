import './Detailspage.css';
import { Link } from 'react-router-dom';

function Detailspage({ show }) {
  return (
    <div className="card">
      <img className="card-img-top" src={show.image?.medium} alt={show.name} />
      <div className="card-body">
        <h5 className="card-title">{show.name}</h5>
        <p className="card-text">{show.summary}</p>
        <Link to={`/show/${show.id}`} className="btn btn-primary">View details</Link>
      </div>
    </div>
  );
}

export default Detailspage;