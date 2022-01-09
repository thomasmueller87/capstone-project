import { Route, Routes, NavLink } from 'react-router-dom';
//import styled from 'styled-components';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import Settings from './pages/Settings';
import logo from './graphics/title.png';

function App() {
  return (
    <div className='App'>
      <img src={logo}></img>
      <br></br>
      <p>MUH!</p>
      <NavLink to='/'>Home </NavLink>
      <NavLink to='create'>New Dive </NavLink>
      <NavLink to='settings'>Favourites </NavLink>

      <Routes>
        <Route path='/' element={<h2>Blubb is coming up!</h2>} />
        <Route path='create' element={<Create />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
