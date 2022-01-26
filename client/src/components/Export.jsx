import styled from 'styled-components';
import CardContainer from './card/CardContainer';

function Export() {
  return (
    <>
      <CardContainer>
        <Grid>
          <div className='text'>Export your Logs</div>
          <div className='link-export'>
            <a href='/api/export' target='_blank'>

              Download CSV

            </a>
          </div>
        </Grid>
      </CardContainer>
    </>
  );
}

export default Export;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);

  margin: 0 0 10px 5px;
  text-align: left;

  .text {
    grid-area: 1 / 1 / 2 / 2;
  }
  .link-export {
    grid-area: 2 / 1 / 3 / 2;

    text-align: center;

    a {
      display: inline-block;
      padding: 10px;
      margin: 10px 5px 10px 0px;
      border: 0;
      border-radius: 15px;
      color: white;
      font-size: 1rem;
      background-color: green;
      text-decoration: none;
    }
  }
`;
