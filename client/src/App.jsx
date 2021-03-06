import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from './lib/localStorage';
import { useLoadScript } from '@react-google-maps/api';
import Home from './pages/Home';
import Create from './pages/Create';
import Settings from './pages/Settings';
import Edit from './pages/Edit';
import Splash from './pages/Splash';
import styled from 'styled-components';

function App() {
  const localStorageLogs = loadFromLocalStorage('_diveLogs');

  const [logs, setLogs] = useState(localStorageLogs ?? []);

  async function fetchLogs() {
    const result = await fetch('/api/logs');
    const resultJson = await result.json();
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

  async function deleteAllFromDatabase() {
    const url = '/api/drop';
    const result = await fetch(url);
    await result.json();
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

  async function importLogsFromFile(text) {
    const url = '/api/import';
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: text,
    });
    await result.json();
    await fetchLogs();
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';
  return (
    <div className='App'>
      <BackgroundWrap>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route
            path='logs'
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
            element={
              <Settings
                logs={logs}
                onImportLogs={importLogsFromFile}
              />
            }
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
          <Route path='splash' element={<Splash />} />
        </Routes>
      </BackgroundWrap>
    </div>
  );
}

export default App;

const BackgroundWrap = styled.div`
  background: linear-gradient(
    15deg,
    rgba(79, 172, 254, 1) 0%,
    rgba(0, 242, 254, 1) 100%
  );
  background-attachment: fixed;
  background-repeat: no-repeat;
  margin: 0;
  min-height: 100vh;
  padding-bottom: 3rem;
  padding-top: 3rem;
`;
