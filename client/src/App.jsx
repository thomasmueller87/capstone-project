import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [myHeadline, setMyHeadline] = useState('');

  // Initial beim ersten Laden der App / Komponente
  useEffect(() => {
    const fetchMyHeadline = async () => {
      const res = await fetch('/api');
      const data = await res.json();
      setMyHeadline(data.message);
    };

    fetchMyHeadline();
  }, []);

  return (
    <div className="App">
      <h1>{myHeadline}</h1>
    </div>
  );
}

export default App;
