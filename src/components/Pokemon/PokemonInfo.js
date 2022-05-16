import { Component } from 'react';
import Axios from 'axios';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';


const pokemonTypes = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};


 class PokemonInfo extends Component {
    state = {
        name: '',
        Index: '',
        imageUrl: '',
        types: [],
        statTitleWidth: 3,
        statBarWidth: 9,
        stats: {
          hp: '',
          attack: '',
          defense: '',
          speed: '',
          specialAttack: '',
          specialDefense: ''
        },
        height: '',
        weight: '',
        eggGroups: '',
        captureRate: '',
        abilities: '',
        genderRatioMale: '',
        genderRatioFemale: '',
    }
    

    
    //This method is available after the component has mounted. That is after the HTML from render has finished loading
    async componentDidMount(){
        const { Index } = this.props.params; {/*app.js react router index is accessible due to :index being passed*/}
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${Index}`;
        const pokemonSpecies = `https://pokeapi.co/api/v2/pokemon-species/${Index}`;
        const res = await Axios.get(pokemonUrl);
        const res2 = await Axios.get(pokemonSpecies);
        var name = res.data.name;
        switch ( Index ){
            case '29':
                name = 'nidoran_f';
                break;
            case '32':
                name = 'nidoran_m';
                break;
             case '122':
                name = 'mr.mime';
                break;
            case '386':
                name = 'deoxys';
                break;
            case '413':
                name = 'wormadam';
                break;
            case '439':
                name = 'mime_jr';
                break;
            case '487':
                name = 'giratina';
                break;
            case '492':
                name = 'shaymin';
                break;
            case '550':
                name = 'basculin';
                break;
            case '555':
                name = 'darmanitan';
                break;
        }
        const imageUrl = `https://projectpokemon.org/images/normal-sprite/${name}.gif`;
        const types = res.data.types.map((e) => e.type.name);
        let { hp, attack, defense, speed, specialAttack, specialDefense } = '';
        res.data.stats.map((e) => {
    	    switch (e.stat.name){
        	case 'hp':
            	hp = e['base_stat'];
           	    break;
           	case 'attack':
                attack = e['base_stat'];
           	    break;
        	case 'defense':
            	defense = e['base_stat'];
           	    break;
           	case 'speed':
                speed = e['base_stat'];
           	    break;
        	case 'special-attack':
            	specialAttack = e['base_stat'];
           	    break;
           	case 'special-defense':
                specialDefense = e['base_stat'];
           	    break;
            default:
        }
        });
        const weight = res.data.weight;
        const height = res.data.height;
        const captureRate = res2.data.capture_rate;
        const genderRatioFemale = (res2.data.gender_rate)/8 * 100;
        const genderRatioMale = 100 - genderRatioFemale;
        const abilities = res.data.abilities.map((e)=>{
           return e.ability.name; 
        });
        const eggGroups = res2.data.egg_groups.map((e) =>{
            return e.name;
        });
        this.setState({
            name,
            Index,
            types,
            stats:{
                hp, attack, defense, speed, specialAttack, specialDefense
            },
            abilities,
            height,
            weight,
            imageUrl,
            captureRate,
            eggGroups,
            genderRatioFemale,
            genderRatioMale,
        });
    }

    render(){
    return(<div>
            <Container style={{paddingBottom: '30vh'}}>
                <div className="card">
                    <div className='card-header'>
                        <Row>
                            <Col>
                                <span>{this.state.Index}</span>
                            </Col>
                            <Col>
                                {this.state.types.map((e)=>{
                                    return <span className='badge mx-2' style={{color: 'white', background:`#${pokemonTypes[e]}`  , borderRadius: '20px', float:'right'}}>{e}</span>;
                                })}
                            </Col>
                        </Row>
                    </div>
                    <div className='card-body mt-5'>
                    {/*I wrapped this section in a row, making the h4 elements from top to bottom*/}
                        <Row>
                            <div className='col-md-3 d-inline-block d-flex align-items-center justify-content-center'>
                              <img class="card-img-top mx-5" src={this.state.imageUrl} style={{height: '10rem', width:'10rem'}} alt="Card image cap"/>
                            </div>
                            <div className='col-md-9 d-inline-block' >
                                <h3>{this.state.name}</h3>
                                <div>
                                    <span>Hp:</span>
                                    <ProgressBar animated  now={this.state.stats.hp}/>
                                </div>
                                <div>
                                    <span>Attack:</span>
                                    <ProgressBar animated now={this.state.stats.attack}  />
                                </div>
                                <div>
                                    <span>Defense:</span>
                                    <ProgressBar animated now={this.state.stats.defense}  />
                                </div>
                                <div>
                                    <span>Speed:</span>
                                    <ProgressBar animated now={this.state.stats.speed}  />
                                </div>
                                <div>
                                    <span>Special Attack:</span>
                                    <ProgressBar animated now={this.state.stats.specialAttack}  />
                                </div>
                                <div>
                                    <span>Special Defense:</span>
                                    <ProgressBar animated now={this.state.stats.specialDefense}  />
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className='mt-5'>
                                <h5 className='text-center'>Profile</h5> 
                                <Row>
                                    <Col md={6}>
                                        <Row>
                                        <Col>
                                            <span style={{float:'right'}}>Height</span>
                                        </Col>
                                        <Col>
                                            <span style={{float:'left'}}>{this.state.height * 10} cm</span>
                                        </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6}>
                                        <Row>
                                        <Col>
                                            <span style={{float:'right'}}>Abilities</span>
                                        </Col>
                                        <Col>
                                        {/*When looping over the state, since its loaded async you need to check if it first exists, then you can map its contents. Also, added a condition to add commas between the elements*/}
                                            {this.state.abilities.length && this.state.abilities.map((e,i,arr) => {return <span>{e}{i!=arr.length-1 ? ', ' : ''}</span>;})}
                                        </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Row>
                                        <Col>
                                            <span style={{float:'right'}}>Weight</span>
                                        </Col>
                                        <Col>
                                            <span style={{float:'left'}}>{this.state.weight / 10} kg</span>
                                        </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6}>
                                        <Row>
                                        <Col>
                                            <span style={{float:'right'}}>Capture Rate</span>
                                        </Col>
                                        <Col>
                                            <span style={{float:'left'}}>{this.state.captureRate}</span>
                                        </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Row>
                                        <Col>
                                            <span style={{float:'right'}}>Egg Groups</span>
                                        </Col>
                                        <Col>
                                            {this.state.eggGroups.length && this.state.eggGroups.map((e,i,arr) => {return <span>{e}{i!=arr.length-1 ? ', ' : ''}</span>;})}
                                        </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6}>
                                        <Row>
                                        <Col>
                                            <span style={{float:'right'}}>Gender Ratio M/F</span>
                                        </Col>
                                        <Col>
                                        <ProgressBar>
                                              <ProgressBar striped label={`${this.state.genderRatioMale}%`} now={this.state.genderRatioMale} key={1} />
                                              <ProgressBar variant="danger" label={`${this.state.genderRatioFemale}%`} now={this.state.genderRatioFemale} key={2} />
                                        </ProgressBar>
                                        </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>);
    }
}

//holy fucking shit. React-router-dom v6 changed a lot of things, and they really want you to use hooks to grab the params from the url.
//Hooks are only used in functional components, so I found a solution online to wrap the hook in a function (useParams)
//then the params is passed as a prop
//componentDidMount is rendered after everything else so it grabs the Index from props.
export default (props) => (
            <PokemonInfo
            {...props}
                params={useParams()}
            />
        );

