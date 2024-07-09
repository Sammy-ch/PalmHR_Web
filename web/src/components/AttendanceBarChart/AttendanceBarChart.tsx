import { ResponsiveBar } from '@nivo/bar'

import { useQuery } from '@redwoodjs/web'

const WEEKLY_ATTENDANCE_QUERY = gql`
  query GetWeeklyAttendance {
    employeesWeeklyAttendance {
      day
      onTime
      late
    }
  }
`
const AttendanceBarChart = () => {
  const { data, loading, error } = useQuery(WEEKLY_ATTENDANCE_QUERY)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const chartData = data?.employeesWeeklyAttendance || []

  return (
    <main className="h-[500px] ">
      <ResponsiveBar
        data={chartData}
        borderRadius={10}
        keys={['onTime', 'late']}
        indexBy="day"
        margin={{ top: 10, right: 0, bottom: 60, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        colors={['#2563eb', '#FF5733 ']}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Work Days',
          legendOffset: 40,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Employee',
          legendOffset: -40,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        tooltipLabel={({ id }) => (id === 'onTime' ? 'On Time' : 'Late')}
        enableLabel={true}
        label={(d) => d.value.toString()}
        role="application"
        ariaLabel="A bar chart showing attendance data"
      />
    </main>
  )
}

export default AttendanceBarChart
