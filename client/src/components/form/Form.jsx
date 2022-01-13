import { useState } from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import NumberInput from './NumberInput';

function Form() {
  const initialLog = {
    id: 1,
    date: '16.08.2021',
    time: '13:48',
    duration: '48',
    country: 'Egypt',
    spot: 'Abu Nashim',
    airStart: '200',
    airEnd: '60',
    airEan: '32',
    waterDepthMax: '28.4',
    waterDepthAvg: '17.3',
    waterTemp: '23',
    notes:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dolor dignissimos, aliquam officiis itaque consequuntur eveniet quia soluta eius sint?',
    buddy: 'Antonia',
  };

  const [log, setLog] = useState(initialLog);

  const handleSubmit = console.log({ log });

  const handleChange = (event) => {
    let inputValue = event.target.value; // "Glühwein"

    if (event.target.type === 'checkbox') {
      inputValue = event.target.checked;
    }

    setLog({
      // alle bestehenden Properties behalten
      // neu zu setzende Property -> deren Wert überschreiben
      ...log,
      [event.target.name]: inputValue,
    });
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <TextInput
        onTextInputChange={handleChange}
        name='date'
        value={log.date}
      >
        Date
      </TextInput>
      <TextInput
        onTextInputChange={handleChange}
        name='time'
        value={log.time}
      >
        Time
      </TextInput>
      <NumberInput
        name='duration'
        value={log.duration}
        onNumberInputChange={handleChange}
      >
        Duration
      </NumberInput>
      <TextInput
        onTextInputChange={handleChange}
        name='country'
        value={log.country}
      >
        Country
      </TextInput>
      <TextInput
        onTextInputChange={handleChange}
        name='spot'
        value={log.spot}
      >
        Spot
      </TextInput>
      <NumberInput
        name='airStart'
        value={log.airStart}
        onNumberInputChange={handleChange}
      >
        Air Start
      </NumberInput>
      <NumberInput
        name='airEnd'
        value={log.airEnd}
        onNumberInputChange={handleChange}
      >
        Air End
      </NumberInput>
      <NumberInput
        name='airEan'
        value={log.airEan}
        onNumberInputChange={handleChange}
      >
        Percentage Nitrox
      </NumberInput>
      <NumberInput
        name='waterDepthMax'
        value={log.waterDepthMax}
        onNumberInputChange={handleChange}
      >
        Max diving depth
      </NumberInput>
      <NumberInput
        name='waterDepthAvg'
        value={log.waterDepthAvg}
        onNumberInputChange={handleChange}
      >
        Average diving depth
      </NumberInput>
      <NumberInput
        name='waterTemp'
        value={log.waterTemp}
        onNumberInputChange={handleChange}
      >
        Water temperature
      </NumberInput>
      <TextInput
        onTextInputChange={handleChange}
        name='notes'
        value={log.notes}
      >
        Notes
      </TextInput>
      <TextInput
        onTextInputChange={handleChange}
        name='buddy'
        value={log.buddy}
      >
        Buddy
      </TextInput>
    </FormStyle>
  );
}

export default Form;

const FormStyle = styled.form`
  label {
    display: block;
  }
`;
