import styled from 'styled-components';

function NumberInput({
  name,
  value,
  onNumberInputChange,
  children,
}) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <Input
        type='number'
        id={name}
        name={name}
        onChange={onNumberInputChange}
        value={value}
      />
    </>
  );
}

export default NumberInput;

const Input = styled.input`
  width: 2.5rem;
`;
