import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import './CardFooter.css';

function CardFooter({
  logData,
  onHandleExpand,
  expandCard,
  onDeleteFromDatabase,
}) {
  const editLink = 'edit/' + logData._id;

  return (
    <FooterStyle>
      {expandCard ? <div></div> : ''}
      <Popup trigger={<button> d </button>} modal nested>
        {(close) => (
          <div className='modal'>
            <button className='close' onClick={close}>
              &times;
            </button>
            <div className='header'> Really Delete ? </div>
            <div className='content'>
              {' '}
              Do you really want to delete that log entry?
            </div>
            <div className='actions'>
              <button
                className='button'
                onClick={() => {
                  onDeleteFromDatabase(logData._id, logData);
                  close();
                }}
              >
                Delete
              </button>
              <button
                className='button btn-cancel'
                onClick={() => {
                  close();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </Popup>
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
