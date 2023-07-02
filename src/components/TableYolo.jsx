import React from 'react'

function TableYolo({data}) {
    const yolo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <React.Fragment>
            <div className='lg:w-1/2 m-auto mt-8'>
                <table className='text-white text-xs text-center m-auto'>
                    <thead>
                        <tr>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>No</th>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>Waktu</th>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>Tumbuh (s)</th>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>Belum Tumbuh (s)</th>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>Tumbuh (m)</th>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>Belum Tumbuh (m)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {yolo.map((value, i)=>(
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{`Hari ke-${i+1}`}</td>
                                <td>{data[i]["tumbuh"]}</td>
                                <td>{data[i]["belumTumbuh"]}</td>
                                <td>{data[i+10]["tumbuh"]}</td>
                                <td>{data[i+10]["belumTumbuh"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default TableYolo
