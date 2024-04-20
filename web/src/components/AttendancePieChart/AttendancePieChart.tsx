import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['Early', 'Late'],
  datasets: [
    {
      label: 'Attendance %',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ['#1E90FF', 'rgba(249, 180, 45, 1)'],
      borderWidth: 1,
    },
  ],
}

export const options = {
  layout: {
    padding: 20,
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
}

const AttendancePieChart = () => {
  return <Doughnut data={data} options={options} />
}

export default AttendancePieChart
