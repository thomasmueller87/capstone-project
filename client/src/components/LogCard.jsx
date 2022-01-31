import { useState } from 'react';
import styled from 'styled-components';
import CardContainer from './card/CardContainer';
import Title from './card/Title';
import Place from './card/Place';
import Notes from './card/Notes';
import Air from './card/Air';
import Water from './card/Water';
import Buddy from './card/Buddy';
import CardFooter from './card/CardFooter';

function LogCard({ log, onDeleteFromDatabase, index }) {
  const [expandCard, setExpandCard] = useState(false);

  const handleExpand = () => {
    setExpandCard(!expandCard);
  };
  return (
    <CardContainer>
      <Title
        onHandleExpand={handleExpand}
        date={log.date}
        time={log.time}
        duration={log.duration}
        logNumber={index}
      />

      {expandCard && (
        <CardGrid>
          <div className='card-grid'>
            <div className='place'>
              <Place label='Place' logData={log} />
            </div>
            <div className='air'>
              <Air label='Air' logData={log} />
            </div>
            <div className='water'>
              <Water label='Water' logData={log} />
            </div>
            <div className='buddy'>
              <Buddy label='Buddy' logData={log} />
            </div>

            <div className='notes'>
              <Notes label='Notes' logData={log} />
            </div>
          </div>
        </CardGrid>
      )}
      <CardFooter
        onDeleteFromDatabase={onDeleteFromDatabase}
        logData={log}
        onHandleExpand={handleExpand}
        expandCard={expandCard}
      />
    </CardContainer>
  );
}

export default LogCard;

const CardGrid = styled.div`
  margin: 0;
  padding: 0;

  .card-grid {
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
