import './css/App.css';
import MainPage from './react/pages/MainPage';
import ErrorPage from './react/pages/ErrorPage';
import SinglePostPage from './react/pages/SinglePostPage';
import React from 'react';
import PostContext from './contexts/PostContext';

function App() {

  function PageToShow() {
    const pagePath = window.location.pathname.toLowerCase();

    if(pagePath === "/") {
      return <MainPage/>
    }
    
    if(pagePath.includes("/post")){
      var postId = pagePath.replace("/post", "").replace("/", "");
      return(
        <PostContext.Provider value = {{id: postId}}>
          <SinglePostPage/>
        </PostContext.Provider>
      )
    }

    return <ErrorPage/>
  }

  return (
    <div className="App">
      {PageToShow()}
    </div>
  );
}

export default App;
