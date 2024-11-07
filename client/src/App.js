import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Bottom_Navigation from './Components/Bottom Navigation';
import Home from './Pages/Home';
import Event from './Pages/Event'; // Assuming your Event page is located in Pages/Event.js

function App() {
  return (
    <Router>
      <div className=''>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} /> {/* Add the route for Event */}
        </Routes>
        {/* <Bottom_Navigation /> */}
      </div>
    </Router>
  );
}

export default App;
