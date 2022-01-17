import { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  const dummy = {
    id: 3,
    date: '2020-09-20',
    time: '06:00',
    duration: '50',
    country: 'Germany',
    spot: 'Hemmoor',
    airStart: '210',
    airEnd: '45',
    airEan: '21',
    waterDepthMax: '41.5',
    waterDepthAvg: '25.4',
    waterTemp: '6',
    notes:
      'Yeah, German seas are very cold! I would recommend a dry suit next time!',
    buddy: 'Heinz',
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

  const [log, setLog] = useState(resetLog);
  const [saveInfo, setSaveInfo] = useState(false);

  useEffect(() => {
    if (!saveInfo) return;

    const saveTimer = setTimeout(() => {
      setSaveInfo(false);
    }, 3000);

    return () => {
      clearTimeout(saveTimer);
    };
  }, [saveInfo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddLog(log);
    saveInfoToggle();
  };

  const saveInfoToggle = () => {
    setSaveInfo(true);
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
          <InputField
            onTextInputChange={handleChange}
            name='time'
            type='time'
            value={log.time}
            placeholder=''
            errorMessage='Please enter a valid time'
            required={true}
            pattern='([01]?[0-9]|2[0-3]):[0-5][0-9]'
          >
            <img src={cardTime} alt='Time' />
          </InputField>
          <InputField
            onTextInputChange={handleChange}
            name='duration'
            type='text'
            value={log.duration}
            placeholder='45'
            errorMessage='Please enter the length of your dive [Numbers only]'
            required={true}
            pattern='[-+]?[0-9]*[.,]?[0-9]+'
          >
            <img src={cardDuration} alt='Duration' />
          </InputField>
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
          >
            <img src={cardCountry} alt='Country' />
          </InputField>
          <InputField
            onTextInputChange={handleChange}
            name='spot'
            type='text'
            value={log.spot}
            placeholder='Dive site'
            errorMessage='Please enter the dive site'
            required={false}
          >
            <img src={cardSpot} alt='Spot' />
          </InputField>
        </FormGroup>
        <FormGroup backgroundcolor='var(--background-card-air)'>
          <InputField
            onTextInputChange={handleChange}
            name='airStart'
            type='text'
            value={log.airStart}
            placeholder='200'
            errorMessage='Please enter the amount of Air on start [Numbers only]'
            required={false}
            pattern='[-+]?[0-9]*[.,]?[0-9]+'
          >
            <img src={cardAir} alt='Air Start' />
            start
          </InputField>
          <InputField
            onTextInputChange={handleChange}
            name='airEnd'
            type='text'
            value={log.airEnd}
            placeholder='50'
            errorMessage='Please enter the amount of Air on end [Numbers only]'
            required={false}
            pattern='[-+]?[0-9]*[.,]?[0-9]+'
          >
            <img src={cardAir} alt='Air End' />
            end
          </InputField>
          <InputField
            onTextInputChange={handleChange}
            name='airEan'
            type='text'
            value={log.airEan}
            placeholder='21'
            errorMessage='Please enter the percentage value of Oxigen (o2) [Numbers only]'
            required={false}
            pattern='[-+]?[0-9]*[.,]?[0-9]+'
          >
            <img src={cardAirEan} alt='% o2' />
          </InputField>
        </FormGroup>
        <FormGroup backgroundcolor='var(--background-card-water)'>
          <InputField
            onTextInputChange={handleChange}
            name='waterDepthMax'
            type='text'
            value={log.waterDepthMax}
            placeholder='35'
            errorMessage='Please enter the max dive depth [Numbers only]'
            required={false}
            pattern='[-+]?[0-9]*[.,]?[0-9]+'
          >
            <img src={cardWaterDepth} alt='Max Depth' />
            max
          </InputField>
          <InputField
            onTextInputChange={handleChange}
            name='waterDepthAvg'
            type='text'
            value={log.waterDepthAvg}
            placeholder='20'
            errorMessage='Please enter the average dive depth [Numbers only]'
            required={false}
            pattern='[-+]?[0-9]*[.,]?[0-9]+'
          >
            <img src={cardWaterDepth} alt='Average Depth' />
            avg
          </InputField>
          <InputField
            onTextInputChange={handleChange}
            name='waterTemp'
            type='text'
            value={log.waterTemp}
            placeholder='20'
            errorMessage='Please enter the water temperature [Numbers only]'
            required={false}
            pattern='[-+]?[0-9]*[.,]?[0-9]+'
          >
            <img src={cardWaterTemp} alt='Water temperature' />
          </InputField>
        </FormGroup>
        <FormGroup backgroundcolor='var(--background-card-buddy)'>
          <InputField
            onTextInputChange={handleChange}
            name='buddy'
            type='text'
            value={log.buddy}
            placeholder='Name of your Buddy'
            errorMessage='Please the name of your Buddy'
            required={true}
          >
            <img src={cardBuddy} alt='Buddy' />
          </InputField>
        </FormGroup>
        <FormGroup backgroundcolor='var(--background-card-notes)'>
          <InputField
            onTextInputChange={handleChange}
            name='notes'
            type='text'
            value={log.notes}
            placeholder='Your notes'
            errorMessage='Please enter the notes here'
            required={false}
          >
            Notes
          </InputField>
        </FormGroup>

        <Button backgroundcolor='#0939B6'>Add Dive</Button>
        <Button
          type='reset'
          onClick={() => {
            setLog(resetLog);
          }}
        >
          Reset
        </Button>
        {saveInfo && (
          <SaveInfoBox>Your log has been saved</SaveInfoBox>
        )}
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

const Button = styled.button`
  width: 35%;
  padding: 10px;
  margin: 5px 5px 10px 5px;
  border: 0;
  border-radius: 15px;
  color: white;
  font-size: 1.4rem;
  background-color: ${(props) =>
    props.backgroundcolor || '#707070'}; ;
`;

const SaveInfoBox = styled.div`
  border: 2px solid #096e00;
  border-radius: 15px;
  max-width: 80%;
  padding: 0.5rem;
  margin: 0 auto;
  color: #096e00; ;
`;
