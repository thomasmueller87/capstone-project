import Header from '../components/Header';
import EditCard from '../components/EditCard';

export default function Edit({ onAddLog }) {
  return (
    <>
      <Header title='Edit Log' />
      <EditCard onAddLog={onAddLog} />
    </>
  );
}
