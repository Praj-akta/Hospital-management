
import Login from "./Login/login";
import Home from "./Home/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Register from "./Register/register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
