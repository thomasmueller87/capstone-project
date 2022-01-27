import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import splashLogo from '../assets/splash-logo.png';
import splashDiver from '../assets/splash-diver.png';
import splashStamp from '../assets/splash-stamp.png';

export default function Splash() {
  let redirect = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      redirect('/logs');
    }, 3500);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, []);
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

            <img
              className='stamp'
              src={splashStamp}
              alt='Blubb - the App for DiveLogs!'
            />
          </div>
        </LogoContainer>

        <Diver>
          <img src={splashDiver} alt='Diver' />
        </Diver>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  margin-top: 50px;
  overflow: hidden;
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
    position: relative;

    .stamp {
      position: absolute;
      right: -45px;
      bottom: -110px;
      overflow: hidden;
      opacity: 0;
      animation: myAnim 400ms ease-in-out 1000ms 1 normal
        forwards;
      @keyframes myAnim {
        0% {
          transform: scale(4);
          opacity: 1;
        }

        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    }
  }
`;

const Diver = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 60vh;
`;
