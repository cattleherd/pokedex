import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component{
render(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <Link to="/" >
                    <span className="navbar-brand">Pokedex</span>            
                </Link>
            </nav>
        </div>
        );
    }
}