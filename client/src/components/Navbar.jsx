import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import homeImg from '../assets/home.png';
import createImg from '../assets/create.png';
import settingsImg from '../assets/settings.png';

function Navbar() {
  return (
    <NavContainer>
      <LeftNavItem>
        <NavLink to='/'>
          <div>
            <img
              src={homeImg}
              alt='Home'
              activeClassName='selected'
            />
          </div>
          <div>Home</div>
        </NavLink>
      </LeftNavItem>
      <NavItem>
        <NavLink to='create'>
          <div>
            <img src={createImg} alt='Create' />
          </div>
          <div>Add new Dive</div>
        </NavLink>
      </NavItem>
      <RightNavItem>
        <NavLink to='settings'>
          <div>
            <img src={settingsImg} alt='Settings' />
          </div>
          <div>Settings</div>
        </NavLink>
      </RightNavItem>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavItem = styled.div`
  background-color: var(--background-nav);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100%;
  border: 1px solid var(--primary-nav);
  color: var(--primary-nav);

  a {
    color: var(--primary-nav);
    text-decoration: none;
    font-size: 0.7rem;
  }
`;

const LeftNavItem = styled(NavItem)`
  border-radius: 10px 0 0 0;
`;

const RightNavItem = styled(NavItem)`
  border-radius: 0 10px 0 0;
`;
