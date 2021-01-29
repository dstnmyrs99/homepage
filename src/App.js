import Page from "./Page";
import "./App.css";
import Weather from './Weather';


   
  function App() {
  return (
    <div className="App">
      <Weather />
      <div className="container">
        <Page site='espn'/>
        <Page site='mma'/>
        <Page site='nfl'/>
        <Page site='reddit'/>
        <Page site='nba'/>
        <Page site='news'/>
      </div>
    </div>
  );
}

export default App;
