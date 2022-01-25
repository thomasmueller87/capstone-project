// import { CSVLink } from 'react-csv';

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
      <div>Export!</div>
      <button onClick={() => exportData()}>CLICK!</button>
      {/* <div>
        <CSVLink data={exportLogs}>
          CSV Download by React-CSV
        </CSVLink>
      </div> */}
    </>
  );
}

export default Export;
