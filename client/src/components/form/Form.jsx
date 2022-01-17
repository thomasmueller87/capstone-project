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

function Form({ onAddLog }) {

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
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddLog(log);
    saveInfoToggle();
  };

  const saveInfoToggle = () => {
    setSaveInfo(true);
    setTimeout(() => {
      setSaveInfo(false);
    }, 3000);

  };

  const resetLog = {
    id: '',
    date: '',
    time: '',
    duration: '',
    country: '',
    spot: '',
    airStart: '',
    airEnd: '',
    airEan: '',
    waterDepthMax: '',
    waterDepthAvg: '',
    waterTemp: '',
    notes: '',
    buddy: '',
  };

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setLog({
      ...log,
      [event.target.name]: inputValue,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <TextInput
            onTextInputChange={handleChange}
            name='date'
            value={log.date}
            placeholder='dd.mm.yyyy'
            width='5rem'
          >
            <img src={cardDate} alt='Date' />
          </TextInput>
          <TextInput
            onTextInputChange={handleChange}
            name='time'
            value={log.time}
            placeholder='XX:XX'
            width='3rem'
          >
            <img src={cardTime} alt='Time' />
          </TextInput>
          <NumberInput
            name='duration'
            value={log.duration}
            onNumberInputChange={handleChange}
            placeholder='XX'
            width='2rem'
          >
            <img src={cardDuration} alt='Duration' />
          </NumberInput>
        </FormGroup>
        <FormGroup backgroundcolor='var(--background-card-place)'>
          <TextInput
            onTextInputChange={handleChange}
            name='country'
            value={log.country}
            placeholder='Country'
            width='8rem'
          >
            <img src={cardCountry} alt='Country' />
          </TextInput>
          <TextInput
            onTextInputChange={handleChange}
            name='spot'
            value={log.spot}
            placeholder='Spot'
            width='8rem'
          >
            <img src={cardSpot} alt='Spot' />
          </TextInput>
        </FormGroup>
        <FormGroup backgroundcolor='var(--background-card-air)'>
          <NumberInput
            name='airStart'
            value={log.airStart}
            onNumberInputChange={handleChange}
            placeholder='xxx'
            width='2.5rem'
          >
            <img src={cardAir} alt='Air Start' />
            start
          </NumberInput>
          <NumberInput
            name='airEnd'
            value={log.airEnd}
            onNumberInputChange={handleChange}
            placeholder='xxx'
            width='2.5rem'
          >
            <img src={cardAir} alt='Air End' />
            end
          </NumberInput>
          <NumberInput
            name='airEan'
            value={log.airEan}
            onNumberInputChange={handleChange}
            placeholder='xx'
            width='2.5rem'
          >
            <img src={cardAirEan} alt='% Nitrox' />
          </NumberInput>
        </FormGroup>
        <FormGroup backgroundcolor='var(--background-card-water)'>
          <NumberInput
            name='waterDepthMax'
            value={log.waterDepthMax}
            onNumberInputChange={handleChange}
            placeholder='xx'
            width='2.5rem'
          >
            <img src={cardWaterDepth} alt='Max Depth' />
            max
          </NumberInput>
          <NumberInput
            name='waterDepthAvg'
            value={log.waterDepthAvg}
            onNumberInputChange={handleChange}
            placeholder='xx'
            width='2.5rem'
          >
            <img src={cardWaterDepth} alt='Average Depth' />
            avg
          </NumberInput>
          <NumberInput
            name='waterTemp'
            value={log.waterTemp}
            onNumberInputChange={handleChange}
            placeholder='xx'
            width='2.5rem'
          >
            <img src={cardWaterTemp} alt='Water temperature' />
          </NumberInput>
        </FormGroup>
        <FormGroup backgroundcolor='var(--background-card-buddy)'>
          <TextInput
            onTextInputChange={handleChange}
            name='buddy'
            value={log.buddy}
            placeholder='Name'
            width='14rem'
          >
            <img src={cardBuddy} alt='Buddy' />
          </TextInput>
        </FormGroup>
        <FormGroup backgroundcolor='var(--background-card-notes)'>
          <TextInput
            onTextInputChange={handleChange}
            name='notes'
            value={log.notes}
            placeholder='Enter your nodes here...'
            width='14rem'
          >
            Notes
          </TextInput>
        </FormGroup>
        {saveInfo && (
          <SaveInfoBox>Your log has been saved</SaveInfoBox>
        )}
        <button>Add Dive</button>
        <button
          type='reset'
          onClick={() => {
            setLog(resetLog);
          }}
        >
          Reset
        </button>
      </form>
    </>

  );
}

export default Form;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 5vh;
  border: 1px solid black;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) =>
    props.backgroundcolor || 'white'}; ;
`;

const SaveInfoBox = styled.div`
  border: 2px solid white;
  border-radius: 15px;
  max-width: 80%;
  padding: 0.5rem;
  margin: 0 auto;
  color: black;
  background: linear-gradient(
    0deg,
    rgba(40, 177, 31, 1) 0%,
    rgba(28, 70, 16, 0) 100%
  );
`;

