import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

function ChartYolo({manual, sistem}) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
        scales: {
            y: {
                ticks: {
                    color: "#fff"
                },
                border: {
                    color: "#fff"
                },
                grid: {
                    display: false
                },
            },
            x: {
                ticks: {
                    color: "#fff"
                },
                border: {
                    color: "#fff"
                },
                grid: {
                    display: false
                },
            }
        }

    };
    const labels = manual.map((value, i)=>value["waktu"])
    const dataYolo = {
        labels,
        datasets: [
            {
                label: 'Manual',
                data: manual.map((value,i)=>value["tumbuh"]),
                borderColor: '#2CD9FF',
                backgroundColor: '#2CD9FF',
            },
            {
                label: 'Sistem',
                data: sistem.map((value,i)=>value["tumbuh"]),
                borderColor: '#56577A',
                backgroundColor: '#56577A',
            },
        ],
    };
    return (
        <React.Fragment>
            <div className='w-full lg:w-1/2 mt-8 flex justify-center gap-x-8'>
                <Bar options={options} data={dataYolo} className="w-full bg-white/10 backdrop-blur-[10px] rounded-2xl border border-white/25 shadow-[0_8px_32px_0_rgba(31, 38, 135, .37)]" />
            </div>
        </React.Fragment>
    )
}

export default ChartYolo
