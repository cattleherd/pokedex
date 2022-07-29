import React, { Component } from 'react'
import Pokemon from './Pokemon.js'
import axios from 'axios'
import spinner from './assets/loading.gif'



export default class Pokedex extends Component {
        state = {
            url: 'https://pokeapi.co/api/v2/pokemon?limit=600',
            pokemon: null
        };
    async componentDidMount(){
        const res = await axios.get(this.state.url);
            this.setState({ pokemon: res.data['results'] });
            console.log(res.data.results[29])
        }

    render(){
        return (
            <div>
                {this.state.pokemon ? 
                    (<div class='row'>
                        {this.state.pokemon.map(e => {
                           if(e.name == 'nidoran-f'){
                            return <Pokemon key={e.name} name={'nidoran_f'} url={e.url} />
                           }else if(e.name == 'nidoran-m'){
                            return <Pokemon key={e.name} name={'nidoran_f'} url={e.url} />
                           }else if(e.name == 'nidoran-m'){
                            return <Pokemon key={e.name} name={'nidoran_f'} url={e.url} />
                           }else if(e.name == 'mr-mime'){
                            return <Pokemon key={e.name} name={'mr.mime'} url={e.url} />
                           }else if(e.name == 'deoxys-normal'){
                            return <Pokemon key={e.name} name={'deoxys'} url={e.url} />
                           }else if(e.name == 'wormadam-plant'){
                            return <Pokemon key={e.name} name={'wormadam'} url={e.url} />
                           }else if(e.name == 'mime-jr'){
                            return <Pokemon key={e.name} name={'mime_jr'} url={e.url} />
                           }else if(e.name == 'giratina-altered'){
                            return <Pokemon key={e.name} name={'giratina'} url={e.url} />
                           }else if(e.name == 'shaymin-land'){
                            return <Pokemon key={e.name} name={'shaymin'} url={e.url} />
                           }else if(e.name == 'basculin-red-striped'){
                            return <Pokemon key={e.name} name={'basculin'} url={e.url} />
                           }else if(e.name == 'darmanitan-standard'){
                            return <Pokemon key={e.name} name={'darmanitan'} url={e.url} />
                           }else{
                               return <Pokemon key={e.name} name={e.name} url={e.url} />
                           }
                           })
                           }
                    </div>) 
                    : 
                    (<div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh'}}>
                        <img src={spinner} />
                    </div>) 
                }
            </div>
        );
    }
}