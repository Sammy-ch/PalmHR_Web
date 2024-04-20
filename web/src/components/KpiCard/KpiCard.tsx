import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function Component({ title }: any) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-medium">{title}</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">45%</div>
        <p className="text-md text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  )
}
