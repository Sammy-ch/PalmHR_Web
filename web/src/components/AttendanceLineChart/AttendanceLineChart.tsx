import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    id: 'Early',
    color: 'hsl(187, 100%, 40%);',
    data: [
      {
        x: 'Monday',
        y: 25,
      },
      {
        x: 'Tuesday',
        y: 18,
      },
      {
        x: 'Wednesday',
        y: 1,
      },
      {
        x: 'Thursday',
        y: 16,
      },
      {
        x: 'Friday',
        y: 11,
      },
      {
        x: 'Saturday',
        y: 9,
      },
      {
        x: 'Sunday',
        y: 0,
      },
    ],
  },
  {
    id: 'Late',
    color: 'hsl(180, 70%, 50%)',
    data: [
      {
        x: 'Monday',
        y: 19,
      },
      {
        x: 'Tuesday',
        y: 2,
      },
      {
        x: 'Wednesday',
        y: 8,
      },
      {
        x: 'Thursday',
        y: 25,
      },
      {
        x: 'Friday',
        y: 5,
      },
      {
        x: 'Saturday',
        y: 10,
      },
      {
        x: 'Sunday',
        y: 17,
      },
    ],
  },
]

const AttendanceLineChart = () => {
  return (
    <main className="h-[500px]">
      <ResponsiveLine
        data={data}
        animate={true}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
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
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />{' '}
    </main>
  )
}

export default AttendanceLineChart
