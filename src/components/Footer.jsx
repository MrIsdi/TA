import React from 'react'

function Footer() {
    const time = new Date().getFullYear()
    return (
        <React.Fragment>
            <div className='container mt-16'>
                <p className="text-xl text-white font-bold mb-4">Created By</p>
                <p className="text-lg text-white/50 font-bold">Web Developer:</p>
                <p className="text-base text-white font-bold mb-4">Muhammad Ridho Isdi</p>
                <p className="text-lg text-white/50 font-bold">UI/UX Designer:</p>
                <p className="text-base text-white font-bold mb-4">Delvira Syafna</p>
                <p className="text-white text-center font-bold mb-8">&copy; {time}</p>
            </div>
        </React.Fragment>
    )
}

export default Footer
