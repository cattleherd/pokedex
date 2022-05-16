import React, { Component } from 'react'
import Pokedex from '../Pokemon/Pokedex.js'

export default class Dashboard extends Component {
    render(){
        return (
            <div>
                <Pokedex />
            </div>
        )
    }
}