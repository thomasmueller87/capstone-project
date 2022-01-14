import styled from 'styled-components';

function NumberInput({
  name,
  value,
  onNumberInputChange,
  placeholder,
  children,
  width,
}) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <Input
        type='number'
        id={name}
        name={name}
        onChange={onNumberInputChange}
        placeholder={placeholder}
        value={value}
        width={width}
      />
    </>
  );
}

export default NumberInput;

const Input = styled.input`
  width: ${(props) => props.width || '2.5rem'}; ;
`;
