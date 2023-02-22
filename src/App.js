import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import LinkedAccounts from './pages/linkedAccounts';
import Login from './pages/Login';
import Menu from './pages/Menu';

function App() {
  return (
    <>

      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/linkedAccounts" element={<LinkedAccounts />} />

        </Routes>
      </Router>
    </>

  );
}

export default App;
