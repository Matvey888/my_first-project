// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Technologies from './Technologies.js';
import Footer from './Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <Footer />
      <p className="main-title">Simple HTml</p>
      <ul>
        <li className="some-class">this one position</li>
      </ul>
    </div>
  );
}



export default App;
