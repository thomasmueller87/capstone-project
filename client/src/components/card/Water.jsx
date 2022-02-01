import styled from 'styled-components';

function Water({
  label,
  waterDepthMax,
  waterDepthAvg,
  waterTemp,
}) {
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
            d='M7 3V5H17V3H7ZM9 7V9H15V7H9ZM2 7.96V16.04L6.03 12L2 7.96ZM22.03 7.96L18 12L22.03 16.04V7.96ZM7 11V13H17V11H7ZM9 15V17H15V15H9ZM7 19V21H17V19H7Z'
            fill='black'
          />
        </svg>
        MAX
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
            d='M7 3V5H17V3H7ZM9 7V9H15V7H9ZM2 7.96V16.04L6.03 12L2 7.96ZM22.03 7.96L18 12L22.03 16.04V7.96ZM7 11V13H17V11H7ZM9 15V17H15V15H9ZM7 19V21H17V19H7Z'
            fill='black'
          />
        </svg>
        AVG
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
            d='M12 7.79999C12.1591 7.79999 12.3118 7.86321 12.4243 7.97573C12.5368 8.08825 12.6 8.24086 12.6 8.39999V14.4756C13.1656 14.6216 13.6585 14.9689 13.9864 15.4524C14.3142 15.9359 14.4545 16.5223 14.3809 17.1018C14.3073 17.6813 14.0249 18.214 13.5866 18.6002C13.1483 18.9863 12.5842 19.1994 12 19.1994C11.4159 19.1994 10.8518 18.9863 10.4135 18.6002C9.97517 18.214 9.69275 17.6813 9.61914 17.1018C9.54554 16.5223 9.68581 15.9359 10.0137 15.4524C10.3415 14.9689 10.8344 14.6216 11.4 14.4756V8.39999C11.4 8.24086 11.4632 8.08825 11.5758 7.97573C11.6883 7.86321 11.8409 7.79999 12 7.79999ZM12 2.39999C11.0452 2.39999 10.1296 2.77928 9.45443 3.45441C8.7793 4.12954 8.40002 5.04521 8.40002 5.99999V13.6248C7.78901 14.3176 7.3909 15.172 7.25345 16.0855C7.116 16.9989 7.24505 17.9327 7.62511 18.7746C8.00518 19.6165 8.62011 20.3309 9.39613 20.832C10.1721 21.3331 11.0763 21.5997 12 21.5997C12.9238 21.5997 13.8279 21.3331 14.6039 20.832C15.3799 20.3309 15.9949 19.6165 16.3749 18.7746C16.755 17.9327 16.884 16.9989 16.7466 16.0855C16.6091 15.172 16.211 14.3176 15.6 13.6248V5.99999C15.6 5.04521 15.2207 4.12954 14.5456 3.45441C13.8705 2.77928 12.9548 2.39999 12 2.39999ZM12 3.59999C12.6365 3.59999 13.247 3.85285 13.6971 4.30294C14.1472 4.75302 14.4 5.36347 14.4 5.99999V14.106L14.5716 14.28C15.0677 14.7864 15.4032 15.4279 15.5361 16.1242C15.6691 16.8205 15.5935 17.5405 15.3189 18.194C15.0442 18.8475 14.5828 19.4054 13.9924 19.7977C13.402 20.19 12.7089 20.3993 12 20.3993C11.2912 20.3993 10.5981 20.19 10.0077 19.7977C9.41725 19.4054 8.9558 18.8475 8.68117 18.194C8.40654 17.5405 8.33095 16.8205 8.46388 16.1242C8.59681 15.4279 8.93235 14.7864 9.42842 14.28L9.60002 14.106V5.99999C9.60002 5.36347 9.85287 4.75302 10.303 4.30294C10.753 3.85285 11.3635 3.59999 12 3.59999Z'
            fill='black'
          />
        </svg>
      </div>

      {waterDepthMax !== '' && (
        <div className='data1'>{`${waterDepthMax} m`}</div>
      )}
      {waterDepthAvg !== '' && (
        <div className='data2'>{`${waterDepthAvg} m`}</div>
      )}
      {waterTemp !== '' && (
        <div className='data3'>{`${waterTemp} °C`}</div>
      )}

      <div className='label'>{label}</div>
    </CardWrapper>
  );
}

export default Water;

const CardWrapper = styled.section`
  background: rgba(195, 218, 255);
  background: var(--background-card-water);
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
