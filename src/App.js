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
  useParams
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, height:'100vh' }}>
      <Navbar />
        <div className='container'>
        <Routes>
          <Route path="/" element = { <Dashboard/> }/>
          {/*now index is accessible using this.props.params.index, react paramater used in routing*/}
          <Route  path="/pokemon/:Index" element = { <PokemonInfo key={useParams()}/*necessary to remove unique key, so used url as key */  /> }/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;


/*[
  {
    "name": "Params",
    "subHooks": [
      {
        "name": "Context",
        "value": {
          "outlet": null,
          "matches": "[{…}]"
        },
        "subHooks": [],
        "hookSource": {
          "lineNumber": 44825,
          "functionName": "useParams",
          "fileName": "http://localhost:3000/static/js/bundle.js",
          "columnNumber": 56
        }
      }
    ],
    "hookSource": {
      "lineNumber": 1330,
      "columnNumber": 72,
      "fileName": "http://localhost:3000/static/js/bundle.js"
    }
  }
]
*/