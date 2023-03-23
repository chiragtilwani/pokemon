import React,{Component} from 'react';
import './Pokecard.css';
let padToThree=(num)=>num<1000? `00${num}`.slice(-3):`num`;
// padToThree function appn issilie bana rhe kuki jo link hum pokemon k imgs ke lie use kr rhe usko chaiye pokemons ki id three digits mai ex: agr pokemon ki id 11 hai to uss link ko apnko 0011 bhejna hoga agr pokemon ki id 4 hai tou apnko 004 bhjna hoga 
//or slice() will return sliced string to slice ko -3 de rhe to last se 3 digit return krega to agr id 4 hai to padToThree usko 004 bna dega or slice(-3) 3 digits mtlb 004 return kr dega or agr id 11 hai to padToThree usko 0011 bna dega or slice(-3) last ke 3 digits mtlb 011 return kr dega
class Pokecard extends Component {
    render() {
        const {pokname,id,type,exp} = this.props;
        let imgUrl=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(id)}.png`
        return (
            <div className="Pokecard">
                <h3 className="Pokecard-name">{pokname}</h3>
                <div className="Pokecard-img">
                <img  src={imgUrl} alt="Pokemon"/>
                </div>
                <div className="Pokecard-type-exp">
                    <ul className="Pokecard-list">
                        <li>Type : {type}</li>
                        <li>Exp : {exp}</li>
                    </ul>
                </div>
            </div>   
        )
    }
}

export default Pokecard;