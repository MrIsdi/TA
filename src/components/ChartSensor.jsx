import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function ChartSensor({page}) {
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
    const labels = page.map((value, i)=>value["waktu"].split(" ")[0])
    const dataSuhu = {
        labels,
        datasets: [
            {
                label: 'Suhu',
                data: page.map((value,i)=>value["suhu"]),
                borderColor: '#2CD9FF',
                backgroundColor: '#2CD9FF',
            },
        ],
    };
    const dataLembap = {
        labels,
        datasets: [
            {
                label: 'Kelembapan Udara',
                data: page.map((value,i)=>value["lembap"]),
                borderColor: '#2CD9FF',
                backgroundColor: '#2CD9FF',
            },
        ],
    };
    const dataCahaya = {
        labels,
        datasets: [
            {
                label: 'Intensitas Cahaya',
                data: page.map((value,i)=>value["cahaya"]),
                borderColor: '#2CD9FF',
                backgroundColor: '#2CD9FF',
            },
        ],
    };
    return (
        <React.Fragment>
            <div className='w-full lg:w-1/2 mt-8 flex overflow-auto gap-x-8'>
                <Line options={options} data={dataSuhu} className="w-full bg-white/15 backdrop-blur-[10px] rounded-2xl border border-white/25 shadow-[0_8px_32px_0_rgba(31, 38, 135, .37)]" />
                <Line options={options} data={dataLembap} className="w-full border bg-white/15 backdrop-blur-[10px] rounded-2xl border border-white/25 shadow-[0_8px_32px_0_rgba(31, 38, 135, .37)]" />
                <Line options={options} data={dataCahaya} className="w-full border bg-white/15 backdrop-blur-[10px] rounded-2xl border border-white/25 shadow-[0_8px_32px_0_rgba(31, 38, 135, .37)]" />
            </div>
        </React.Fragment>
    )
}

export default ChartSensor
