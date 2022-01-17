import styled from 'styled-components';
import { useState } from 'react';

function InputField({
  name,
  value,
  onTextInputChange,
  placeholder,
  children,
  width,
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
          width={width}
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
  span {
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
