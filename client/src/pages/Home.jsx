import Header from '../components/Header';
import LogCard from '../components/LogCard';
import Navbar from '../components/Navbar';

export default function Home({ logs, onDeleteFromDatabase }) {
  const length = logs.length - 1;
  console.log(length);
  return (
    <>
      <Header title='DiveLogs' />

      {logs.map((log, index) => (
        <LogCard
          key={index}
          index={length - index}
          log={log}
          onDeleteFromDatabase={onDeleteFromDatabase}
        />
      ))}
      <Navbar />
    </>
  );
}
