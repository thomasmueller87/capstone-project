import styled from 'styled-components';

function Notes({ label, notes }) {
  return (
    <CardWrapper>
      <div className='inner-flex'>
        <div
          className='inner-description'
          data-testid='LogCard-notes'
        >
          {notes}
        </div>
      </div>
      <div className='label'>{label}</div>
    </CardWrapper>
  );
}

export default Notes;

const CardWrapper = styled.section`
  background: rgb(250, 251, 224);
  background: var(--background-card-notes);
  border-radius: 10px;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0.3rem;
  display: flex;
  flex-flow: column nowrap;

  position: relative;

  .inner-description {
    font-size: var(--fontsize-card-notes);
    font-weight: var(--fontweight-card-notes);
    text-align: left;
    padding: 1rem 0.5rem 0 0.5rem;
  }
  .label {
    border-radius: 5px;
    background-color: var(--background-card-label);
    color: var(--card-label-text-color);
    padding: 0.2rem 1rem;
    position: absolute;
    right: 1rem;
    top: -0.7rem;
  }
`;
