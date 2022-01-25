import { CSVLink } from 'react-csv';
import styled from 'styled-components';
import CardContainer from './card/CardContainer';

function Export({ logs }) {
  const exportLogs = logs.map(
    ({ signature, id, _id, __v, ...keepRest }) => keepRest
  );

  const exportData = () => {
    const exportString = JSON.stringify(exportLogs);
    const data = new Blob([exportString], {
      type: 'text/csv',
    });
    const csvURL = window.URL.createObjectURL(data);
    window.open(csvURL);
  };

  return (
    <>
      <CardContainer>
        <Grid>
          <div className='text'>Export!</div>
          <div className='button'>
            <button onClick={() => exportData()}>CLICK!</button>
          </div>

          <div>
            <CSVLink data={exportLogs}>
              CSV Download by React-CSV
            </CSVLink>
          </div>
        </Grid>
      </CardContainer>
    </>
  );
}

export default Export;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  margin: 0 0 10px 5px;

  .text {
    grid-area: 1 / 1 / 2 / 2;
    text-align: left;
  }
  .button {
    grid-area: 1 / 2 / 2 / 3;
    button {
      width: 40%;
      padding: 10px;
      margin: 5px 5px 10px 5px;
      border: 0;
      border-radius: 15px;
      color: white;
      font-size: 1.4rem;
      background-color: red;
    }
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
