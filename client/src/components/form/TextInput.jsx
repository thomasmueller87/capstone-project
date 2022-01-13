import styled from 'styled-components';

function TextInput({
  name,
  value,
  onTextInputChange,
  placeholder,
  children,
  width,
}) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <Input
        type='text'
        id={name}
        name={name}
        onChange={onTextInputChange}
        placeholder={placeholder}
        value={value}
        width={width}
      />
    </>
  );
}

export default TextInput;

const Input = styled.input`
  width: ${(props) => props.width || '6rem'}; ;
`;
