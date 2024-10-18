import './GameListContainer.css'
import React, { useState, useEffect } from 'react';
import { getGames } from '../../asyncMock';

export default function GameListContainer() {
    
    const [ games, setGames ] = useState([]);

    useEffect(() => {
        getGames.then((data) => {
            setGames(data)
            console.log(data)
        })
        .catch((error) => {
            console.error("Error fetching games!", error)
        })
    }, [])
    return (
        <div className='gameslistcontainer'>
            <div className='container'>
                <div className='games-cards'>
                    
                </div>
            </div>
        </div>
    );
}




