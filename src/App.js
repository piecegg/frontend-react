import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';

function App() {
  return (
    <>

      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/account" element={<MyAccount />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
