import Header from '../components/Header';
import EditForm from '../components/form/EditForm';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Edit({ logs, onUpdateLogToDatabase }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { logId } = useParams();
  const editLog = logs.find((log) => log._id === logId);

  return (
    <>
      <Header title='Edit Log' />

      <EditForm
        editLog={editLog}
        onUpdateLogToDatabase={onUpdateLogToDatabase}
      />
      <Navbar />
    </>
  );
}
