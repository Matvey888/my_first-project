// import logo from './logo.svg';
import Header from './header.js';
import {Tehnologies, Foon } from './tehnologies.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Tehnologies />
      <Foon />
      <p className="main-title">Simple HTml</p>
      <ul>
        <li className="some-class">this one position</li>
      </ul>
    </div>
  );
}


// export Header;

export default App;
