import './App.css';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import FormularioEnsayo from "./components/FormularioEnsayo";
import Index from "./components/Index"

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          
          <Route path='/' exact element={<Index />}></Route>
          <Route path='/formularioEnsayo' element={<FormularioEnsayo />}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
