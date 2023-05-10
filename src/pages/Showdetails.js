import { useParams } from 'react-router-dom';
import './moviecard.css';

function Showdetails() {
  const { id } = useParams();

  return (
    <div className="show-details">
      <h2>Show Details</h2>
      <p>Show ID: {id}</p>
    </div>
  );
}

export default Showdetails;
