import Header from '../components/Header';
import AddCard from '../components/AddCard';
import Navbar from '../components/Navbar';

export default function Create({ onAddLog }) {
  return (
    <>
      <Header title='Add new Log' />
      <AddCard onAddLog={onAddLog} />
      <Navbar />
    </>
  );
}
