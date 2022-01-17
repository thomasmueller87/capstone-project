//import styled from 'styled-components';
import CardContainer from './form/CardContainer';
import Form from './form/Form';

function AddCard({ onAddLog }) {
  return (
    <CardContainer>
      <Form onAddLog={onAddLog} />

    </CardContainer>
  );
}

export default AddCard;
