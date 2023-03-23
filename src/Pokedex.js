import React,{Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
       
        return (
            <div className="Pokedex">
                {this.props.pokemon.map((p)=>(
                    <Pokecard 
                    id={p.id}
                    pokname={p.name}
                    exp={p.base_experience}
                    type={p.type}
                    />
                ))}
            </div>
        )
    }
}

export default Pokedex;