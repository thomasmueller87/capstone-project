import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from './lib/localStorage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Settings from './pages/Settings';
import Edit from './pages/Edit';
import styled from 'styled-components';

function App() {
  const localStorageLogs = loadFromLocalStorage('_diveLogs');

  const [logs, setLogs] = useState(localStorageLogs ?? []);

  async function fetchLogs() {
    const result = await fetch('/api/logs');
    const resultJson = await result.json();

    resultJson.sort((a, b) => b.id - a.id);
    setLogs(resultJson);
  }

  useEffect(() => fetchLogs(), []);

  useEffect(() => {
    saveToLocalStorage('_diveLogs', logs);
  }, [logs]);

  async function addLogToDatabase(log) {
    const result = await fetch('/api/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(log),
    });
    return await result.json();
  }

  async function updateLogToDatabase(id, log) {
    const url = '/api/logs/' + id;
    const result = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(log),
    });
    await result.json();
    fetchLogs();
  }

  async function deleteFromDatabase(id, log) {
    const url = '/api/logs/' + id;
    const result = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(log),
    });
    await result.json();
    fetchLogs();
  }

  async function addLog(log) {
    const addId = logs.length + 1;
    const newLog = {
      ...log,
      id: addId,
    };
    await addLogToDatabase(newLog);
    fetchLogs();
  }

  return (
    <div className='App'>
      <BackgroundWrap>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                logs={logs}
                onDeleteFromDatabase={deleteFromDatabase}
              />
            }
          />
          <Route
            path='create'
            element={<Create onAddLog={addLog} />}
          />
          <Route
            path='settings'
            element={<Settings logs={logs} />}
          />
          <Route
            path='edit/:logId'
            element={
              <Edit
                onUpdateLogToDatabase={updateLogToDatabase}
                logs={logs}
              />
            }
          />
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
