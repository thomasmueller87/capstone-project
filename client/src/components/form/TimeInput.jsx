import styled from 'styled-components';

function TimeInput({
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
        type='time'
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

export default TimeInput;

const Input = styled.input`
  width: ${(props) => props.width || '6rem'}; ;
`;
