import React,{Component} from 'react'
import Pokedex from './Pokedex'
import './Pokegame.css';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }
    
    render() {
      const hand1=[];
      const hand2=[...this.props.pokemon]
      while(hand1.length!==hand2.length){
          let randIndex=Math.floor(0+(0-hand2.length)*Math.random())
          let randElement=hand2.splice(randIndex,1)[0];//splice(ind,no_of_ele) given 'ind' index se  'no_of_ele'  elemetns remove kr deta hai or removed element return kr deta hai array ke form mai or akhri mai [0] lgaya qki apn loop chla rhe hai or hr br slice ek removed element ka array return kr de rha hai or uss ek element ke array ko hand1 mai push kr rha pr apn chate hai ek element ka array hand1 mai na push ho bs vo element push ho to uske lie [0] lagya 
          hand1.push(randElement)
        }
          let exp1=hand1.reduce((sum,pokemon)=>sum+pokemon.base_experience,0 )//refer page no. 70 of first copy of webdev
          let exp2=hand2.reduce((sum,pokemon)=>sum+pokemon.base_experience,0 )
          let msg1;
          let msg2;
          if(exp1>exp2){
              msg1="Winner";
              msg2="Loser"
            }else{
                msg2="Winner";
                msg1="Loser"
          }
        return (
            <div>
                <h2  className={msg1}>{msg1}</h2>
                <h5 className="Pokegame-h5">Total EXP - {exp1}</h5>
                <Pokedex pokemon={hand1} exp={exp1}/>
                <h2 className={msg2}>{msg2}</h2>
                <h5 className="Pokegame-h5">Total EXP - {exp2}</h5>
                <Pokedex pokemon={hand2} exp={exp2}/>
            </div>
        )
    }
}

export default Pokegame;