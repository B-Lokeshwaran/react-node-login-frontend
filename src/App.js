// import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage.js'
import Login from './components/login.js'
import Register from './components/register.js'
import { BrowserRouter , Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      {/* <Login /> */}
      {/* <Register /> */}

      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/Homepage" element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
