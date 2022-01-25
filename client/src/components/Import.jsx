import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
      // const importedData = JSON.parse(text);
      // console.log(importedData)
    };
    reader.readAsText(e.target.files[0]);
  };

  render = () => {
    return (
      <div>
        <input type='file' onChange={(e) => this.showFile(e)} />
      </div>
    );
  };
}

export default App;
