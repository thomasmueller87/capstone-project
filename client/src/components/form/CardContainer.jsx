import styled from 'styled-components';

function CardContainer(props) {
  return <Container>{props.children}</Container>;
}

export default CardContainer;

const Container = styled.section`
  background-color: var(--background-card);
  border: 2px solid black;
  border-radius: 7px;
  margin: 1rem 0.5rem 1rem 0.5rem;
  padding: 0.5rem;
  font-size: var(--fontsize-card-standard);
  font-weight: var(--fontweight-card-standard);
`;
