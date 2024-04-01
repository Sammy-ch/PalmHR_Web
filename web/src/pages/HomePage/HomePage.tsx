import React, { useState, useEffect } from 'react'

import { Chart } from 'primereact/chart'

import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import DashboardHeader from 'src/components/DashboardHeader/DashboardHeader'

const HomePage = () => {
  const { isAuthenticated, signUp } = useAuth()

  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    const data = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [540, 325, 702, 620],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
          ],
          borderWidth: 1,
        },
      ],
    }
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    }

    setChartData(data)
    setChartOptions(options)
  }, [])

  return (
    <main className="w-full bg-[#F5F5F5] px-5 pt-2">
      <Metadata title="Home" description="Palm HR Dashboard" />
      <DashboardHeader />
      <span>{JSON.stringify({ isAuthenticated })}</span>
      <button
        onClick={() =>
          signUp({
            email: 'alaincherubin@gmail.com',
            password: 'santanasaint7',
          })
        }
      >
        Sign Up
      </button>
      <div className="card">
        <Chart
          className="h-full"
          type="bar"
          data={chartData}
          options={chartOptions}
        />
      </div>
    </main>
  )
}

export default HomePage
