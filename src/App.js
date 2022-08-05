import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layouts/navbar.js';
import backgroundImage from "./background.png";
import PokemonInfo from './components/Pokemon/PokemonInfo';
import Pokedex from './components/Pokemon/Pokedex'

import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, paddingBottom:'100px' }}>
      <Navbar />
        <div className='container'>
        <Routes>
          <Route path="/" element = { <Pokedex/> }/>
          {/*now index is accessible using this.props.params.index, react paramater used in routing*/}
          <Route  path="/pokemon/:Index" element = { <PokemonInfo key={useParams()}/*necessary to remove unique key, so used url as key */  /> }/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
