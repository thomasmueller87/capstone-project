import styled from 'styled-components';
import cardCountry from '../../assets/card/card-country.png';
import cardSpot from '../../assets/card/card-spot.png';

function Place({ label, logData }) {
  return (
    <CardWrapper>
      <div className='icon1'>
        <img src={cardCountry} alt='Country' />
      </div>
      <div className='icon2'>
        <img src={cardSpot} alt='Spot' />
      </div>
      <div className='data1'>{logData.country}</div>
      <div className='data2'>{logData.spot}</div>
      <div className='label'>{label}</div>
    </CardWrapper>
  );
}

export default Place;

const CardWrapper = styled.section`
  background-color: var(--background-card-place);
  border: 1px solid black;
  border-radius: 5px;
  margin: 1.2rem 0 1rem 0;
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
    padding-left: 2px;
  }
  .data1 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .data2 {
    grid-area: 2 / 2 / 3 / 3;
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
