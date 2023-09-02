import './css/App.css';
import MainPage from './react/pages/MainPage';
import SinglePostPage from './react/pages/SinglePostPage';
import PostContext from './contexts/PostContext';
import React from 'react';
import { HashRouter , Route, Routes } from 'react-router-dom';
import ErrorPage from './react/pages/ErrorPage';

function App() {

  function PostComponent() {
    return (
      <PostContext.Provider value = {{id: "temp"}}>
        <SinglePostPage/>
      </PostContext.Provider>)
  }

  return (
    <div className="App">
      <HashRouter >
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route exact path="/post" element={PostComponent()} />
          <Route exact path="/*" element={<ErrorPage/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
