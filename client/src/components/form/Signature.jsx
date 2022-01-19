import React, { useState, useRef } from 'react';
import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';
import SignaturePad from 'react-signature-pad-wrapper';
import './sigCanvas.css';

function Signature() {
  return (
    <>
      <h3>Signature Pad</h3>
      <Popup
        modal
        trigger={<a>Open Pad</a>}
        closeOnDocumentClick={false}
      >
        <SignaturePad
          canvasProps={{
            className: 'signatureCanvas',
          }}
        />
      </Popup>
    </>
  );
}
export default Signature;
