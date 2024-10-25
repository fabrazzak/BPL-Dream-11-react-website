import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Selectedplayer from '../SelectedPlayer/SelectedPlayer';

const Players = ({ choosePlayer, addPlayers, setAddPlayer  }) => {
    const [players, setPlayer] = useState([]);
    const [selectPlayers, setSelectPlayer] = useState([]);
    const [playersHandle, setPlayersHandle] = useState(true)


    useEffect(() => {
        fetch("/players.json")
            .then(res => res.json())
            .then(data => setPlayer(data))
    }, [])
    const playersHandleBtn = (value) => {

        setPlayersHandle(value)

      
            const foundPlayer = players.filter(player => addPlayers.includes(player.playerId))
            setSelectPlayer(foundPlayer)      

     

    }
 
     
    const deletePlayerHandle = (id) => {

        const exitPlayer = selectPlayers.filter(player => player.playerId !== id)
        setSelectPlayer(exitPlayer)
        const foundPlayer = addPlayers.filter(playerId => playerId !== id)
        setAddPlayer(foundPlayer)
    

    }


    return (
        <div className='mb-20 container mx-auto '>

            <div className='flex justify-between mx-5 my-10'>
                <h2 className='text-xl font-bold'>{playersHandle ? "Available Players": `Selected Players (${addPlayers.length}/6)`}  </h2>
                <div className="join">
                    <button onClick={() => playersHandleBtn(true)} className='btn join-item bg-[#E7FE29]'>Available</button>
                    <button onClick={() => playersHandleBtn(false)} className="btn join-item"> Selected  ({addPlayers.length}) </button>
                </div> 
            </div>

            {playersHandle ?

                <div div className='grid md:grid-cols-3 gap-10 mx-5'>
                    {players.map(player => <Player choosePlayer={choosePlayer} player={player} key={player.playerId}></Player>)}
                </div>

                :

                <div className='mx-5'>
                 {
                        selectPlayers.map(player => <Selectedplayer deletePlayerHandle={deletePlayerHandle} key={player.playerId} player={player}> </Selectedplayer> )
                 }
                 
                    <button onClick={() => playersHandleBtn(true)} className='btn join-item bg-[#E7FE29]'>Add More Player</button>
                </div>

            }
















        </div>
    );
};

export default Players;