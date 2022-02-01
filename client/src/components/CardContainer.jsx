import styled from 'styled-components';

function CardContainer({ children }) {
  return <Container>{children}</Container>;
}

export default CardContainer;

const Container = styled.section`
  background-color: var(--background-card);
  border-radius: 0 25px 0 25px;
  font-size: var(--fontsize-card-standard);
  font-weight: var(--fontweight-card-standard);
  margin: 1rem 0.5rem 1rem 0.5rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
`;
