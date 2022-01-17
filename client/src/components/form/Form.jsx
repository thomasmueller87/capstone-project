import { useState } from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import NumberInput from './NumberInput';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import InputField from './InputField';
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

  const [log, setLog] = useState(resetLog);
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
          <InputField
            onTextInputChange={handleChange}
            name='date'
            type='date'
            value={log.date}
            placeholder=''
            errorMessage='Please enter a valid date!'
            required={true}
            pattern='(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}'
          >
            <img src={cardDate} alt='Date' />
          </InputField>
          <TimeInput
            onTextInputChange={handleChange}
            name='time'
            value={log.time}
            width='5rem'
          >
            <img src={cardTime} alt='Time' />
          </TimeInput>
          <NumberInput
            name='duration'
            value={log.duration}
            onNumberInputChange={handleChange}
            placeholder='35'
            width='2rem'
          >
            <img src={cardDuration} alt='Duration' />
          </NumberInput>
        </FormGroup>
        <FormGroup backgroundcolor='var(--background-card-place)'>
          <InputField
            onTextInputChange={handleChange}
            name='country'
            type='text'
            value={log.country}
            placeholder='Country'
            errorMessage='Please enter a Country'
            required={true}
            pattern='[A-Za-z]{2,99}'
          >
            <img src={cardCountry} alt='Country' />
          </InputField>
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
            placeholder='200'
            width='2.5rem'
          >
            <img src={cardAir} alt='Air Start' />
            start
          </NumberInput>
          <NumberInput
            name='airEnd'
            value={log.airEnd}
            onNumberInputChange={handleChange}
            placeholder='50'
            width='2.5rem'
          >
            <img src={cardAir} alt='Air End' />
            end
          </NumberInput>
          <NumberInput
            name='airEan'
            value={log.airEan}
            onNumberInputChange={handleChange}
            placeholder='32'
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
            placeholder='32'
            width='2.5rem'
          >
            <img src={cardWaterDepth} alt='Max Depth' />
            max
          </NumberInput>
          <NumberInput
            name='waterDepthAvg'
            value={log.waterDepthAvg}
            onNumberInputChange={handleChange}
            placeholder='20'
            width='2.5rem'
          >
            <img src={cardWaterDepth} alt='Average Depth' />
            avg
          </NumberInput>
          <NumberInput
            name='waterTemp'
            value={log.waterTemp}
            onNumberInputChange={handleChange}
            placeholder='15'
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
            placeholder='Name of your Buddy'
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
  flex-direction: column;
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
