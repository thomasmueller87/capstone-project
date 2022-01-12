import styled from 'styled-components';
import cardCountry from '../../assets/card/card-country.png';
import cardSpot from '../../assets/card/card-spot.png';

function Place({ label, logData }) {
  return (
    <CardWrapper>
      <div className='inner-flex'>
        <div>
          <img src={cardCountry} alt='Country' />
        </div>
        <div className='inner-description'>{` ${logData.country}`}</div>
      </div>
      <div className='inner-flex'>
        <div>
          <img src={cardSpot} alt='Spot' />
        </div>
        <div className='inner-description'>{` ${logData.spot}`}</div>
      </div>
      <div className='label'>{label}</div>
    </CardWrapper>
  );
}

export default Place;

const CardWrapper = styled.section`
  background-color: var(--background-place);
  border: 1px solid black;
  border-radius: 5px;
  margin: 1.2rem 0 1rem 0;
  padding: 0.3rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  position: relative;
  .inner-flex {
    display: flex;
  }
  .inner-description {
    padding-left: 0.5rem;
  }
  .label {
    background-color: var(--background-label);
    border: 2px solid var(--primary-nav);
    border-radius: 5px;
    color: var(--primary-nav);
    padding: 0 0.5rem;
    position: absolute;
    top: -0.8rem;
    right: 0.5rem;
  }
`;
