import './css/App.css';
import MainPage from './react/pages/MainPage';
import SinglePostPage from './react/pages/SinglePostPage';
import PostContext from './contexts/PostContext';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  function PostComponent() {
    return (
      <PostContext.Provider value = {{id: "temp"}}>
        <SinglePostPage/>
      </PostContext.Provider>)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/post" element={PostComponent()} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
