import './css/App.css';
import MainPage from './react/pages/MainPage';
import SinglePostPage from './react/pages/SinglePostPage';
import React, { useState } from 'react';
import { HashRouter , Route, Routes } from 'react-router-dom';
import ErrorPage from './react/pages/ErrorPage';
import NightModeToggle from './react/components/NightModeToggle';
import { format } from 'react-string-format';

function App() {

  //page-container--night-mode
  const [nightModeOn, setNightModeOn] = useState(localStorage.getItem("nightMode") === "true");
  console.log(localStorage.getItem("nightMode"));

  const getNightModeClass = () => nightModeOn ? "page-container--night-mode" : "";

  function ToggleNightMode() {
    localStorage.setItem("nightMode", !nightModeOn);

    setNightModeOn(!nightModeOn);
  }

  return (
    <div className={format("page-container {0}", getNightModeClass())}>
	    <div className="main-container">

        <div className="top-bar-content">
          <div className="title-container">
            <a href="https://minimart.dev"><h1 className="title">Mini Mart</h1></a>
          </div>

          <NightModeToggle 
            toggleHandler = {ToggleNightMode}
            nightModeOn = {nightModeOn}
            />
        </div>

        <div className="content">
          <HashRouter >
            <Routes>
              <Route exact path="/" element={<MainPage/>} />
              <Route exact path="/post" element={<SinglePostPage/>} />
              <Route exact path="/*" element={<ErrorPage/>} />
            </Routes>
          </HashRouter>
		    </div>

      </div>
    </div>
    
  );
}

export default App;
