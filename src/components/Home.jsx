import React from 'react'
import user from "../assets/user (3).png"

function Home() {
    return (
        <React.Fragment>
            <div className="container min-h-screen grid place-items-center">
                <div className='flex justify-center lg:justify-normal lg:flex-row-reverse flex-col relative bg-white/10 backdrop-blur-[10px] rounded-2xl border border-white shadow-[0_8px_32px_0_rgba(31, 38, 135, .37)] w-3/4 lg:w-2/3 h-1/2'>
                    <img src={user} alt="" className='w-1/2 absolute lg:bottom-0 lg:left-0 lg:inline hidden' />
                    <div className='lg:w-1/2 flex flex-col justify-center'>
                        <p className='text-white/50 font-bold text-base text-center lg:text-left'>Website Tugas Akhir</p>
                        <p className='text-white font-bold text-xl text-center lg:text-left'>Pemanfaatan Computer Vision Sebagai Pemantauan Perkembangan Bibit Tanaman Tomat Berbasis IoT</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
