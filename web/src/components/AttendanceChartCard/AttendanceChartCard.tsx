import React from 'react'

import { faker } from '@faker-js/faker'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  layout: {
    padding: 20,
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    customCanvasBackgroundColor: {
      color: 'black',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'OnTime',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 20 })),
      backgroundColor: '#29AB87',
    },
    {
      label: 'Late',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 20 })),
      backgroundColor: '#00308F',
    },
  ],
}

const AttendanceChartCard = () => {
  return <Bar options={options} data={data} className="w-full" />
}

export default AttendanceChartCard
