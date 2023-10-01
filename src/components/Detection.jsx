import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import TableYolo from './TableYolo'
import ChartYolo from './ChartYolo'

function Detection() {
    const [data, setData] = useState([])
    const getData = async () =>{
        const { data } = await axios.get("http://localhost:8000/yolov1")
        setData(data)
    }
    useEffect(()=>{
        getData()
    }, [])
    let manual = data.slice(0, 10),
        sistem = data.slice(10, 20)
    
    const mata = [
        {"tumbuh": 0, "belumTumbuh": 30, "waktu": "Day 1"},
        {"tumbuh": 0, "belumTumbuh": 30, "waktu": "Day 2"},
        {"tumbuh": 21, "belumTumbuh": 9, "waktu": "Day 3"},
        {"tumbuh": 23, "belumTumbuh": 7, "waktu": "Day 4"},
        {"tumbuh": 24, "belumTumbuh": 6, "waktu": "Day 5"},
        {"tumbuh": 29, "belumTumbuh": 1, "waktu": "Day 6"},
        {"tumbuh": 29, "belumTumbuh": 1, "waktu": "Day 7"},
        {"tumbuh": 29, "belumTumbuh": 1, "waktu": "Day 8"},
        {"tumbuh": 29, "belumTumbuh": 1, "waktu": "Day 9"},
        {"tumbuh": 30, "belumTumbuh": 0, "waktu": "Day 10"},
        {"tumbuh": 0, "belumTumbuh": 30, "waktu": "Day 1"},
        {"tumbuh": 12, "belumTumbuh": 18, "waktu": "Day 2"},
        {"tumbuh": 13, "belumTumbuh": 17, "waktu": "Day 3"},
        {"tumbuh": 15, "belumTumbuh": 15, "waktu": "Day 4"},
        {"tumbuh": 18, "belumTumbuh": 12, "waktu": "Day 5"},
        {"tumbuh": 29, "belumTumbuh": 1, "waktu": "Day 6"},
        {"tumbuh": 29, "belumTumbuh": 1, "waktu": "Day 7"},
        {"tumbuh": 30, "belumTumbuh": 0, "waktu": "Day 8"},
        {"tumbuh": 30, "belumTumbuh": 0, "waktu": "Day 9"},
        {"tumbuh": 30, "belumTumbuh": 0, "waktu": "Day 10"},
    ]
    let manual1 = mata.slice(0, 10),
        sistem1 = mata.slice(10, 20)
    return (
        <React.Fragment>
            <div className='container min-h-screen m-auto mt-16'>
                <p className="text-xl text-white text-center font-bold">Pemantauan Perkembangan Bibit Tomat</p>
                <section className='mx-8 mt-8'>
                    <p className="text-lg text-white font-bold">Algoritma YOLOV8</p>
                    <div className="flex w-full m-auto items-center flex-col lg:flex-row">
                        { data.length == 0 ? (
                            ""
                        ):(
                            <>
                                <TableYolo data={data} />
                                <ChartYolo manual={manual} sistem={sistem} />
                            </>
                        ) }
                    </div>
                </section>
                <section className='mx-8 mt-8'>
                    <p className="text-lg text-white font-bold">Realita</p>
                    <div className="flex w-full m-auto items-center flex-col lg:flex-row">
                        <TableYolo data={mata} />
                        <ChartYolo manual={manual1} sistem={sistem1} />
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}

export default Detection
