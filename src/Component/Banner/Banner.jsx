import React from 'react';

import bannerBg from '../../assets/banner-bg.png'
import bannerImg from '../../assets/banner-main.png'

const Banner = ({ handleCoin }) => {
    return (
        <div className=''>
            <div
                className="hero "
                style={{
                    backgroundImage: `url(${bannerBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",
                    backgroundPosition:"center"
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center md:py-14">
                    <div className=" flex flex-col gap-2 ">
                        <img className='w-62 mx-auto' src={bannerImg} alt="" />
                        <h1 className="mb-5 text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <div > <button onClick={()=>handleCoin()} className="btn bg-[#E7FE29]  border-black border-4 ">Claim Free Credit</button></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;