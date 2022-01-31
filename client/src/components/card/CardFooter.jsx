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
  const editLink = '/edit/' + logData._id;

  return (
    <FooterStyle>
      {expandCard ? <div></div> : ''}
      <Popup
        trigger={
          <button>
            {' '}
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='#000'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 1.75C12.8301 1.74995 13.6288 2.06755 14.2322 2.63767C14.8356 3.20779 15.198 3.98719 15.245 4.816L15.25 5H20.5C20.69 5.00006 20.8729 5.07224 21.0118 5.20197C21.1506 5.3317 21.2351 5.5093 21.248 5.69888C21.261 5.88846 21.2015 6.07589 21.0816 6.2233C20.9617 6.37071 20.7902 6.4671 20.602 6.493L20.5 6.5H19.704L18.424 19.52C18.3599 20.1691 18.0671 20.7743 17.598 21.2275C17.1289 21.6806 16.5139 21.9523 15.863 21.994L15.687 22H8.313C7.66046 22 7.02919 21.7679 6.53201 21.3453C6.03482 20.9227 5.70412 20.337 5.599 19.693L5.576 19.519L4.295 6.5H3.5C3.31876 6.49999 3.14366 6.43436 3.00707 6.31523C2.87048 6.19611 2.78165 6.03155 2.757 5.852L2.75 5.75C2.75001 5.56876 2.81564 5.39366 2.93477 5.25707C3.05389 5.12048 3.21845 5.03165 3.398 5.007L3.5 5H8.75C8.75 4.13805 9.09241 3.3114 9.7019 2.7019C10.3114 2.09241 11.138 1.75 12 1.75V1.75ZM18.197 6.5H5.802L7.069 19.372C7.09706 19.6592 7.22362 19.9279 7.42722 20.1324C7.63082 20.3369 7.89892 20.4647 8.186 20.494L8.313 20.5H15.687C16.287 20.5 16.796 20.075 16.912 19.498L16.932 19.372L18.196 6.5H18.197ZM13.75 9.25C13.9312 9.25001 14.1063 9.31564 14.2429 9.43477C14.3795 9.55389 14.4684 9.71845 14.493 9.898L14.5 10V17C14.4999 17.19 14.4278 17.3729 14.298 17.5118C14.1683 17.6506 13.9907 17.7351 13.8011 17.748C13.6115 17.761 13.4241 17.7015 13.2767 17.5816C13.1293 17.4617 13.0329 17.2902 13.007 17.102L13 17V10C13 9.80109 13.079 9.61032 13.2197 9.46967C13.3603 9.32902 13.5511 9.25 13.75 9.25ZM10.25 9.25C10.4312 9.25001 10.6063 9.31564 10.7429 9.43477C10.8795 9.55389 10.9684 9.71845 10.993 9.898L11 10V17C10.9999 17.19 10.9278 17.3729 10.798 17.5118C10.6683 17.6506 10.4907 17.7351 10.3011 17.748C10.1115 17.761 9.92411 17.7015 9.7767 17.5816C9.62929 17.4617 9.5329 17.2902 9.507 17.102L9.5 17V10C9.5 9.80109 9.57902 9.61032 9.71967 9.46967C9.86032 9.32902 10.0511 9.25 10.25 9.25ZM12 3.25C11.5608 3.25002 11.1377 3.41517 10.8146 3.71268C10.4915 4.01019 10.2921 4.4183 10.256 4.856L10.25 5H13.75C13.75 4.53587 13.5656 4.09075 13.2374 3.76256C12.9092 3.43437 12.4641 3.25 12 3.25Z' />
            </svg>{' '}
          </button>
        }
        modal
        nested
      >
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

      <Popup
        trigger={
          <button>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='#000'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M18.6667 20H4.00002V5.33333H12.8134L14.1467 4H4.00002C3.6464 4 3.30726 4.14048 3.05721 4.39052C2.80716 4.64057 2.66669 4.97971 2.66669 5.33333V20C2.66669 20.3536 2.80716 20.6928 3.05721 20.9428C3.30726 21.1929 3.6464 21.3333 4.00002 21.3333H18.6667C19.0203 21.3333 19.3594 21.1929 19.6095 20.9428C19.8595 20.6928 20 20.3536 20 20V10L18.6667 11.3333V20Z' />
              <path d='M22.3533 3.89333L20.1067 1.64667C20.007 1.54669 19.8885 1.46736 19.7581 1.41324C19.6277 1.35911 19.4879 1.33125 19.3467 1.33125C19.2055 1.33125 19.0656 1.35911 18.9352 1.41324C18.8048 1.46736 18.6864 1.54669 18.5867 1.64667L9.44666 10.84L8.70666 14.0467C8.67513 14.2021 8.67845 14.3626 8.71636 14.5166C8.75428 14.6706 8.82586 14.8143 8.92594 14.9373C9.02603 15.0604 9.15214 15.1597 9.2952 15.2282C9.43826 15.2966 9.59472 15.3326 9.75333 15.3333C9.8353 15.3424 9.91802 15.3424 9.99999 15.3333L13.2333 14.62L22.3533 5.41333C22.4533 5.31363 22.5326 5.19517 22.5868 5.06476C22.6409 4.93434 22.6687 4.79453 22.6687 4.65333C22.6687 4.51213 22.6409 4.37232 22.5868 4.24191C22.5326 4.11149 22.4533 3.99304 22.3533 3.89333V3.89333ZM12.54 13.3867L10.1 13.9267L10.6667 11.5067L17.5467 4.58L19.4267 6.46L12.54 13.3867ZM20.18 5.70667L18.3 3.82667L19.3333 2.77333L21.2267 4.66667L20.18 5.70667Z' />
            </svg>
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className='modal'>
            <button className='close' onClick={close}>
              &times;
            </button>
            <div className='header'> Edit Log ? </div>
            <div className='content'>
              {' '}
              Do you want to edit that log entry?
            </div>
            <div className='actions'>
              <NavLink to={editLink}>
                <button
                  className='button btn-edit'
                  onClick={() => {
                    close();
                  }}
                >
                  Edit
                </button>
              </NavLink>
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

      <button onClick={onHandleExpand}>
        {expandCard ? (
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='#000000'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M11.29 8.70999L6.69998 13.3C6.6074 13.3926 6.53396 13.5025 6.48385 13.6234C6.43375 13.7444 6.40796 13.8741 6.40796 14.005C6.40796 14.1359 6.43375 14.2656 6.48385 14.3865C6.53396 14.5075 6.6074 14.6174 6.69998 14.71C6.79256 14.8026 6.90247 14.876 7.02344 14.9261C7.1444 14.9762 7.27405 15.002 7.40498 15.002C7.53591 15.002 7.66556 14.9762 7.78652 14.9261C7.90749 14.876 8.0174 14.8026 8.10998 14.71L12 10.83L15.88 14.71C15.9726 14.8026 16.0825 14.876 16.2034 14.9261C16.3244 14.9762 16.454 15.002 16.585 15.002C16.7159 15.002 16.8456 14.9762 16.9665 14.9261C17.0875 14.876 17.1974 14.8026 17.29 14.71C17.3826 14.6174 17.456 14.5075 17.5061 14.3865C17.5562 14.2656 17.582 14.1359 17.582 14.005C17.582 13.8741 17.5562 13.7444 17.5061 13.6234C17.456 13.5025 17.3826 13.3926 17.29 13.3L12.7 8.70999C12.6075 8.61728 12.4976 8.54373 12.3766 8.49355C12.2556 8.44337 12.1259 8.41754 11.995 8.41754C11.864 8.41754 11.7343 8.44337 11.6134 8.49355C11.4924 8.54373 11.3825 8.61728 11.29 8.70999Z' />
          </svg>
        ) : (
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='#000000'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M15.88 9.29001L12 13.17L8.11999 9.29001C8.02741 9.19742 7.9175 9.12399 7.79653 9.07388C7.67557 9.02378 7.54592 8.99799 7.41499 8.99799C7.28406 8.99799 7.15441 9.02378 7.03345 9.07388C6.91248 9.12399 6.80257 9.19742 6.70999 9.29001C6.61741 9.38259 6.54397 9.4925 6.49386 9.61346C6.44376 9.73443 6.41797 9.86408 6.41797 9.99501C6.41797 10.1259 6.44376 10.2556 6.49386 10.3765C6.54397 10.4975 6.61741 10.6074 6.70999 10.7L11.3 15.29C11.69 15.68 12.32 15.68 12.71 15.29L17.3 10.7C17.3927 10.6075 17.4662 10.4976 17.5164 10.3766C17.5666 10.2557 17.5924 10.126 17.5924 9.99501C17.5924 9.86404 17.5666 9.73436 17.5164 9.61338C17.4662 9.49241 17.3927 9.38252 17.3 9.29001C16.91 8.91001 16.27 8.90001 15.88 9.29001V9.29001Z' />
          </svg>
        )}
      </button>
    </FooterStyle>
  );
}

export default CardFooter;

const FooterStyle = styled.div`
  text-align: right;
  margin: 3px 0 0 0;
  padding: 0;

  div {
    margin-bottom: 5px;
    border-top: 2px solid #000;
  }

  button {
    background-color: transparent;
    border: none;
    color: var(--primary-color);
    font-size: 1.4rem;
    margin: 0 0 0 15px;
    max-height: 30px;
    padding: 0px;
  }
`;
