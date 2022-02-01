import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardContainer from '../CardContainer';
import InputField from './InputField';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from '../../lib/localStorage';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function SettingsForm({}) {
  const resetSettings = {
    country: '',
    airEan: '',
    buddy: '',
  };

  const localStorageSettings =
    loadFromLocalStorage('_diveSettings');

  const [settings, setSettings] = useState(
    localStorageSettings ?? []
  );

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

  useEffect(() => {
    saveToLocalStorage('_diveSettings', settings);
  }, [settings]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSettings(settings);
    saveInfoToggle();
  };

  const saveInfoToggle = () => {
    setSaveInfo(true);
  };

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setSettings({
      ...settings,
      [event.target.name]: inputValue,
    });
  };

  return (
    <Center>
      <CardContainer>
        <Title>
          <div className='text'>
            Enter your default settings here{' '}
          </div>
          <div className='info'>
            <Popup
              trigger={
                <a>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='red'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 4C10.4178 4 8.87104 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4V4ZM10.6667 7.43333C10.6667 7.16962 10.7449 6.91184 10.8914 6.69257C11.0379 6.47331 11.2461 6.30241 11.4898 6.20149C11.7334 6.10058 12.0015 6.07417 12.2601 6.12562C12.5188 6.17707 12.7563 6.30405 12.9428 6.49052C13.1293 6.67699 13.2563 6.91457 13.3077 7.17321C13.3592 7.43185 13.3328 7.69994 13.2318 7.94358C13.1309 8.18721 12.96 8.39545 12.7408 8.54196C12.5215 8.68847 12.2637 8.76667 12 8.76667C11.8194 8.77571 11.6388 8.74791 11.4693 8.68497C11.2997 8.62202 11.1448 8.52524 11.0138 8.40052C10.8828 8.27579 10.7786 8.12573 10.7075 7.95946C10.6363 7.79319 10.5998 7.61418 10.6 7.43333H10.6667ZM15.3333 16C15.3333 16.1768 15.2631 16.3464 15.1381 16.4714C15.0131 16.5964 14.8435 16.6667 14.6667 16.6667H10C9.82319 16.6667 9.65362 16.5964 9.5286 16.4714C9.40358 16.3464 9.33334 16.1768 9.33334 16C9.33334 15.8232 9.40358 15.6536 9.5286 15.5286C9.65362 15.4036 9.82319 15.3333 10 15.3333H11.3333V11.3333H10.6667C10.4899 11.3333 10.3203 11.2631 10.1953 11.1381C10.0702 11.013 10 10.8435 10 10.6667C10 10.4899 10.0702 10.3203 10.1953 10.1953C10.3203 10.0702 10.4899 10 10.6667 10H13.3333V15.3333H14.6667C14.8435 15.3333 15.0131 15.4036 15.1381 15.5286C15.2631 15.6536 15.3333 15.8232 15.3333 16Z' />
                  </svg>
                </a>
              }
              position='left top'
            >
              <div>
                <p>
                  If you always dive with the same setup, it
                  might be usefull to declare default values for
                  some fields.
                </p>
                <p>
                  With that, you don't have to enter these data
                  every time when you add a log.
                </p>
              </div>
            </Popup>
          </div>
        </Title>

        <form onSubmit={handleSubmit}>
          <InputField
            onTextInputChange={handleChange}
            name='country'
            type='text'
            value={settings.country}
            placeholder='[Spain]'
            errorMessage='Please enter a Country'
            required={false}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21177C16.9879 3.41142 14.5461 2.39999 12 2.39999C9.45395 2.39999 7.01215 3.41142 5.2118 5.21177C3.41145 7.01212 2.40002 9.45392 2.40002 12C2.40002 14.5461 3.41145 16.9879 5.2118 18.7882C7.01215 20.5886 9.45395 21.6 12 21.6V21.6ZM12 3.59999C12.7884 3.59999 13.6884 4.30799 14.4264 5.88959C14.6868 6.44879 14.9136 7.09199 15.0972 7.79999H8.90282C9.08642 7.09199 9.31322 6.44879 9.57482 5.88959C10.3104 4.30799 11.2104 3.59999 12 3.59999ZM8.48642 5.38199C8.13207 6.15817 7.85747 6.96833 7.66682 7.79999H4.72322C5.73631 6.04904 7.34549 4.72097 9.25682 4.05839C8.96762 4.45439 8.70962 4.90319 8.48642 5.38199ZM7.43042 8.99999C7.27512 9.99241 7.19808 10.9955 7.20002 12C7.20002 13.044 7.28042 14.0544 7.43162 15H4.15202C3.78606 14.0422 3.59896 13.0253 3.60002 12C3.60002 10.944 3.79562 9.93119 4.15202 8.99999H7.43162H7.43042ZM7.66682 16.2C7.87802 17.0916 8.15522 17.9064 8.48642 18.618C8.70962 19.0968 8.96762 19.5456 9.25682 19.9416C7.34549 19.279 5.73631 17.9509 4.72322 16.2H7.66802H7.66682ZM8.90282 16.2H15.0972C14.9319 16.8559 14.707 17.4954 14.4252 18.1104C13.6896 19.692 12.7896 20.4 12 20.4C11.2116 20.4 10.3116 19.692 9.57362 18.1104C9.29273 17.4953 9.06859 16.8559 8.90402 16.2H8.90282ZM15.3528 15H8.64722C8.48047 14.0087 8.39778 13.0052 8.40002 12C8.40002 10.9404 8.48762 9.92999 8.64722 8.99999H15.3528C15.5124 9.92999 15.6 10.9404 15.6 12C15.6 13.0596 15.5124 14.07 15.3528 15ZM16.3332 16.2H19.2768C18.2637 17.9509 16.6546 19.279 14.7432 19.9416C15.0324 19.5456 15.2904 19.0968 15.5136 18.618C15.8448 17.9064 16.122 17.0916 16.3332 16.2V16.2ZM19.8492 15H16.5684C16.7196 14.0544 16.8 13.044 16.8 12C16.8 10.956 16.7196 9.94559 16.5684 8.99999H19.848C20.2044 9.93119 20.4 10.944 20.4 12C20.4 13.056 20.2044 14.0688 19.848 15H19.8492ZM14.7432 4.05839C16.6546 4.72088 18.2638 6.04897 19.2768 7.79999H16.332C16.1414 6.96833 15.8668 6.15818 15.5124 5.38199C15.2988 4.91706 15.0408 4.47381 14.742 4.05839H14.7432Z'
                fill='black'
              />
            </svg>
            <p>Country of your dive</p>
          </InputField>

          <InputField
            onTextInputChange={handleChange}
            name='airEan'
            type='text'
            value={settings.airEan}
            placeholder='[21]'
            errorMessage='Please enter the amount of Oxigen [Numbers only]'
            required={false}
            pattern='[-+]?[0-9]*[.,]?[0-9]+'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 8C9 7.20435 9.31607 6.44129 9.87868 5.87868C10.4413 5.31607 11.2044 5 12 5V5C12.7956 5 13.5587 5.31607 14.1213 5.87868C14.6839 6.44129 15 7.20435 15 8V21.4C15 21.4788 14.9845 21.5568 14.9543 21.6296C14.9242 21.7024 14.88 21.7685 14.8243 21.8243C14.7685 21.88 14.7024 21.9242 14.6296 21.9543C14.5568 21.9845 14.4788 22 14.4 22H9.6C9.52121 22 9.44319 21.9845 9.37039 21.9543C9.29759 21.9242 9.23145 21.88 9.17574 21.8243C9.12002 21.7685 9.07583 21.7024 9.04567 21.6296C9.01552 21.5568 9 21.4788 9 21.4V8Z'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
              <path
                d='M9 11H15'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
              <path
                d='M12 2H13M12 5V2V5ZM12 2H11H12Z'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            </svg>
            <p>Amount of Oxygen in Air-Mix</p>
          </InputField>

          <InputField
            onTextInputChange={handleChange}
            name='buddy'
            type='text'
            value={settings.buddy}
            placeholder='[ John ]'
            errorMessage='Please the name of your Buddy'
            required={false}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 13.999L13 14C13.5046 13.9998 13.9906 14.1904 14.3605 14.5335C14.7305 14.8766 14.9572 15.3468 14.995 15.85L15 16V17.5C14.999 21 11.284 22 8.5 22C5.778 22 2.165 21.044 2.005 17.73L2 17.5V15.999C2 14.945 2.816 14.081 3.85 14.004L4 14V13.999ZM15.22 14H20C21.054 14 21.918 14.816 21.994 15.85L22 16V17C21.999 20.062 19.142 21 17 21C16.2745 21.0017 15.5529 20.8931 14.86 20.678C15.196 20.292 15.467 19.851 15.662 19.351C16.1013 19.4492 16.5499 19.4991 17 19.5L17.267 19.494C18.252 19.451 20.353 19.131 20.493 17.205L20.5 17V16C20.4998 15.883 20.4588 15.7698 20.3839 15.6799C20.309 15.5901 20.205 15.5292 20.09 15.508L20 15.5H15.949C15.8663 15.0105 15.6617 14.5496 15.354 14.16L15.22 14H20H15.22V14ZM4 15.499L3.9 15.509C3.80402 15.529 3.71584 15.5762 3.646 15.645C3.57718 15.7144 3.52994 15.8023 3.51 15.898L3.5 15.999V17.5C3.5 18.509 3.95 19.222 4.917 19.742C5.743 20.187 6.92 20.456 8.183 20.495L8.5 20.5L8.817 20.495C10.08 20.456 11.256 20.187 12.083 19.742C12.989 19.254 13.442 18.597 13.495 17.685L13.5 17.499V16C13.4998 15.883 13.4588 15.7698 13.3839 15.6799C13.309 15.5901 13.205 15.5292 13.09 15.508L13 15.5L4 15.499ZM8.5 3C9.69347 3 10.8381 3.47411 11.682 4.31802C12.5259 5.16193 13 6.30653 13 7.5C13 8.69347 12.5259 9.83807 11.682 10.682C10.8381 11.5259 9.69347 12 8.5 12C7.30653 12 6.16193 11.5259 5.31802 10.682C4.47411 9.83807 4 8.69347 4 7.5C4 6.30653 4.47411 5.16193 5.31802 4.31802C6.16193 3.47411 7.30653 3 8.5 3V3ZM17.5 5C18.4283 5 19.3185 5.36875 19.9749 6.02513C20.6313 6.6815 21 7.57174 21 8.5C21 9.42826 20.6313 10.3185 19.9749 10.9749C19.3185 11.6313 18.4283 12 17.5 12C16.5717 12 15.6815 11.6313 15.0251 10.9749C14.3687 10.3185 14 9.42826 14 8.5C14 7.57174 14.3687 6.6815 15.0251 6.02513C15.6815 5.36875 16.5717 5 17.5 5ZM8.5 4.5C6.846 4.5 5.5 5.846 5.5 7.5C5.5 9.154 6.846 10.5 8.5 10.5C10.154 10.5 11.5 9.154 11.5 7.5C11.5 5.846 10.154 4.5 8.5 4.5ZM17.5 6.5C16.397 6.5 15.5 7.397 15.5 8.5C15.5 9.603 16.397 10.5 17.5 10.5C18.603 10.5 19.5 9.603 19.5 8.5C19.5 7.397 18.603 6.5 17.5 6.5Z'
                fill='black'
              />
            </svg>
            <p>Name of your Buddy</p>
          </InputField>

          {saveInfo && (
            <SaveInfoBox>New defaults saved</SaveInfoBox>
          )}

          <Button backgroundcolor='#0939B6'>Save</Button>
          <Button
            type='reset'
            onClick={() => {
              setSettings(resetSettings);
            }}
          >
            Reset
          </Button>
        </form>
      </CardContainer>
    </Center>
  );
}

export default SettingsForm;

const Center = styled.section`
  margin: 0 auto;
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-template-rows: auto;
  margin: 0 0 10px 5px;

  .text {
    grid-area: 1 / 1 / 2 / 2;
    text-align: left;
  }
  .info {
    grid-area: 1 / 2 / 2 / 3;
  }
`;

const Button = styled.button`
  width: 40%;
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
  max-width: 90%;
  padding: 0.5rem;
  margin: 0 auto;
  margin-top: 5px;
  color: #096e00; ;
`;
