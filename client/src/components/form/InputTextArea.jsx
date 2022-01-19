import styled from 'styled-components';

function InputTextArea({
  name,
  value,
  onTextInputChange,
  placeholder,
  children,
  required,
}) {
  return (
    <>
      <Style>
        <label htmlFor={name}>{children}</label>
        <textarea
          id={name}
          name={name}
          onChange={onTextInputChange}
          placeholder={placeholder}
          value={value}
          required={required}
          rows='4'
        />
      </Style>
    </>
  );
}

export default InputTextArea;

const Style = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  font-size: 0.8rem;

  label {
    display: flex;
    align-items: center;
    padding: 0 5px;

    p {
      margin: 0;
      padding: 0 0 0 5px;
    }
  }

  textarea {
    outline: 0;
    border-width: 0 0 2px;
    border-color: black;
    padding: 5px 5px 0 5px;
    margin: 0 0 0 2rem;
    width: 80%;
    background: none;
  }

  textarea:focus {
    background: rgba(0, 0, 0, 0.1);
    border-color: var(--primary-color);
  }
`;
