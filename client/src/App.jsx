import { Route, Routes, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Settings from './pages/Settings';
import styled from 'styled-components';

function App() {
  return (
    <div className='App'>
      <BackgroundWrap>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
        <Navbar />
      </BackgroundWrap>
    </div>
  );
}

export default App;

const BackgroundWrap = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  min-height: 100vh;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(
    15deg,
    rgba(79, 172, 254, 1) 0%,
    rgba(0, 242, 254, 1) 100%
  );
`;
