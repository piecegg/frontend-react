import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import CreatePiece from './pages/CreatePiece';
import Login from './pages/Login';
import Menu from './pages/Menu';

function App() {
  return (
    <>

      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/createPiece" element={<CreatePiece />} />

        </Routes>
      </Router>
    </>

  );
}

export default App;
