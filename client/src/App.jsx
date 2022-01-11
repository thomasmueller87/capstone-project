import { Route, Routes, NavLink } from 'react-router-dom';
//import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Settings from './pages/Settings';
import logo from './assets/title.png';

function App() {
  return (
    <div className='App'>
      <img src={logo}></img>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='create' element={<Create />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
