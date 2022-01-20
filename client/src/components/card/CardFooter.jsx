import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function CardFooter({ logData, onHandleExpand, expandCard }) {
  const editLink = 'edit/' + logData._id;

  return (
    <FooterStyle>
      {expandCard ? <div></div> : ''}

      <NavLink to={editLink}>
        <button>e</button>
      </NavLink>
      <button onClick={onHandleExpand}>
        {expandCard ? '-' : '+'}
      </button>
    </FooterStyle>
  );
}

export default CardFooter;

const FooterStyle = styled.div`
  text-align: right;
  margin: 0;
  padding: 0;

  div {
    border-top: 2px solid var(--primary-color);
  }

  button {
    margin: 5px 0 0 5px;
    width: 30px;
    height: 30px;
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    color: var(--primary-color);
    font-size: 1.4rem;
    background-color: transparent;
  }
`;
