import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import splashLogo from '../assets/splash-logo.png';
import splashDiver from '../assets/splash-diver.png';

export default function Splash() {
  let redirect = useNavigate();

  // useEffect(() => {
  //   const redirectTimer = setTimeout(() => {
  //     redirect('/logs');
  //   }, 3000);

  //   return () => {
  //     clearTimeout(redirectTimer);
  //   };
  // }, []);
  return (
    <>
      <Wrap>
        <LogoContainer>
          <div className='logo'>
            <div>
              <img
                src={splashLogo}
                alt='Blubb - the App for DiveLogs!'
              />
            </div>
          </div>
        </LogoContainer>
        <p>Your App for DiveLogs!</p>
        <Diver>
          <img src={splashDiver} alt='Diver' />
        </Diver>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  margin-top: 50px;
  p {
    font-family: 'Sniglet', cursive;
    font-size: 1.2rem;
    text-align: center;
    color: white;
    margin: 20px 0 0 0;
    padding: 5px;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  margin: 0 auto;
  padding: 10px 0;
  .logo {
    margin: 0 auto;
    max-width: 340px;
  }

  p {
    font-family: 'Sniglet', cursive;
    font-size: 1.2rem;
    text-align: right;
    margin: 0 45px 0 0;
  }
`;

const Diver = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 60vh;
`;
