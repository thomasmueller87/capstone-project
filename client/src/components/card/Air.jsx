import styled from 'styled-components';

function Air({ label, airStart, airEnd, airEan }) {
  return (
    <CardWrapper>
      <div className='icon1'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9 8C9 7.20435 9.31607 6.44129 9.87868 5.87868C10.4413 5.31607 11.2044 5 12 5V5C12.7956 5 13.5587 5.31607 14.1213 5.87868C14.6839 6.44129 15 7.20435 15 8V21.4C15 21.4788 14.9845 21.5568 14.9543 21.6296C14.9242 21.7024 14.88 21.7685 14.8243 21.8243C14.7685 21.88 14.7024 21.9242 14.6296 21.9543C14.5568 21.9845 14.4788 22 14.4 22H9.6C9.52121 22 9.44319 21.9845 9.37039 21.9543C9.29759 21.9242 9.23145 21.88 9.17574 21.8243C9.12002 21.7685 9.07583 21.7024 9.04567 21.6296C9.01552 21.5568 9 21.4788 9 21.4V8Z'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M9 11H15'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M12 2H13M12 5V2V5ZM12 2H11H12Z'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3.13831 12.2889C2.92481 12.2889 2.72006 12.2041 2.56909 12.0531C2.41813 11.9021 2.33331 11.6974 2.33331 11.4839V2.45777C2.33327 2.32038 2.36839 2.18526 2.43534 2.06527C2.50229 1.94529 2.59883 1.84444 2.71578 1.77232C2.83273 1.7002 2.96619 1.65922 3.10346 1.65327C3.24072 1.64732 3.37723 1.6766 3.49998 1.73833L12.5261 6.25333C12.6595 6.3203 12.7717 6.42305 12.8501 6.5501C12.9284 6.67715 12.9699 6.82349 12.9699 6.97277C12.9699 7.12206 12.9284 7.2684 12.8501 7.39545C12.7717 7.5225 12.6595 7.62525 12.5261 7.69222L3.49998 12.2033C3.3878 12.2598 3.26391 12.2891 3.13831 12.2889V12.2889ZM3.13831 2.43444L3.11109 2.45777V11.4839L3.14998 11.5072L12.1761 7C12.1781 6.99645 12.1792 6.99242 12.1792 6.98833C12.1792 6.98423 12.1781 6.98021 12.1761 6.97666L3.13831 2.43444Z'
            fill='black'
          />
        </svg>
      </div>
      <div className='icon2'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9 8C9 7.20435 9.31607 6.44129 9.87868 5.87868C10.4413 5.31607 11.2044 5 12 5V5C12.7956 5 13.5587 5.31607 14.1213 5.87868C14.6839 6.44129 15 7.20435 15 8V21.4C15 21.4788 14.9845 21.5568 14.9543 21.6296C14.9242 21.7024 14.88 21.7685 14.8243 21.8243C14.7685 21.88 14.7024 21.9242 14.6296 21.9543C14.5568 21.9845 14.4788 22 14.4 22H9.6C9.52121 22 9.44319 21.9845 9.37039 21.9543C9.29759 21.9242 9.23145 21.88 9.17574 21.8243C9.12002 21.7685 9.07583 21.7024 9.04567 21.6296C9.01552 21.5568 9 21.4788 9 21.4V8Z'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M9 11H15'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M12 2H13M12 5V2V5ZM12 2H11H12Z'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
        <svg
          width='16'
          height='16'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.18334 17.7778H3.37223C3.06723 17.7778 2.77472 17.6566 2.55906 17.441C2.34339 17.2253 2.22223 16.9328 2.22223 16.6278V3.37223C2.22223 3.06723 2.34339 2.77472 2.55906 2.55906C2.77472 2.34339 3.06723 2.22223 3.37223 2.22223H7.1889C7.49293 2.2237 7.78401 2.34551 7.99848 2.56101C8.21295 2.77652 8.33334 3.06819 8.33334 3.37223V16.6278C8.33334 16.9328 8.21218 17.2253 7.99651 17.441C7.78085 17.6566 7.48834 17.7778 7.18334 17.7778ZM7.22223 3.33334H3.33334V16.6667H7.22223V3.33334Z'
            fill='black'
          />
          <path
            d='M16.6278 17.7778H12.8167C12.5117 17.7778 12.2192 17.6566 12.0035 17.441C11.7878 17.2253 11.6667 16.9328 11.6667 16.6278V3.37223C11.6667 3.06723 11.7878 2.77472 12.0035 2.55906C12.2192 2.34339 12.5117 2.22223 12.8167 2.22223H16.6334C16.9374 2.2237 17.2285 2.34551 17.4429 2.56101C17.6574 2.77652 17.7778 3.06819 17.7778 3.37223V16.6278C17.7778 16.9328 17.6566 17.2253 17.441 17.441C17.2253 17.6566 16.9328 17.7778 16.6278 17.7778ZM16.6667 3.33334H12.7778V16.6667H16.6667V3.33334Z'
            fill='black'
          />
        </svg>
      </div>
      <div className='icon3'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9 8C9 7.20435 9.31607 6.44129 9.87868 5.87868C10.4413 5.31607 11.2044 5 12 5V5C12.7956 5 13.5587 5.31607 14.1213 5.87868C14.6839 6.44129 15 7.20435 15 8V21.4C15 21.4788 14.9845 21.5568 14.9543 21.6296C14.9242 21.7024 14.88 21.7685 14.8243 21.8243C14.7685 21.88 14.7024 21.9242 14.6296 21.9543C14.5568 21.9845 14.4788 22 14.4 22H9.6C9.52121 22 9.44319 21.9845 9.37039 21.9543C9.29759 21.9242 9.23145 21.88 9.17574 21.8243C9.12002 21.7685 9.07583 21.7024 9.04567 21.6296C9.01552 21.5568 9 21.4788 9 21.4V8Z'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M9 11H15'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M12 2H13M12 5V2V5ZM12 2H11H12Z'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
        EAN
      </div>

      {airStart !== '' && (
        <div
          className='data1'
          data-testid='LogCard-airStart'
        >{`${airStart} bar`}</div>
      )}
      {airEnd !== '' && (
        <div
          className='data2'
          data-testid='LogCard-airEnd'
        >{`${airEnd} bar`}</div>
      )}
      {airEan !== '' && (
        <div
          className='data3'
          data-testid='LogCard-airEan'
        >{`${airEan} %`}</div>
      )}

      <div className='label'>{label}</div>
    </CardWrapper>
  );
}

export default Air;

const CardWrapper = styled.section`
  background: rgb(202, 250, 196);
  background: var(--background-card-air);
  border-radius: 10px;
  margin: 0.5rem 0 1rem 0;
  padding: 1.2rem 0 0 0.3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  position: relative;
  text-align: left;
  min-height: 15vh;

  .icon1 {
    grid-area: 1 / 1 / 2 / 2;
    font-size: 0.6rem;
  }
  .icon2 {
    grid-area: 2 / 1 / 3 / 2;
    font-size: 0.6rem;
  }
  .icon3 {
    grid-area: 3 / 1 / 4 / 2;
    font-size: 0.6rem;
  }
  .data1 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .data2 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .data3 {
    grid-area: 3 / 2 / 4 / 3;
  }

  .label {
    border-radius: 5px;
    background-color: var(--background-card-label);
    color: var(--card-label-text-color);
    padding: 0.2rem 1rem;
    position: absolute;
    right: 1rem;
    top: -0.7rem;
  }
`;
