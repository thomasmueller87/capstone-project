import styled from 'styled-components';
import CardContainer from './card/CardContainer';
import Title from './card/Title';
import Place from './card/Place';
import Notes from './card/Notes';
import Air from './card/Air';
import Water from './card/Water';
import Buddy from './card/Buddy';


function LogCard({ data }) {

  return (
    <CardContainer>
      <Title logData={data} />

      <CardGrid>
        <div className='card-container'>
          <div className='place'>
            <Place label='Place' logData={data} />
          </div>
          <div className='air'>
            <Air label='Air' logData={data} />
          </div>
          <div className='water'>
            <Water label='Water' logData={data} />

          </div>
          <div className='buddy'>
            <Buddy label='Buddy' logData={data} />
          </div>

          <div className='notes'>
            <Notes label='Notes' logData={data} />
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
      'buddy buddy'
      'notes notes';
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
