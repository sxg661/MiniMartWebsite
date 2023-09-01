import './css/App.css';
import MainPage from './react/pages/MainPage';
import callAPI from './api/apiTest';
import React, { useState } from 'react';

function App() {
  const [apiResult, setApiResult] = useState("none");
  
  callAPI((responseString) => {
    setApiResult(responseString)
  });

  return (
    <div className="App">
      <p>{ apiResult }</p>
      <MainPage/>
    </div>
  );
}

export default App;
