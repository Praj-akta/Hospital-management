import Login from './login';
import Home from './home';
import { Route,BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}>
           
        </Route>
        <Route path="/login" element={<Login/>}>
            
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
