import './App.css';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import FormularioEnsayo from "./components/FormularioEnsayo";
import FormularioEnsayo2 from "./components/FormularioEnsayo2";
import ListadoPreguntas from './components/ListadoPreguntas';
import Index from "./components/Index"

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          
          <Route path='/' exact element={<Index />}></Route>
          <Route path='/listadoPreguntas' element={<ListadoPreguntas />}></Route>
          <Route path='/formularioEnsayo' element={<FormularioEnsayo />}></Route>
          <Route path='/formularioEnsayo2' element={<FormularioEnsayo2 />}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
