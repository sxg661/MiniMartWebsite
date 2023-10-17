import './css/App.css';
import MainPage from './react/pages/MainPage';
import SinglePostPage from './react/pages/SinglePostPage';
import React from 'react';
import { HashRouter , Route, Routes } from 'react-router-dom';
import ErrorPage from './react/pages/ErrorPage';
import NightModeToggle from './react/components/NightModeToggle';

function App() {

  return (
    <div className="page-container page-container--night-mode">
	    <div className="main-container">

        <div className="top-bar-content">
          <div className="title-container">
            <h1 className="title">Mini Mart</h1>
          </div>

          <NightModeToggle/>
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
