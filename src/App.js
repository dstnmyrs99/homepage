import Page from "./Page";
import "./App.css";
import Weather from './Weather';


   
  function App() {
  return (
    <div className="App">
      <Weather />
      <div className="container">
        <Page site='espn' seconds={0}/>
        <Page site='mma' seconds={0}/>
        <Page site='nfl' seconds={1}/>
        <Page site='reddit' seconds={1}/>
        <Page site='nba' seconds={2}/>
        <Page site='news' seconds={2}/>
      </div>
    </div>
  );
}

export default App;
