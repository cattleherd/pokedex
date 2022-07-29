import React, { Component } from 'react'
import styled from 'styled-components';
import spinner from './assets/spinner.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



const Gif = styled.img`
    width: 5rem;
    height: 5rem;

`;


const Card = styled.div`
    //added shadow hover effect
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
    }
`;


export default class Pokemon extends Component {
    state = {
        name : '',
        imageLink : '',
        index : '',
        imageLoading: true,
        tooManyRequests: false
    };
    
    //react hook to render images after rest of component has rendered (after first render cycle)
    //useful when there is a lot of image assets to load, will load them async
    componentDidMount(){ 
        const name = this.props.name;
        const index = this.props.url.split('/').at(-2);
        const imageLink = `https://projectpokemon.org/images/normal-sprite/${name}.gif`;
        this.setState ({
            name, imageLink, index
        });
    }
    
    
    render(){
        return (
            <div className="col-md-3 col-sm-6 mb-5">
            <Link style={{color: 'black'}} to={`/pokemon/${this.state.index}`}>
                <Card className='card'>
                    <h5 className='card-header'>{this.state.index}</h5>
                    <Gif className="card-img-top mx-auto mt-2" src={this.state.imageLink}
                        onLoad = {() => this.setState({imageLoading: false})}
                        onError = {()=> this.setState({tooManyRequests: true})}
                        style = {
                        //this is the logic to determine whether to display spinner or the pokemon sprite
                                    this.state.imageLoading || this.state.tooManyRequests ? {display:'none'} : {display: 'block'}
                        }
                    />
                    {this.state.imageLoading || this.state.tooManyRequests ? (<img src={spinner} style={{height:'5rem', width: '5rem', alignSelf: 'center'}}  />) : (null)} {/*spinner which is displayed when image is loading*/}
                <div className='card-body mx-auto'>
                    <h5 className="card-title text-center" >{this.state.name}</h5>
                    {this.state.tooManyRequests ? (
                        <span class="badge rounded-pill bg-danger" style={{ alignSelf: 'center'}}>Too Many Requests</span>
                        ) : (
                        null
                        ) 
                    }
                </div>
            </Card>
        </Link>
        </div>
        )
    }
}