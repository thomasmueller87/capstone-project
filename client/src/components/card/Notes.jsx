import styled from 'styled-components';

function Notes({ label, logData }) {
  return (
    <CardWrapper>
      <div className='inner-flex'>
        <div className='inner-description'>{logData.notes}</div>
      </div>
      <div className='label'>{label}</div>
    </CardWrapper>
  );
}

export default Notes;

const CardWrapper = styled.section`
  background-color: var(--background-card-notes);
  border: 1px solid black;
  border-radius: 5px;
  margin: 0.5rem 0 1rem 0;
  padding: 0.3rem;
  display: flex;
  flex-flow: column nowrap;

  position: relative;

  .inner-description {
    font-size: var(--fontsize-card-notes);
    font-weight: var(--fontweight-card-notes);
    text-align: left;
    padding: 0.5rem 0 0 0;
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
