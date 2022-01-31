import Header from '../components/Header';
import AddCard from '../components/AddCard';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';

export default function Create({ onAddLog }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header title='Add new Log' />
      <AddCard onAddLog={onAddLog} />
      <Navbar />
    </>
  );
}
