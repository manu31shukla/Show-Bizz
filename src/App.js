import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; //added after npm i -D react-router-dom
//used for rendering components such that single page application doesn't seem single page depending on route
import './App.css'; 

//components import
import Navbar from './components/navbar/Navbar';

//pages import 
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Showdetails from './pages/Showdetails';
import BookingForm from './pages/BookingForm';


function App(){
  return (
    <Router>
    <div className='App'>
      {/* Navbar */}
      <Navbar />
      <div className="container">
        <Routes>
          {/* route for Home page */}
          <Route exact path='/' Component={Homepage}/>

          {/* route for About page */}
          <Route exact path='Aboutpage' Component={Aboutpage}/>
          
          {/* route for Show details page */}
          <Route path="/show/:showId" element={<Showdetails/>} /> 

          {/* route for Booking form */}
          <Route path="/book/:showId" element={<BookingForm/>} /> 
          
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
