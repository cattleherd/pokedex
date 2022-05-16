import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layouts/navbar.js';
import Dashboard from './components/layouts/Dashboard.js';
import backgroundImage from "./background.png";
import PokemonInfo from './components/Pokemon/PokemonInfo';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar />
        <div className='container'>
        <Routes>
          <Route path="/" element = { <Dashboard/> }/>
          {/*now index is accessible using this.props.params.index, react paramater used in routing*/}
          <Route path="/pokemon/:Index" element = { <PokemonInfo/> }/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
