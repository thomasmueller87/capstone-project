import styled from 'styled-components';

function DateInput({
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
        type='date'
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

export default DateInput;

const Input = styled.input`
  width: ${(props) => props.width || '6rem'}; ;
`;
