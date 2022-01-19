import { useState, useRef } from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';
import SignaturePad from 'react-signature-pad-wrapper';
import './sigCanvas.css';

function Signature({ onhandleSignatureData }) {
  const [imageURL, setImageURL] = useState(''); // create a state that will contain our image url

  const sigCanvas = useRef({});

  /* a function that uses the canvas ref to clear the canvas 
  via a method given by react-signature-canvas */
  const clear = () => sigCanvas.current.clear();

  /* a function that uses the canvas ref to trim the canvas 
  from white spaces via a method given by react-signature-canvas
  then saves it in our state */
  const save = () => {
    setImageURL(sigCanvas.current.toDataURL('image/png'));
    onhandleSignatureData(imageURL);
  };

  return (
    <div className='App'>
      <Popup
        modal
        trigger={<FakeButton>Add Signature</FakeButton>}
        closeOnDocumentClick={false}
      >
        {(close) => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: 'signatureCanvas',
              }}
            />

            <button onClick={save}>Save</button>
            <button onClick={clear}>Clear</button>
            <button onClick={close}>Close</button>
          </>
        )}
      </Popup>

      {imageURL ? (
        <img
          src={imageURL}
          alt='my signature'
          style={{
            display: 'block',
            margin: '0 auto',
            border: '1px solid lightgrey',
            borderRadius: '5px',
            width: '100%',
          }}
        />
      ) : null}
    </div>
  );
}
export default Signature;

const FakeButton = styled.a`
  display: inline-block;
  width: 60%;
  padding: 10px;
  margin: 10px 5px 10px 5px;
  border: 0;
  border-radius: 15px;
  color: white;
  font-size: 1rem;
  background-color: green;
`;
