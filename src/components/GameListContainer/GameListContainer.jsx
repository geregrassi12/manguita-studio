import React, { useState, useEffect } from 'react';
import './GameListContainer.css'
import { getGames } from '../../asyncMock'; // Asegúrate de importar correctamente tu función
import { OrbitProgress } from 'react-loading-indicators';
import googleStore from '../../../img/store-google.png';
import appleStore from '../../../img/store-apple.png';


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
                    <OrbitProgress dense color="#aabeff" size="large" text="" textColor="" />
                ) : ( <>
                        <div className='large-game-card'>
                            <img src={games[0].img} alt={games[0].tittle}  />
                            <div className='games-info'>
                                <h2>{games[0].tittle}</h2>
                                <p>{games[0].description}</p>
                                <div className='games-buttons'>
                                    <button>android</button>
                                    <button>apple</button>
                                </div>
                            </div>
                        </div>
                        <div className='small-games-grid'>
                            {games.slice(1).map((game) => (
                                <div className='games-cards' key={game.id}>
                                    <img src={game.img} alt={game.tittle} width="300" />
                                    <div className='games-info'>
                                        <h2>{game.tittle}</h2>
                                        <p>{game.description}</p>
                                        <div className='games-buttons'>
                                            <button>android</button>
                                            <button>apple</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
