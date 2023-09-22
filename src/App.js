import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//Importar componentes
import NavBar from './components/Navbar';

import FormularioEnsayo from './components/FormularioEnsayo';
import Index from './components/Index';

//import Footer from './components/Footer';


function App() {
  return (

    <div>
      <Router>
          <NavBar/>            
            <Routes>
              <Route path='/' exact element = {<Index/>}></Route>
              <Route path='/formularioEnsayo' element = {<FormularioEnsayo/>}></Route>
             
            </Routes>

      </Router>
    </div>
  );
}

export default App;
