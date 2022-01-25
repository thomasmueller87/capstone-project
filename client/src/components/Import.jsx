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
    <div>
      <input type='file' onChange={(e) => showFile(e)} />
    </div>
  );
}

export default ImportFileUpload;
