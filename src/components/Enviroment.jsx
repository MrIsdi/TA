import React, {useEffect, useState} from 'react'
import TableSensor from './TableSensor'
import axios from "axios"
import ChartSensor from './ChartSensor'

function Enviroment() {
    const [data, setData] = useState([])
    const [page, setPage] = useState([])
    useEffect(()=>{
        axios.get("https://cvtomato.000webhostapp.com/sensor")
            .then((response)=>{
                setData(response.data)
            })
    },[data])
    
    let i = 0, tabel = []
    while(i < data.length){
        tabel.push(data.slice(i, 15+i))
        i += 15
    }
    const opt = Array(Math.round(data.length / 15)).fill(0)
    const handleOption = (e) =>{
        setPage(tabel[e.target.value])
    }
    return (
        <React.Fragment>
            <div className='container lg:min-h-screen m-auto mt-16' id='data'>
                <p className="text-xl text-white text-center font-bold">Pemantauan dan Pengontrolan Bibit Tomat Berdasarkan Lingkungan</p>
                <select onChange={handleOption} className="text-[#217EFD] bg-[#BDD9FE] rounded m-auto flex">
                    <option defaultValue></option>
                    {opt.map((a, i)=>(
                        <option value={i} key={i}>{i}</option>
                    ))}
                </select>
                <div className="flex w-100 m-auto items-center flex-col lg:flex-row">
                    <TableSensor page={page} />
                    <ChartSensor page={page} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Enviroment
