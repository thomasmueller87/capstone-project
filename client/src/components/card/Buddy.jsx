import styled from 'styled-components';
import cardBuddy from '../../assets/card/card-buddy.png';
import cardSignature from '../../assets/card/card-signature.png';
import cardDummySignature from '../../assets/card/card-dummy-signature.png';

function Buddy({ label, logData }) {
  return (
    <CardWrapper>
      <div className='icon1'>
        <img src={cardBuddy} alt='Dive Buddy' />
      </div>
      <div className='icon2'>
        <img src={cardSignature} alt='Buddy Signature' />
      </div>
      <div className='data1'>{logData.buddy}</div>
      <div className='data2'>
        {logData.signature ? (
          <img
            src={logData.signature}
            alt='my signature'
            style={{
              display: 'block',
              margin: '0 auto',
              border: '1px solid lightgrey',
              borderRadius: '5px',
              width: '100%',
            }}
          />
        ) : null}
      </div>
      <div className='label'>{label}</div>
    </CardWrapper>
  );
}

export default Buddy;

const CardWrapper = styled.section`
  background-color: var(--background-card-buddy);
  border: 1px solid black;
  border-radius: 5px;
  margin: 0.5rem 0 1rem 0;
  padding: 0.3rem;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 1rem.5 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  position: relative;
  text-align: left;

  .icon1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .icon2 {
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    align-items: flex-end;
  }
  .data1 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .data2 {
    grid-area: 2 / 2 / 3 / 3;
    padding-top: 0.5rem;
    text-align: center;
  }

  .label {
    background-color: var(--background-card-label);
    border: 2px solid var(--primary-color);
    border-radius: 5px;
    color: var(--primary-color);
    padding: 0 0.5rem;
    position: absolute;
    top: -0.8rem;
    right: 0.5rem;
  }
`;
