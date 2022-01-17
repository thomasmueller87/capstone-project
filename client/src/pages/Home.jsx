import Header from '../components/Header';
import LogCard from '../components/LogCard';

export default function Home({ logs }) {
  return (
    <>
      <Header title='DiveLogs' />

      {logs.map((log, index) => (
        <LogCard key={index} log={log} />
      ))}
    </>
  );
}
