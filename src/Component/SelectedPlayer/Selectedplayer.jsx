import React from 'react';
import deleteBtn from '../../assets/delete.png'

const Selectedplayer = ({ player, deletePlayerHandle }) => {
    const { playerId, name, country, image, role, battingType, biddingPrice, bowlingType } = player;
    return (
        <div className='flex justify-between mx-5 my-10 border p-5 rounded-md '>

            <div className='flex gap-5 content-center items-center font-semibold'>
                <img className='w-20 ' src={player.image} alt="" />
                <div><h2 className='text-xl font-bold'>{player.name}</h2>
                    <p>{player.battingType}</p>
                    <p>{player.bowlingType}</p>
                    <p>{player.role}</p>
                </div>
            </div>

            <div>
                <button onClick={()=>deletePlayerHandle(playerId)} className='btn'><img src={deleteBtn} alt="" /></button>

            </div>
        </div>
    );
};

export default Selectedplayer;

