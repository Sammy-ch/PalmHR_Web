import { SparkAreaChart } from '@tremor/react'

export type Kpi = {
  title: string
  metric: string
  progress: number
}

const chartdata = [
  { month: 'Jan 21', Performance: 4000 },
  { month: 'Feb 21', Performance: 3000 },
  { month: 'Mar 21', Performance: 2000 },
  { month: 'Apr 21', Performance: 2780 },
  { month: 'May 21', Performance: 1890 },
  { month: 'Jun 21', Performance: 2390 },
  { month: 'Jul 21', Performance: 3490 },
]
const KpiCard = ({ title, metric, progress }: any) => {
  return (
    <div className="mx-auto flex w-full max-w-lg items-center justify-between rounded-lg border px-4 py-3.5 shadow-md">
      {' '}
      <div>
        <div className="flex items-center space-x-2.5">
          {' '}
          <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            {title}
          </span>{' '}
        </div>{' '}
        <SparkAreaChart
          data={chartdata}
          categories={['Performance']}
          index={'month'}
          colors={['red']}
          className="h-8 w-20 sm:h-10 sm:w-36"
        />
        <span className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
          {metric}
        </span>{' '}
      </div>{' '}
      <div className="flex items-center space-x-2.5">
        {' '}
        <span className="text-tremor-default rounded bg-emerald-500 px-2 py-1 font-medium text-white">
          {' '}
          +{progress}%{' '}
        </span>{' '}
      </div>{' '}
    </div>
  )
}

export default KpiCard
