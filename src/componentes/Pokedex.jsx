import {useState, useEffect } from "react"

export default function Pokedex(){

const [id, setId] = useState(1);
const [pokemon, setPokemon] = useState(null);

const fetchData = async () =>{
    try{
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
    }
catch(error){
    console.log("Erro", error)
}
}

useEffect (() => {
    fetchData();
}, [id]
)

const nextPokemon = () =>{
    setId(id + 1);
}

const backPokemon = () =>{
    setId(id - 1);
}

return(
    <div className="pokedex">
        
        {pokemon &&(
            <div className="poke">
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>

           <div className="poke_"> 
           <button onClick={backPokemon}>Anterior</button>
            <button onClick={nextPokemon}>Próximo</button>
            </div>
        </div>
        )
        }
    </div>
)

}