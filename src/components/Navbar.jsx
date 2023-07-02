import React, { useState } from 'react'
import logo from "../assets/logo.png"

function MobileView({style}){
    return (
        <div className={`gap-x-32 flex-col lg:flex-row md:mx-4 ${style}`}>
            <div className='flex gap-x-8 flex-col lg:flex-row'>
                <a href="" className='text-center text-white font-bold hover:rounded-full hover:backdrop-blur-sm hover:bg-white/20 hover:shadow-[4px_3px_6px_,_-2px_-3px_6px] py-2 '>Home</a>
                <a href="" className='text-center text-white font-bold hover:rounded-full hover:backdrop-blur-sm hover:bg-white/20 hover:shadow-[4px_3px_6px_,_-2px_-3px_6px] py-2 '>About</a>
                <a href="" className='text-center text-white font-bold hover:rounded-full hover:backdrop-blur-sm hover:bg-white/20 hover:shadow-[4px_3px_6px_,_-2px_-3px_6px] py-2 '>Statistics</a>
            </div>
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-base text-white font-bold">Muhammad Ridho Isdi</p>
            </div>
        </div>
    )
}

function Navbar() {
    const [burger, setBurger] = useState(false)
    const handleBurger = () =>{
        burger === false ? setBurger(true) : setBurger(false)
    }
    return (
        <React.Fragment>
            <nav className='flex lg:justify-evenly justify-between mt-4 md:mx-4'>
                <div className='flex items-center'>
                    <img src={logo} alt="" />
                    <p className='text-2xl text-tomato font-bold'>CV<span className='text-base text-white'>Tomato.</span></p>
                </div>
                <div className="lg:flex gap-x-32 flex-col lg:flex-row hidden">
                    <div className='flex gap-x-8 flex-col lg:flex-row'>
                        <a href="" className='text-white font-bold hover:rounded-full hover:backdrop-blur-sm hover:bg-white/20 hover:shadow-[4px_3px_6px_,_-2px_-3px_6px] px-8 py-2 '>Home</a>
                        <a href="" className='text-white font-bold hover:rounded-full hover:backdrop-blur-sm hover:bg-white/20 hover:shadow-[4px_3px_6px_,_-2px_-3px_6px] px-8 py-2 '>About</a>
                        <a href="" className='text-white font-bold hover:rounded-full hover:backdrop-blur-sm hover:bg-white/20 hover:shadow-[4px_3px_6px_,_-2px_-3px_6px] px-8 py-2 '>Statistics</a>
                    </div>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-base text-white font-bold">Muhammad Ridho Isdi</p>
                    </div>
                </div>
                <button type='button' className='lg:hidden' onClick={handleBurger}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </nav>
            { burger? <MobileView style="flex" /> : <MobileView style="hidden" /> }
            
        </React.Fragment>
    )
}

export default Navbar
