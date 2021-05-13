// import logo from './logo.svg';
import './App.css';



const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://webstockreview.net/images/sample-png-images-14.png" alt=""/>
      </header>
      <nav className="nav">
        <div>
          <a href="#s">Profile</a>
        </div>
        <div>
          <a href="#s">Messages</a>
        </div>
        <div>
          <a href="#s">News</a>
        </div>
        <div>
          <a href="#s">Music</a>
        </div>
        <div>
          <a href="#s">Settings</a>
        </div>
      </nav>
      <main className="content">

        <div>
        <p>main content</p>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/45tAKd349x1JHCRX7MGm6A/8cddb0b45a440fbffbb1d56f3c7d2440/02-nature_1529923664.jpg?fit=fill&w=480&h=270" alt="" />
        </div>
        <div>
          ava + description
        </div>

        <div>
          Posts
          <div>
            new post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>

      </main>
    </div>
  );
}



export default App;
