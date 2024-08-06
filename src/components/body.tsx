    import React, { useState } from 'react';
    import axios from 'axios';
    import Card from './card';

    interface Pokemon {
        name: string;
        url: string;
    }

    const Body: React.FC = () => {
        const [pokemons, setPokemons] = useState<Pokemon[]>([]);
        const [inputValue, setInputValue] = useState<string>('15');

        const fetchPokemons = async (limit: number) => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`);
                setPokemons(response.data.results);
            } catch (error) {
                console.error('Error', error);
            }
        };

        const handleFetch = () => {
            const numberOfPokemons = parseInt(inputValue, 10);
            if (numberOfPokemons > 0) {
                fetchPokemons(numberOfPokemons);
            }
        };

        return (
            <div className="body">  
                <div className="controls">
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Pokémon a mostrar"
                    />
                    <button onClick={handleFetch}>Cargar Pokémon</button>
                </div>
                <div className="pokemons">
                    {pokemons.map(pokemon => (
                        <Card key={pokemon.url} name={pokemon.name} />
                    ))}
                </div>
            </div>
        );
    };

    export default Body;
