import styled from 'styled-components';
import CardContainer from './card/CardContainer';
import Title from './card/Title';
import Place from './card/Place';
import Notes from './card/Notes';
import Air from './card/Air';
import Water from './card/Water';
import Buddy from './card/Buddy';

const initialLog = {
  id: 1,
  date: '16.08.2021',
  time: '13:48',
  duration: '48 min',
  country: 'Egypt',
  spot: 'Abu Nashim',
  airStart: '200 bar',
  airEnd: '60 bar',
  airEan: '32 %',
  waterDepthMax: '28.4m',
  waterDepthAvg: '17.3m',
  waterTemp: '23 °C',
  notes:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dolor dignissimos, aliquam officiis itaque consequuntur eveniet quia soluta eius sint?',
  buddy: 'Antonia',
};

function LogCard() {
  return (
    <CardContainer>
      <Title logData={initialLog} />

      <CardGrid>
        <div className='card-container'>
          <div className='place'>
            <Place label='Place' logData={initialLog} />
          </div>
          <div className='air'>
            <Air label='Air' logData={initialLog} />
          </div>
          <div className='water'>
            <Water label='Water' logData={initialLog} />
          </div>
          <div className='notes'>
            <Notes label='Notes' logData={initialLog} />
          </div>
          <div className='buddy'>
            <Buddy label='Buddy' logData={initialLog} />
          </div>
        </div>
      </CardGrid>
    </CardContainer>
  );
}

export default LogCard;

const CardGrid = styled.div`
  margin: 0;
  padding: 0;

  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 0px 10px;
    grid-template-areas:
      'place place'
      'air water'
      'notes notes'
      'buddy buddy';
  }
  .place {
    grid-area: place;
  }
  .air {
    grid-area: air;
  }
  .water {
    grid-area: water;
  }
  .notes {
    grid-area: notes;
  }
  .buddy {
    grid-area: buddy;
  }
`;
