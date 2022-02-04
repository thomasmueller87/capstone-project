import { useState } from 'react';
import styled from 'styled-components';
import CardContainer from './CardContainer';
import CardGrid from './CardGrid';
import Title from './card/Title';
import Place from './card/Place';
import Notes from './card/Notes';
import Air from './card/Air';
import Water from './card/Water';
import Buddy from './card/Buddy';
import CardFooter from './card/CardFooter';

function LogCard({
  log,
  onDeleteFromDatabase,
  index,
  dataTestId,
}) {
  const [expandCard, setExpandCard] = useState(false);

  const handleExpand = () => {
    setExpandCard(!expandCard);
  };
  return (
    <CardContainer>
      <CardGrid>
        <div className='title'>
          <Title
            onHandleExpand={handleExpand}
            date={log.date}
            time={log.time}
            duration={log.duration}
            logNumber={index}
          />
        </div>
      </CardGrid>

      {expandCard && (
        <CardGrid>
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
