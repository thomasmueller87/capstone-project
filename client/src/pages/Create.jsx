import Header from '../components/Header';
import Form from '../components/form/Form';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';

export default function Create({ onAddLog }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header title='Add new Log' />
      <Form onAddLog={onAddLog} />
      <Navbar />
    </>
  );
}
