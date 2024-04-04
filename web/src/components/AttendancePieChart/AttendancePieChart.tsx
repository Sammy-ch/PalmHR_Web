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
      backgroundColor: ['#29AB87', '#00308F'],
      borderColor: ['#29AB87', '#00308F'],
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
