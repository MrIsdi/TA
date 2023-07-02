import React from 'react'

function TableSensor({page}) {
    return (
        <React.Fragment>
            <div className='lg:w-1/2 m-auto mt-8'>
                <table className='text-white text-xs text-center'>
                    <thead>
                        <tr>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>No</th>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>Waktu</th>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>Suhu</th>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>Kelembapan Udara</th>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>Intensitas Cahaya</th>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>Kipas Angin</th>
                            <th className='text-white/30 p-1 lg:p-2 w-[25px] lg:w-[75px] break-word border-y'>Mist Spray Fog Maker</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.map((value, i)=>(
                            <tr key={i} className="p-2">
                                <td>{i+1}</td>
                                <td>{value["waktu"].split(" ")[0]}</td>
                                <td>{value["suhu"]}</td>
                                <td>{value["lembap"]}</td>
                                <td>{value["cahaya"]}</td>
                                { value["kipas"] === "Hidup"? 
                                    <td>
                                        <div className='bg-[#BBF3E0] text-[#12A474] w-fit px-3 py-2 m-auto rounded-md'>{value["kipas"]}</div>
                                    </td> :
                                    <td>
                                        <div className='bg-[#FFF3DB] text-[#F2994A] w-fit px-3 py-2 m-auto rounded-md'>{value["kipas"]}</div>
                                    </td>
                                }
                                { value["mist"] === "Hidup"? 
                                    <td>
                                        <div className='bg-[#BBF3E0] text-[#12A474] w-fit px-3 py-2 m-auto rounded-md'>{value["mist"]}</div>
                                    </td> :
                                    <td>
                                        <div className='bg-[#FFF3DB] text-[#F2994A] w-fit px-3 py-2 m-auto rounded-md'>{value["mist"]}</div>
                                    </td>
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default TableSensor
