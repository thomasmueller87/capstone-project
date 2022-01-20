import styled from 'styled-components';
import cardAirEan from '../../assets/card/card-air-ean.png';
import cardAir from '../../assets/card/card-air.png';

function Air({ label, logData }) {
  return (
    <CardWrapper>
      <div className='icon1'>
        <img src={cardAir} alt='Air Start' />
        START
      </div>
      <div className='icon2'>
        <img src={cardAir} alt='Air End' />
        END
      </div>
      <div className='icon3'>
        <img src={cardAirEan} alt='% Nitrox' />
      </div>

      {logData.airStart !== '' && (
        <div className='data1'>{`${logData.airStart} bar`}</div>
      )}
      {logData.airEnd !== '' && (
        <div className='data2'>{`${logData.airEnd} bar`}</div>
      )}
      {logData.airEan !== '' && (
        <div className='data3'>{`${logData.airEan} %`}</div>
      )}

      <div className='label'>{label}</div>
    </CardWrapper>
  );
}

export default Air;

const CardWrapper = styled.section`
  background-color: var(--background-card-air);
  border: 1px solid black;
  border-radius: 5px;
  margin: 0.5rem 0 1rem 0;
  padding: 0.7rem 0 0 0.3rem;
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
