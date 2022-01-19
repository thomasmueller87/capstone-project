import styled from 'styled-components';

function CardFooter({ onHandleExpand, expandCard }) {
  return (
    <FooterStyle>
      {expandCard ? <div></div> : ''}
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
    margin-top: 5px;
    width: 30px;
    height: 30px;
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    color: var(--primary-color);
    font-size: 1.4rem;
    background-color: transparent;
  }
`;
