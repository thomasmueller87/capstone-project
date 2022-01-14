import Header from '../components/Header';
import AddCard from '../components/AddCard';

export default function Create({ onAddLog }) {
  return (
    <>
      <Header title='Add new Log' />
      <AddCard onAddLog={onAddLog} />
    </>
  );
}
