import React from 'react'
import about from "../assets/about.png"

function About() {
    return (
        <React.Fragment>
            <div className="container min-h-screen grid place-items-center mx-auto" id='about'>
                <p className="text-xl text-white font-bold">About Research</p>
                <div className="flex lg:gap-x-8 gap-2 items-center flex-col-reverse lg:flex-row">
                    <div className="p-4 lg:w-1/2 h-1/2 bg-white/15 backdrop-blur-[10px] rounded-2xl border border-white/25 shadow-[0_8px_32px_0_rgba(31, 38, 135, .37)]">
                        <p className='text-white lg:text-lg text-justify'>
                            Sistem pemantauan perkembangan bibit tanaman tomat berbasis IoT memiliki parameter pengukur yang dilakukan.
                            Parameter tersebut diantaranya: suhu, kelembapan udara, intensitas cahaya dan tumbuh/belum tumbuh bibit tanaman tomat.
                            Pengukuran parameter suhu dan kelembapan udara diukur oleh sensor DHT11. Pengukuran parameter intensitas cahaya diukur oleh sensor LDR. 
                            Dan pengukuran parameter tumbuh/ belum tumbuh diukur oleh kamera yang diproses menggunakan algoritma YOLOV8. 
                        </p>
                    </div>   
                    <div className="w-3/4 lg:w-1/2 h-1/2 bg-white/15 backdrop-blur-[10px] rounded-2xl border border-white/25 shadow-[0_8px_32px_0_rgba(31, 38, 135, .37)]">
                        <img src={about} alt="" />
                    </div>   
                </div>
            </div>
        </React.Fragment>
    )
}

export default About
