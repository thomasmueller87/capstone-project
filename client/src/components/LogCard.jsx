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
              <Place
                label='Place'
                logData={log}
                country={log.country}
                spot={log.spot}
                posLat={log.posLat}
                posLng={log.posLng}
              />
            </div>
            <div className='air'>
              <Air
                label='Air'
                airStart={log.airStart}
                airEnd={log.airEnd}
                airEan={log.airEan}
              />
            </div>
            <div className='water'>
              <Water
                label='Water'
                waterDepthMax={log.waterDepthMax}
                waterDepthAvg={log.waterDepthAvg}
                waterTemp={log.waterTemp}
              />
            </div>
            <div className='buddy'>
              <Buddy
                label='Buddy'
                buddy={log.buddy}
                signature={log.signature}
              />
            </div>

            <div className='notes'>
              <Notes label='Notes' notes={log.notes} />
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
  .buddy {
    grid-area: buddy;
  }
  .notes {
    grid-area: notes;
  }
`;
