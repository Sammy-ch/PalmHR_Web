import { TrendingUp, CircleArrowOutDownLeft } from 'lucide-react'

export type Kpi = {
  title: string
  metric: string
  progress: number
}

const KpiCard = ({ title, metric, progress }: any) => {
  return (
    <div className="flex flex-col gap-5 rounded-lg border p-10 px-4 py-3.5 shadow-md">
      <div className="flex items-center gap-2">
        <div className="rounded-[100%] bg-slate-400/10 p-1.5">
          <CircleArrowOutDownLeft color="#0080ff" />
        </div>
        <h3 className="text-lg font-medium text-slate-600">{title}</h3>
      </div>
      <div className="flex items-center justify-between gap-10">
        <span className="text-4xl font-semibold">{metric}%</span>
        <div className="flex flex-col items-center text-xs font-bold text-[grey]">
          <span className="flex items-center gap-2">
            <TrendingUp color="#00a551" /> {progress}%
          </span>
          <span>vs last 7 days</span>
        </div>
      </div>
    </div>
  )
}

export default KpiCard
