import styled from 'styled-components';
import cardAirEan from '../../assets/card/card-air-ean.png';
import cardAirStart from '../../assets/card/card-air-start.png';
import cardAirEnd from '../../assets/card/card-air-end.png';

function Air({ label, logData }) {
  return (
    <CardWrapper>
      <div className='icons'>
        <div>
          <img src={cardAirStart} alt='Air Start' />
        </div>
        <div>
          <img src={cardAirEnd} alt='Air End' />
        </div>
        <div>
          <img src={cardAirEan} alt='% Nitrox' />
        </div>
      </div>

      <div className='data'>
        <div>{logData.airStart}</div>
        <div>{logData.airEnd}</div>
        <div>{logData.airEan}</div>
      </div>
      <div className='label'>{label}</div>
    </CardWrapper>
  );
}

export default Air;

const CardWrapper = styled.section`
  background-color: var(--background-card-air);
  border: 1px solid black;
  border-radius: 5px;
  margin: 1.2rem 0 1rem 0;
  padding: 0.3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  width: 40%;

  Xdiv {
    border: 1px solid black;
  }

  .icons {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    flex-grow: 1;
  }
  .data {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    flex-grow: 1;
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
