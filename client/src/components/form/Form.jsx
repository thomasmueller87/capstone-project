import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardContainer from './CardContainer';
import InputField from './InputField';
import InputTextArea from './InputTextArea';
import Signature from './Signature';
import Map from './Map';
import { loadFromLocalStorage } from '../../lib/localStorage';

function Form({ onAddLog }) {
  const redirect = useNavigate();

  const localStorageSettings =
    loadFromLocalStorage('_diveSettings') ?? '';

  const dateToday = new Date().toISOString().slice(0, 10);
  const timeToday = new Date().toISOString().slice(11, 16);

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

  const settingsLog = {
    id: '',
    date: dateToday,
    time: timeToday,
    duration: '',
    country: localStorageSettings.country ?? '',
    spot: '',
    airStart: '',
    airEnd: '',
    airEan: localStorageSettings.airEan ?? '',
    waterDepthMax: '',
    waterDepthAvg: '',
    waterTemp: '',
    notes: '',
    buddy: localStorageSettings.buddy ?? '',
  };

  const [log, setLog] = useState(settingsLog);

  const [saveInfo, setSaveInfo] = useState(false);

  useEffect(() => {
    if (!saveInfo) return;

    const saveTimer = setTimeout(() => {
      setSaveInfo(false);
      redirect('/logs');
    }, 2000);

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

  const handleSignatureData = (urlData) => {
    setLog({
      ...log,
      signature: urlData,
    });
  };

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setLog({
      ...log,
      [event.target.name]: inputValue,
    });
  };

  return (
    <Center>
      <CardContainer>
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
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21.5 4H19.3334V5.33333H21.3334V20H2.6667V5.33333H4.6667V4H2.50003C2.34419 4.0026 2.19038 4.03588 2.04741 4.09794C1.90443 4.15999 1.77508 4.24961 1.66674 4.36166C1.5584 4.47371 1.47319 4.60601 1.41599 4.751C1.35879 4.89599 1.33071 5.05083 1.33336 5.20667V20.1267C1.33071 20.2825 1.35879 20.4373 1.41599 20.5823C1.47319 20.7273 1.5584 20.8596 1.66674 20.9717C1.77508 21.0837 1.90443 21.1733 2.04741 21.2354C2.19038 21.2974 2.34419 21.3307 2.50003 21.3333H21.5C21.6559 21.3307 21.8097 21.2974 21.9526 21.2354C22.0956 21.1733 22.225 21.0837 22.3333 20.9717C22.4417 20.8596 22.5269 20.7273 22.5841 20.5823C22.6413 20.4373 22.6693 20.2825 22.6667 20.1267V5.20667C22.6693 5.05083 22.6413 4.89599 22.5841 4.751C22.5269 4.60601 22.4417 4.47371 22.3333 4.36166C22.225 4.24961 22.0956 4.15999 21.9526 4.09794C21.8097 4.03588 21.6559 4.0026 21.5 4V4Z'
                  fill='black'
                />
                <path
                  d='M5.33331 9.33334H6.66665V10.6667H5.33331V9.33334Z'
                  fill='black'
                />
                <path
                  d='M9.33331 9.33334H10.6666V10.6667H9.33331V9.33334Z'
                  fill='black'
                />
                <path
                  d='M13.3333 9.33334H14.6666V10.6667H13.3333V9.33334Z'
                  fill='black'
                />
                <path
                  d='M17.3333 9.33334H18.6666V10.6667H17.3333V9.33334Z'
                  fill='black'
                />
                <path
                  d='M5.33331 12.6667H6.66665V14H5.33331V12.6667Z'
                  fill='black'
                />
                <path
                  d='M9.33331 12.6667H10.6666V14H9.33331V12.6667Z'
                  fill='black'
                />
                <path
                  d='M13.3333 12.6667H14.6666V14H13.3333V12.6667Z'
                  fill='black'
                />
                <path
                  d='M17.3333 12.6667H18.6666V14H17.3333V12.6667Z'
                  fill='black'
                />
                <path
                  d='M5.33331 16H6.66665V17.3333H5.33331V16Z'
                  fill='black'
                />
                <path
                  d='M9.33331 16H10.6666V17.3333H9.33331V16Z'
                  fill='black'
                />
                <path
                  d='M13.3333 16H14.6666V17.3333H13.3333V16Z'
                  fill='black'
                />
                <path
                  d='M17.3333 16H18.6666V17.3333H17.3333V16Z'
                  fill='black'
                />
                <path
                  d='M6.66667 6.66668C6.84348 6.66668 7.01305 6.59644 7.13807 6.47141C7.2631 6.34639 7.33333 6.17682 7.33333 6.00001V2.00001C7.33333 1.8232 7.2631 1.65363 7.13807 1.52861C7.01305 1.40358 6.84348 1.33334 6.66667 1.33334C6.48986 1.33334 6.32029 1.40358 6.19526 1.52861C6.07024 1.65363 6 1.8232 6 2.00001V6.00001C6 6.17682 6.07024 6.34639 6.19526 6.47141C6.32029 6.59644 6.48986 6.66668 6.66667 6.66668Z'
                  fill='black'
                />
                <path
                  d='M17.3334 6.66668C17.5102 6.66668 17.6797 6.59644 17.8048 6.47141C17.9298 6.34639 18 6.17682 18 6.00001V2.00001C18 1.8232 17.9298 1.65363 17.8048 1.52861C17.6797 1.40358 17.5102 1.33334 17.3334 1.33334C17.1565 1.33334 16.987 1.40358 16.8619 1.52861C16.7369 1.65363 16.6667 1.8232 16.6667 2.00001V6.00001C16.6667 6.17682 16.7369 6.34639 16.8619 6.47141C16.987 6.59644 17.1565 6.66668 17.3334 6.66668Z'
                  fill='black'
                />
                <path
                  d='M8.66669 4H15.3334V5.33333H8.66669V4Z'
                  fill='black'
                />
              </svg>
              <p>
                Date of your dive<span>*</span>
              </p>
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
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.7272 4.47656H11.2272V12.8255L16.6466 15.4012L17.2905 14.0464L12.7272 11.8776V4.47656Z'
                  fill='black'
                />
                <path
                  d='M12 0.75C5.78681 0.75 0.75 5.78681 0.75 12C0.75 18.2132 5.78681 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.78681 18.2132 0.75 12 0.75ZM12 21.75C6.61523 21.75 2.25 17.3848 2.25 12C2.25 6.61523 6.61523 2.25 12 2.25C17.3848 2.25 21.75 6.61523 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75Z'
                  fill='black'
                />
              </svg>
              <p>
                Time you started to dive<span>*</span>
              </p>
            </InputField>
            <InputField
              onTextInputChange={handleChange}
              name='duration'
              type='text'
              value={log.duration}
              placeholder='[45]'
              errorMessage='Please enter the length of your dive in minutes [Numbers only]'
              required={true}
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
                  d='M9.75 1.5C9.55109 1.5 9.36032 1.57902 9.21967 1.71967C9.07902 1.86032 9 2.05109 9 2.25C9 2.44891 9.07902 2.63968 9.21967 2.78033C9.36032 2.92098 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 2.92098 14.7803 2.78033C14.921 2.63968 15 2.44891 15 2.25C15 2.05109 14.921 1.86032 14.7803 1.71967C14.6397 1.57902 14.4489 1.5 14.25 1.5H9.75ZM12 8.25C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9V13.5C12.75 13.6989 12.671 13.8897 12.5303 14.0303C12.3897 14.171 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.171 11.4697 14.0303C11.329 13.8897 11.25 13.6989 11.25 13.5V9C11.25 8.80109 11.329 8.61032 11.4697 8.46967C11.6103 8.32902 11.8011 8.25 12 8.25V8.25ZM21 13.5C21 18.4702 16.9702 22.5 12 22.5C7.02975 22.5 3 18.4702 3 13.5C3 8.52975 7.02975 4.5 12 4.5C16.9702 4.5 21 8.52975 21 13.5ZM19.5 13.5C19.5 9.35775 16.1422 6 12 6C7.85775 6 4.5 9.35775 4.5 13.5C4.5 17.6422 7.85775 21 12 21C16.1422 21 19.5 17.6422 19.5 13.5ZM20.031 4.71975C19.9618 4.64812 19.8791 4.59098 19.7876 4.55167C19.696 4.51237 19.5976 4.49168 19.498 4.49081C19.3985 4.48995 19.2997 4.50892 19.2075 4.54663C19.1154 4.58434 19.0316 4.64003 18.9612 4.71045C18.8908 4.78087 18.8351 4.86461 18.7974 4.95678C18.7597 5.04896 18.7407 5.14772 18.7416 5.2473C18.7424 5.34689 18.7631 5.4453 18.8024 5.5368C18.8417 5.62831 18.8989 5.71106 18.9705 5.78025L20.4705 7.28025C20.5402 7.34988 20.6229 7.40511 20.7139 7.44278C20.8049 7.48044 20.9025 7.49981 21.001 7.49978C21.0995 7.49974 21.1971 7.4803 21.2881 7.44257C21.3791 7.40484 21.4617 7.34956 21.5314 7.27988C21.601 7.21019 21.6562 7.12748 21.6939 7.03645C21.7316 6.94542 21.7509 6.84787 21.7509 6.74936C21.7509 6.65085 21.7314 6.55331 21.6937 6.46231C21.656 6.37131 21.6007 6.28863 21.531 6.219L20.031 4.719V4.71975Z'
                  fill='black'
                />
              </svg>
              <p>
                Length of your dive<span>*</span>
              </p>
            </InputField>
          </FormGroup>
          <FormGroup backgroundcolor='var(--background-card-place)'>
            <InputField
              onTextInputChange={handleChange}
              name='country'
              type='text'
              value={log.country}
              placeholder='[Spain]'
              errorMessage='Please enter a Country'
              required={true}
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
              <p>
                Country of your dive<span>*</span>
              </p>
            </InputField>
            <InputField
              onTextInputChange={handleChange}
              name='spot'
              type='text'
              value={log.spot}
              placeholder='[Costa Brava]'
              errorMessage='Please enter the dive site'
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
                  d='M12 13.5C11.2583 13.5 10.5333 13.2801 9.91661 12.868C9.29993 12.456 8.81928 11.8703 8.53545 11.1851C8.25162 10.4998 8.17736 9.74584 8.32206 9.01841C8.46675 8.29098 8.8239 7.6228 9.34835 7.09835C9.8728 6.5739 10.541 6.21675 11.2684 6.07206C11.9958 5.92736 12.7498 6.00162 13.4351 6.28545C14.1203 6.56928 14.706 7.04993 15.118 7.66661C15.5301 8.2833 15.75 9.00832 15.75 9.75C15.7488 10.7442 15.3533 11.6973 14.6503 12.4003C13.9473 13.1033 12.9942 13.4988 12 13.5V13.5ZM12 7.5C11.555 7.5 11.12 7.63196 10.75 7.8792C10.38 8.12643 10.0916 8.47783 9.92127 8.88896C9.75098 9.3001 9.70642 9.7525 9.79323 10.189C9.88005 10.6254 10.0943 11.0263 10.409 11.341C10.7237 11.6557 11.1246 11.87 11.561 11.9568C11.9975 12.0436 12.4499 11.999 12.861 11.8287C13.2722 11.6584 13.6236 11.37 13.8708 11C14.118 10.63 14.25 10.195 14.25 9.75C14.2494 9.15345 14.0122 8.5815 13.5903 8.15967C13.1685 7.73784 12.5966 7.5006 12 7.5V7.5Z'
                  fill='black'
                />
                <path
                  d='M12 22.5L5.67301 15.0383C5.58509 14.9262 5.49809 14.8135 5.41201 14.7C4.33124 13.2763 3.74739 11.5374 3.75001 9.75C3.75001 7.56196 4.6192 5.46354 6.16638 3.91637C7.71355 2.36919 9.81197 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.2526 11.5366 19.669 13.2747 18.5888 14.6978L18.588 14.7C18.588 14.7 18.363 14.9955 18.3293 15.0353L12 22.5ZM6.60901 13.7963C6.61051 13.7963 6.78451 14.0272 6.82426 14.0767L12 20.181L17.1825 14.0685C17.2155 14.0272 17.391 13.7948 17.3918 13.794C18.2746 12.6308 18.7517 11.2103 18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3C10.2098 3 8.49291 3.71116 7.22704 4.97703C5.96117 6.2429 5.25001 7.95979 5.25001 9.75C5.24844 11.2112 5.72609 12.6326 6.60976 13.7963H6.60901Z'
                  fill='black'
                />
              </svg>
              <p>Dive Spot</p>
            </InputField>
            <MapStyle>
              <p>Map</p>
              <Map />
            </MapStyle>
          </FormGroup>

          <FormGroup backgroundcolor='var(--background-card-air)'>
            <InputField
              onTextInputChange={handleChange}
              name='airStart'
              type='text'
              value={log.airStart}
              placeholder='[200]'
              errorMessage='Please enter the amount of Air on start [Numbers only]'
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
              <p>Amount of Air at dive start</p>
            </InputField>
            <InputField
              onTextInputChange={handleChange}
              name='airEnd'
              type='text'
              value={log.airEnd}
              placeholder='[50]'
              errorMessage='Please enter the amount of Air on end [Numbers only]'
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
              <p>Amount of Air at dive end</p>
            </InputField>
            <InputField
              onTextInputChange={handleChange}
              name='airEan'
              type='text'
              value={log.airEan}
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
          </FormGroup>
          <FormGroup backgroundcolor='var(--background-card-water)'>
            <InputField
              onTextInputChange={handleChange}
              name='waterDepthMax'
              type='text'
              value={log.waterDepthMax}
              placeholder='[35]'
              errorMessage='Please enter the max dive depth [Numbers only]'
              required={true}
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
                  d='M7 3V5H17V3H7ZM9 7V9H15V7H9ZM2 7.96V16.04L6.03 12L2 7.96ZM22.03 7.96L18 12L22.03 16.04V7.96ZM7 11V13H17V11H7ZM9 15V17H15V15H9ZM7 19V21H17V19H7Z'
                  fill='black'
                />
              </svg>
              <p>
                Max depth during dive<span>*</span>
              </p>
            </InputField>
            <InputField
              onTextInputChange={handleChange}
              name='waterDepthAvg'
              type='text'
              value={log.waterDepthAvg}
              placeholder='[20]'
              errorMessage='Please enter the average dive depth [Numbers only]'
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
                  d='M7 3V5H17V3H7ZM9 7V9H15V7H9ZM2 7.96V16.04L6.03 12L2 7.96ZM22.03 7.96L18 12L22.03 16.04V7.96ZM7 11V13H17V11H7ZM9 15V17H15V15H9ZM7 19V21H17V19H7Z'
                  fill='black'
                />
              </svg>
              <p>Avg depth during dive</p>
            </InputField>
            <InputField
              onTextInputChange={handleChange}
              name='waterTemp'
              type='text'
              value={log.waterTemp}
              placeholder='[18]'
              errorMessage='Please enter the water temperature [Numbers only]'
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
                  d='M12 7.79999C12.1591 7.79999 12.3118 7.86321 12.4243 7.97573C12.5368 8.08825 12.6 8.24086 12.6 8.39999V14.4756C13.1656 14.6216 13.6585 14.9689 13.9864 15.4524C14.3142 15.9359 14.4545 16.5223 14.3809 17.1018C14.3073 17.6813 14.0249 18.214 13.5866 18.6002C13.1483 18.9863 12.5842 19.1994 12 19.1994C11.4159 19.1994 10.8518 18.9863 10.4135 18.6002C9.97517 18.214 9.69275 17.6813 9.61914 17.1018C9.54554 16.5223 9.68581 15.9359 10.0137 15.4524C10.3415 14.9689 10.8344 14.6216 11.4 14.4756V8.39999C11.4 8.24086 11.4632 8.08825 11.5758 7.97573C11.6883 7.86321 11.8409 7.79999 12 7.79999ZM12 2.39999C11.0452 2.39999 10.1296 2.77928 9.45443 3.45441C8.7793 4.12954 8.40002 5.04521 8.40002 5.99999V13.6248C7.78901 14.3176 7.3909 15.172 7.25345 16.0855C7.116 16.9989 7.24505 17.9327 7.62511 18.7746C8.00518 19.6165 8.62011 20.3309 9.39613 20.832C10.1721 21.3331 11.0763 21.5997 12 21.5997C12.9238 21.5997 13.8279 21.3331 14.6039 20.832C15.3799 20.3309 15.9949 19.6165 16.3749 18.7746C16.755 17.9327 16.884 16.9989 16.7466 16.0855C16.6091 15.172 16.211 14.3176 15.6 13.6248V5.99999C15.6 5.04521 15.2207 4.12954 14.5456 3.45441C13.8705 2.77928 12.9548 2.39999 12 2.39999ZM12 3.59999C12.6365 3.59999 13.247 3.85285 13.6971 4.30294C14.1472 4.75302 14.4 5.36347 14.4 5.99999V14.106L14.5716 14.28C15.0677 14.7864 15.4032 15.4279 15.5361 16.1242C15.6691 16.8205 15.5935 17.5405 15.3189 18.194C15.0442 18.8475 14.5828 19.4054 13.9924 19.7977C13.402 20.19 12.7089 20.3993 12 20.3993C11.2912 20.3993 10.5981 20.19 10.0077 19.7977C9.41725 19.4054 8.9558 18.8475 8.68117 18.194C8.40654 17.5405 8.33095 16.8205 8.46388 16.1242C8.59681 15.4279 8.93235 14.7864 9.42842 14.28L9.60002 14.106V5.99999C9.60002 5.36347 9.85287 4.75302 10.303 4.30294C10.753 3.85285 11.3635 3.59999 12 3.59999Z'
                  fill='black'
                />
              </svg>
              <p>Water Temperature</p>
            </InputField>
          </FormGroup>

          <FormGroup backgroundcolor='var(--background-card-buddy)'>
            <InputField
              onTextInputChange={handleChange}
              name='buddy'
              type='text'
              value={log.buddy}
              placeholder='[ John]'
              errorMessage='Please the name of your Buddy'
              required={true}
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
              <p>
                Name of your Buddy<span>*</span>
              </p>
            </InputField>

            <Signature
              onhandleSignatureData={handleSignatureData}
              buttonName='Add Signature'
            />
          </FormGroup>
          <FormGroup backgroundcolor='var(--background-card-notes)'>
            <InputTextArea
              onTextInputChange={handleChange}
              name='notes'
              type='text'
              value={log.notes}
              placeholder='[e.g. Big fishes, great view]'
              errorMessage='Please enter the notes here'
              required={false}
            >
              <p>Your notes about the dive</p>
            </InputTextArea>
          </FormGroup>
          {saveInfo && (
            <SaveInfoBox>Your log has been saved</SaveInfoBox>
          )}

          <Button backgroundcolor='#0939B6'>Add</Button>
          <Button
            type='reset'
            onClick={() => {
              setLog(resetLog);
            }}
          >
            Reset
          </Button>
        </form>
      </CardContainer>
    </Center>
  );
}

export default Form;

const Center = styled.section`
  margin: 0 auto;
  width: 70%;
`;

const MapStyle = styled.div`
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
`;

const FormGroup = styled.div`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${(props) =>
    props.backgroundcolor || 'white'}; ;
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
  color: #096e00; ;
`;
