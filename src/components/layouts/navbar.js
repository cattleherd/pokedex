import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component{
render(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <Link to="/" >
                    <a class="navbar-brand">Pokedex</a>            
                </Link>
            </nav>
        </div>
        );
    }
}