import styled from 'styled-components';
import CardContainer from './card/CardContainer';
import Popup from 'reactjs-popup';
import './Import.css';

function ImportFileUpload({ onImportLogs }) {
  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;

      onImportLogs(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <CardContainer>
      <Grid>
        <div className='text'>Import your Logs</div>
        <div className='link-import'>
          <Popup
            trigger={<FakeButton>Upload CSV</FakeButton>}
            modal
            nested
          >
            {(close) => (
              <div className='modal'>
                <button className='close' onClick={close}>
                  &times;
                </button>
                <div className='header'> Really Import ? </div>
                <div className='content'>
                  Please note that the current data base will be
                  deleted and replaced by your uploaded data!
                </div>
                <div className='actions'>
                  <label
                    htmlFor='file-upload'
                    className='custom-file-upload'
                  >
                    Upload
                  </label>
                  <input
                    id='file-upload'
                    type='file'
                    onChange={(e) => showFile(e)}
                  />
                  <button
                    className='button btn-cancel'
                    onClick={() => {
                      close();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </Grid>
    </CardContainer>
  );
}

export default ImportFileUpload;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);

  margin: 0 0 10px 5px;
  text-align: left;

  .text {
    grid-area: 1 / 1 / 2 / 2;
  }
  .link-import {
    grid-area: 2 / 1 / 3 / 2;
    input[type='file'] {
      display: none;
    }
  }
`;

const FakeButton = styled.a`
  display: inline-block;
  padding: 10px;
  margin: 10px 5px 10px 0;
  border: 0;
  border-radius: 15px;
  color: white;
  font-size: 1rem;
  background-color: red;
`;
