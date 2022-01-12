import styled from 'styled-components';

function DiveLog() {
  return (
    <CardContainer>
      <Title>
        <div className='date'>
          <div>06.01.2021</div>
          <div>13:48</div>
        </div>
        <div className='duration'>0:48 h</div>
        <div className='number'>
          <div>#</div>
          <div>1</div>
        </div>
      </Title>
    </CardContainer>
  );
}

export default DiveLog;

const CardContainer = styled.section`
  background-color: var(--background-card);
  border: 2px solid black;
  border-radius: 7px;
  margin: 1rem 0.5rem 1rem 0.5rem;
  padding: 0.5rem;
  font-size: var(--fontsize-card-standard);
  font-weight: var(--fontweight-card-standard);
`;
//Section Title
const Title = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  height: 3rem;
  border-bottom: 2px solid var(--primary-nav);
  .date {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    flex-grow: 2;
  }

  .duration {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
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
      color: var(--primary-nav);
      font-size: 3rem;
    }
  }
`;
//Section Place
