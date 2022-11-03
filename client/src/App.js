
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import SignView from './components/SignView';
import AffirmationView from './components/AffirmationView';
import MashupView from './components/MashupView';
import NavBar from "./components/NavBar";


function App() {
 
  
  function Home() {
    return (
      <>
        <main>
        <p className="intro"><i>GUIDANCE STRAIGHT FROM THE STARS</i></p>
          
          <img className="darksky-img" src="https://images.unsplash.com/photo-1517544845501-bb7810f64d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"/>
        </main>
      </>
    );
  }
 

  return (
    
      <div className="App">
      <header className="App-header">
        <NavBar />
        <img src="https://pbs.twimg.com/profile_images/1394800170290843649/eSMhUxwe_400x400.jpg" className="App-logo" alt="logo" />
        <br/>
        <br/>
        <br/>
        <p>- THE ZODIAC HEALER -</p>
        <br/>
        <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/sign" element={<SignView />} />
        < Route path="/affirmations" element={<AffirmationView />} />
        < Route path="/mashup" element={<MashupView />} />
        </Routes>
      </header>
    </div>
  );
}


export default App;
