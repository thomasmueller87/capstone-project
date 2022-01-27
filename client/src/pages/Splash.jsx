import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Splash() {
  let redirect = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      redirect('/');
    }, 3000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, []);
  return (
    <>
      <h1>SPLASHPAGE</h1>
      <p>Blubb - the App for DiveLogs!</p>
    </>
  );
}
