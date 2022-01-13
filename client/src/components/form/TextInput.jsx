import styled from 'styled-components';

function TextInput({
  name,
  value,
  onTextInputChange,
  children,
}) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <Input
        type='text'
        id={name}
        name={name}
        onChange={onTextInputChange}
        value={value}
      />
    </>
  );
}

export default TextInput;

const Input = styled.input`
  width: 5rem;
`;
