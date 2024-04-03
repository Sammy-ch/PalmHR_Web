import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['Red', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ['#8B008B', 'orange'],
      borderColor: ['#8B008B', 'orange'],
      borderWidth: 1,
    },
  ],
}

const AttendancePieChart = () => {
  return <Doughnut data={data} />
}

export default AttendancePieChart
