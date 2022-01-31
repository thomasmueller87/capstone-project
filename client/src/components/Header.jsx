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
  background-color: var(--background-header);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: 80% 20%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const HeaderTitle = styled.div`
  align-items: center;
  color: var(--title-text);
  display: flex;
  font-family: 'Merriweather', serif;
  font-size: 1.5rem;
  height: 3rem;
  padding-left: 1.2rem;
`;

const HeaderLogo = styled.div`
  align-items: center;
  display: flex;
  height: 3rem;
  justify-content: flex-end;
  padding-right: 0.8rem;
`;
