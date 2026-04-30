import { useState } from "react"
import './style.css'

const pokemonList = [
    { id: 134, nome: "Vaporeon" },
    { id: 758, nome: "Salazzle" },
    { id: 428, nome: "Lopunny" },
    { id: 132, nome: "Ditto" },
    { id: 654, nome: "Braixen" },
    { id: 700, nome: "Sylveon" },
    { id: 282, nome: "Gardevoir" },
    { id: 763, nome: "Tsareena" },
    { id: 815, nome: "Cinderace" },
    { id: 658, nome: "Greninja" },
    { id: 807, nome: "Zeraora" },
    { id: 802, nome: "Marshadow" },
    { id: 97, nome: "Hypno" }
]

console.log(pokemonList);

function Pokemon() {
    const [pokemonGlobal, setPokemonGlobal] = useState(null)

    const getPokemonData = (idPokemon) => {
        const uri = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`

        fetch(uri)
            .then(res => res.json())
            .then(json=>{
                const pokemonFetch = {
                    nome: json.name, 
                    peso: json.weight,
                    vida: json.stats[0].base_stat,
                    tipo: json.types[0].type.name,
                    imagem: json.sprites.other['official-artwork'].front_default
                }
                setPokemonGlobal(pokemonFetch)
                console.log(pokemonFetch)
            })
            .catch(()=>alert('Não foi possivel acessar os dados dos pokémon'))
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Escolha seu pokémon</h1>
            </div>

            {pokemonGlobal && (
                <div className="pokemon-info">
                    <h2>Nome: {pokemonGlobal.nome}</h2>
                    <p>Peso: {pokemonGlobal.peso}</p>
                    <p>Vida: {pokemonGlobal.vida}</p>
                    <p>Tipo: {pokemonGlobal.tipo}</p>

                    <img
                        src={pokemonGlobal.imagem}
                        alt={pokemonGlobal.nome}
                    />
                </div>
            )}

            {pokemonList.map((item) => (
                <div className="card" key={(item.id)}>
                    <p>{item.nome}</p>
                    <button onClick={() => getPokemonData(item.id)}>Saiba mais</button>
                </div>
            ))}
        </div>
    )
}

export default Pokemon