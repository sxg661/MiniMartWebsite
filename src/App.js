import './css/App.css';
import MainPage from './react/pages/MainPage';
import SinglePostPage from './react/pages/SinglePostPage';
import React from 'react';
import { HashRouter , Route, Routes } from 'react-router-dom';
import ErrorPage from './react/pages/ErrorPage';

function App() {

  return (
    <div className="page-container page-container--dark-mode">
	    <div className="main-container">

		    <div className="title-container">
			    <h1 className="title">Mini Mart</h1>
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
