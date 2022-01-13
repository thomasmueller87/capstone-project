import { useState } from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import NumberInput from './NumberInput';

//Import of graphics
import cardDate from '../../assets/card/card-date.png';
import cardTime from '../../assets/card/card-time.png';
import cardDuration from '../../assets/card/card-duration.png';
import cardWaterDepth from '../../assets/card/card-water-depth.png';
import cardWaterTemp from '../../assets/card/card-water-temp.png';
import cardCountry from '../../assets/card/card-country.png';
import cardSpot from '../../assets/card/card-spot.png';
import cardBuddy from '../../assets/card/card-buddy.png';
import cardAirEan from '../../assets/card/card-air-ean.png';
import cardAir from '../../assets/card/card-air.png';

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
        <img src={cardDate} alt='Date' />
        [DD.MM.YYYY]
      </TextInput>
      <TextInput
        onTextInputChange={handleChange}
        name='time'
        value={log.time}
      >
        <img src={cardTime} alt='Time' />
      </TextInput>
      <NumberInput
        name='duration'
        value={log.duration}
        onNumberInputChange={handleChange}
      >
        <img src={cardDuration} alt='Duration' />
      </NumberInput>
      <TextInput
        onTextInputChange={handleChange}
        name='country'
        value={log.country}
      >
        <img src={cardCountry} alt='Country' />
      </TextInput>
      <TextInput
        onTextInputChange={handleChange}
        name='spot'
        value={log.spot}
      >
        <img src={cardSpot} alt='Spot' />
      </TextInput>
      <NumberInput
        name='airStart'
        value={log.airStart}
        onNumberInputChange={handleChange}
      >
        <img src={cardAir} alt='Air Start' />
        start
      </NumberInput>
      <NumberInput
        name='airEnd'
        value={log.airEnd}
        onNumberInputChange={handleChange}
      >
        <img src={cardAir} alt='Air End' />
        end
      </NumberInput>
      <NumberInput
        name='airEan'
        value={log.airEan}
        onNumberInputChange={handleChange}
      >
        <img src={cardAirEan} alt='% Nitrox' />
      </NumberInput>
      <NumberInput
        name='waterDepthMax'
        value={log.waterDepthMax}
        onNumberInputChange={handleChange}
      >
        <img src={cardWaterDepth} alt='Max Depth' />
        max
      </NumberInput>
      <NumberInput
        name='waterDepthAvg'
        value={log.waterDepthAvg}
        onNumberInputChange={handleChange}
      >
        <img src={cardWaterDepth} alt='Average Depth' />
        avg
      </NumberInput>
      <NumberInput
        name='waterTemp'
        value={log.waterTemp}
        onNumberInputChange={handleChange}
      >
        <img src={cardWaterTemp} alt='Water temperature' />
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
        <img src={cardBuddy} alt='Buddy' />
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
