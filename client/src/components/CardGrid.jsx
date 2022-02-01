import styled from 'styled-components';

function CardGrid({ children }) {
  return <Grid>{children}</Grid>;
}

export default CardGrid;

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 0px 10px;
  grid-template-areas:
    'title title'
    'place place'
    'air water'
    'buddy buddy'
    'notes notes';
  .title {
    grid-area: title;
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
