import Nav from  "./HomeScreen/Nav";
import Banner from "./HomeScreen/Banner";
import TopRated from "./HomeScreen/TopRated";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Banner />
        <TopRated />
      </header>
    </div>
  );
}

export default App;
