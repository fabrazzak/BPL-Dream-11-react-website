import React from 'react';
import user from "../../assets/user 1.png"
import vector from "../../assets/Vector.png"


const Player = ({ player, choosePlayer }) => {
    const { playerId, name, country, image, role, battingType, biddingPrice, bowlingType }= player;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
                <img className='w-full h-72'
                    src={image}
                    alt="player" />
            </figure>
            <div className=" p-5">
                <h2 className="card-title pb-2 "> <img className='w-6' src={user} alt="" />{name}</h2>
                <div className='flex justify-between'>
                    <p className='flex gap-5'> <img className='w-5 h-5' src={vector} alt="" />{country} </p>
                    <button className='btn '>{role}</button>
                </div>
                <div className="divider"></div>
                
                <div className='flex flex-col gap-4'>
                    <h3 className='font-bold text-xl'>Rating</h3>
                    <div className='flex justify-between'>
                        <p className='font-bold'>{battingType}</p>

                        <p className='font-bold'> {bowlingType}</p>
                    </div>
                    <div className='flex justify-between '>
                        <p className='font-bold'>Price:{biddingPrice}</p>
                        <p ><button onClick={() => choosePlayer(biddingPrice,playerId)} className='btn '>Choose Player</button></p>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default Player;