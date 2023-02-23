import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Buy from './pages/Buy';
import CreatePiece from './pages/CreatePiece';
import Listing from './pages/Listing';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Purchase from './pages/Purchase';

function App() {
  return (
    <>

      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/createPiece" element={<CreatePiece />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/purchase" element={<Purchase/>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
