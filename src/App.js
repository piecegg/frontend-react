import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';

function App() {
  return (
    <>

      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<MyAccount />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
