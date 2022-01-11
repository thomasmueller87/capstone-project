import styled from 'styled-components';
import logosmall from '../assets/logo-small.png';

function Header({ title }) {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderLogo>
        <img src={logosmall} alt='Blubb' />
      </HeaderLogo>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 80% 20%;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--background-title);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
`;

const HeaderTitle = styled.div`
  display: flex;
  font-family: 'Merriweather', serif;
  font-size: 1.5rem;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1.2rem;
  height: 3rem;
  width: 100%;
  color: var(--title);
`;

const HeaderLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 0.8rem;
  align-items: center;
  height: 3rem;
  width: 100%;
`;
