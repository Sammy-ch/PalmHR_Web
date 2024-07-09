import { ResponsiveBar } from '@nivo/bar'

const AttendanceBarChart = () => {
  return (
    <main className="h-[500px] ">
      <ResponsiveBar
        data={[
          { Day: 'Mon', Early: 25, Late: 19 },
          { Day: 'Tue', Early: 9, Late: 2 },
          { Day: 'Wed', Early: 5, Late: 8 },
          { Day: 'Thur', Early: 2, Late: 16 },
          { Day: 'Fri', Early: 11, Late: 5 },
          { Day: 'Sat', Early: 8, Late: 10 },
        ]}
        borderRadius={10}
        keys={['Early', 'Late']}
        indexBy="Day"
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
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing attendance data"
      />
    </main>
  )
}

export default AttendanceBarChart
