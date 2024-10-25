import React from 'react';
import img from '../../assets/newsletter-bg.png'
import bgBtn from '../../assets/bg-btn.png'

const Subscribe = () => {
    return (
        <div className='bg-[#06091A] relative mt-72'>
           <div className=' container  mx-auto'> 
                <div className='w-4/6 mx-auto  z-10 -mt-40  absolute mx-auto left-[5%] right-[5%] ' >
                    <div
                        className=" rounded rounded-2xl border  border-2 "
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',

                        }}>

                        <div className="  text-center py-20">
                            <div className="">
                                <h1 className="mb-5 text-4xl font-bold">Subscribe to our Newsletter</h1>
                                <p className="mb-5">Get the latest updates and news right in your inbox!
                                </p>
                                <div className="join pt-4  ">
                                    <input className="input input-bordered join-item  md:w-96" placeholder="Enter Your Email" />
                                    <button className="btn join-item rounded-r-full " style={{ backgroundImage: `url(${bgBtn})` }}>Subscribe</button>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

                <div className=' h-52 w-100  z-0 '>


                </div>
           </div>
        </div>
    );
};

export default Subscribe;