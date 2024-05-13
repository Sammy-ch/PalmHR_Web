import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface KpiProps {
  title: string
  metric: string
  progress: string
  icon: React.ElementType
}

export default function Component({
  title,
  metric,
  progress,
  icon: Icon,
}: KpiProps) {
  return (
    <Card className="flex w-full flex-col justify-between shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
        <Icon className="h-6 w-6  text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{metric}</div>
        <p className="text-md text-muted-foreground">{progress}</p>
      </CardContent>
    </Card>
  )
}
