import styled from 'styled-components';
import { useState } from 'react';

function InputField({
  name,
  value,
  onTextInputChange,
  placeholder,
  children,
  errorMessage,
  type,
  required,
  pattern,
}) {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <Style>
        <label htmlFor={name}>{children}</label>
        <input
          type={type}
          id={name}
          name={name}
          onChange={onTextInputChange}
          placeholder={placeholder}
          value={value}
          required={required}
          pattern={pattern}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </Style>
    </>
  );
}

export default InputField;

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

  input,
  textarea {
    outline: 0;
    border-width: 0 0 2px;
    border-color: black;
    padding: 5px 5px 0 5px;
    margin: 0 0 0 2rem;
    width: 80%;
    background: none;
  }

  input:focus,
  textarea:focus {
    background: rgba(0, 0, 0, 0.1);
    border-color: var(--primary-color);
  }

  span {
    margin-left: 2rem;
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
  }

  input:invalid[focused='true'] {
    border: 2px solid red;
  }

  input:invalid[focused='true'] ~ span {
    display: block;
  }
`;
