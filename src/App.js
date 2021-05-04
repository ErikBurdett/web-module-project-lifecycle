
import './App.css';
import axios from "axios";
import User from "./components/User";
import Followers from "./components/Followers";


function App() {
  return (
    <div className="App">
      <h1 className="title">Github User Card</h1>
      <div className="userCard">
      <User/>
      </div>
      <Followers/>
    </div>
  );
}

export default App;
