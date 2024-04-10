import { TrendingUp,CircleArrowOutDownLeft } from 'lucide-react'

export type Kpi = {
  title: string
  metric: string
  progress: number
}

const KpiCard = ({ title, metric, progress }: any) => {
  return (
    <div className="mx-auto flex flex-col gap-5 rounded-lg border p-10 px-4 py-3.5 shadow-md">
      <div className="flex items-center gap-2">
        <div className="rounded-[100%] bg-slate-400/30 p-1.5"><CircleArrowOutDownLeft color="#0080ff" /></div>
        <h3 className="text-lg font-medium text-slate-600">
          Overall Attendance rate
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-4xl font-semibold">24%</span>
        <div className="flex flex-col items-center text-xs font-bold text-[grey]">
          <span className='flex items-center gap-2'>
            <TrendingUp color="#80ff00" /> 16%
          </span>
          <span>vs last 7 days</span>
        </div>
      </div>
    </div>
  )
}

export default KpiCard
