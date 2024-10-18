import React, { useState, useEffect } from 'react';
import { getGames } from '../../asyncMock'; // Asegúrate de importar correctamente tu función

export default function GameList() {
    // Estado local para almacenar los juegos
    const [games, setGames] = useState([]);

    // useEffect para llamar a getGames cuando se monte el componente
    useEffect(() => {
        getGames
            .then((data) => {
                setGames(data); // Guarda los juegos en el estado
            })
            .catch((error) => {
                console.error("Error fetching games:", error);
            });
    }, []);

    return (
        <div className='gameslistcontainer'>
            <div className='gk-gap3'></div>
            <h1>Game List</h1>
            <div className='container'>
                {games.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    games.map((game) => (
                        <div className='games-cards' key={game.id}>
                            <img src={game.img} alt={game.tittle} width="300" />
                            <h2>{game.tittle}</h2>
                            <p>{game.description}</p>
                            <button>android</button>
                            <button>apple</button>
                        </div>
                        
                    ))
                )}
            </div>
        </div>
    );
}
