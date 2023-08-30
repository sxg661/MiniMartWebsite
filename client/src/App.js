import './css/App.css';
import MainPage from './react/pages/MainPage';
import callAPI from './api_calls/testAPI';

function App() {

  callAPI(console.log);
  
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
