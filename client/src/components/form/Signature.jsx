import { useState, useRef } from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import SignaturePad from 'react-signature-pad-wrapper';
import './sigCanvas.css';

function Signature({
  onhandleSignatureData,
  signatureGraphic,
  buttonName,
}) {
  const [imageURL, setImageURL] = useState(
    signatureGraphic ?? ''
  );

  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();

  const save = () => {
    setImageURL(sigCanvas.current.toDataURL('image/png'));
    onhandleSignatureData(
      sigCanvas.current.toDataURL('image/png')
    );
  };

  return (
    <div className='App'>
      <Popup
        modal
        trigger={<FakeButton>{buttonName}</FakeButton>}
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
