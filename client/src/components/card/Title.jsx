import styled from 'styled-components';
import cardDate from '../../assets/card/card-date.png';
import cardTime from '../../assets/card/card-time.png';
import cardDuration from '../../assets/card/card-duration.png';

function Title({ onHandleExpand, logData }) {
  return (
    <TitleContainer onClick={onHandleExpand}>
      <div className='date'>
        <div>
          <img src={cardDate} alt='Date' />
          {` ${logData.date}`}
        </div>
        <div>
          <img src={cardTime} alt='Date' />
          {` ${logData.time}`}
        </div>
      </div>
      <div className='duration'>
        <div>
          <img src={cardDuration} alt='Date' />
          {` ${logData.duration} min`}
        </div>
      </div>
      <div className='number'>
        <div>#</div>
        <div>{` ${logData.id}`}</div>
      </div>
    </TitleContainer>
  );
}

export default Title;

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  border-bottom: 2px solid var(--primary-color);
  .date {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    flex-grow: 2;
  }

  .duration {
    display: flex;

    align-items: flex-end;
    flex-grow: 2;
  }

  .number {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-grow: 1;
    font-size: 1.5rem;
    div:last-child {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      color: red;
      font-size: 3rem;
    }
  }
`;
