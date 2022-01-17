import { Route, Routes, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Settings from './pages/Settings';
import styled from 'styled-components';
import { logData } from './components/LogData';

function App() {
  const [logs, setLogs] = useState(logData);

  function addLog(log) {
    const addId = Object.keys(logs).length + 1;
    setLogs([
      ...logs,
      {
        ...log,
        id: addId,
      },
    ]);
  }

  return (
    <div className='App'>
      <BackgroundWrap>
        <Routes>
          <Route path='/' element={<Home logs={logs} />} />
          <Route
            path='create'
            element={<Create onAddLog={AddLog} />}
          />
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
  background: linear-gradient(
    15deg,
    rgba(79, 172, 254, 1) 0%,
    rgba(0, 242, 254, 1) 100%
  );
  background-repeat: no-repeat;
  background-attachment: fixed; ;
`;
