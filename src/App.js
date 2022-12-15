import Card from "./components/Card";
import Nav from "./components/NavBar";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Gerenciar from "./Pages/Gerenciar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gerenciar" element={<Gerenciar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
