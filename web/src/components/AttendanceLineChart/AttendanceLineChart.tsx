import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    id: 'japan',
    color: 'hsl(140, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 242,
      },
      {
        x: 'helicopter',
        y: 295,
      },
      {
        x: 'boat',
        y: 32,
      },
      {
        x: 'train',
        y: 56,
      },
      {
        x: 'subway',
        y: 206,
      },
      {
        x: 'bus',
        y: 59,
      },
      {
        x: 'car',
        y: 87,
      },
      {
        x: 'moto',
        y: 82,
      },
      {
        x: 'bicycle',
        y: 58,
      },
      {
        x: 'horse',
        y: 261,
      },
      {
        x: 'skateboard',
        y: 233,
      },
      {
        x: 'others',
        y: 12,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(180, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 163,
      },
      {
        x: 'helicopter',
        y: 282,
      },
      {
        x: 'boat',
        y: 182,
      },
      {
        x: 'train',
        y: 180,
      },
      {
        x: 'subway',
        y: 279,
      },
      {
        x: 'bus',
        y: 114,
      },
      {
        x: 'car',
        y: 281,
      },
      {
        x: 'moto',
        y: 46,
      },
      {
        x: 'bicycle',
        y: 115,
      },
      {
        x: 'horse',
        y: 9,
      },
      {
        x: 'skateboard',
        y: 110,
      },
      {
        x: 'others',
        y: 215,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(5, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 106,
      },
      {
        x: 'helicopter',
        y: 72,
      },
      {
        x: 'boat',
        y: 14,
      },
      {
        x: 'train',
        y: 23,
      },
      {
        x: 'subway',
        y: 112,
      },
      {
        x: 'bus',
        y: 282,
      },
      {
        x: 'car',
        y: 282,
      },
      {
        x: 'moto',
        y: 2,
      },
      {
        x: 'bicycle',
        y: 38,
      },
      {
        x: 'horse',
        y: 173,
      },
      {
        x: 'skateboard',
        y: 289,
      },
      {
        x: 'others',
        y: 141,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(288, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 249,
      },
      {
        x: 'helicopter',
        y: 222,
      },
      {
        x: 'boat',
        y: 138,
      },
      {
        x: 'train',
        y: 130,
      },
      {
        x: 'subway',
        y: 112,
      },
      {
        x: 'bus',
        y: 190,
      },
      {
        x: 'car',
        y: 48,
      },
      {
        x: 'moto',
        y: 258,
      },
      {
        x: 'bicycle',
        y: 143,
      },
      {
        x: 'horse',
        y: 290,
      },
      {
        x: 'skateboard',
        y: 280,
      },
      {
        x: 'others',
        y: 16,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(4, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 144,
      },
      {
        x: 'helicopter',
        y: 161,
      },
      {
        x: 'boat',
        y: 226,
      },
      {
        x: 'train',
        y: 288,
      },
      {
        x: 'subway',
        y: 185,
      },
      {
        x: 'bus',
        y: 127,
      },
      {
        x: 'car',
        y: 227,
      },
      {
        x: 'moto',
        y: 187,
      },
      {
        x: 'bicycle',
        y: 132,
      },
      {
        x: 'horse',
        y: 283,
      },
      {
        x: 'skateboard',
        y: 20,
      },
      {
        x: 'others',
        y: 214,
      },
    ],
  },
]

const AttendanceLineChart = () => {
  return (
    <main className="h-[500px]">
      <ResponsiveLine
        data={data}
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
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        pointSize={10}
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
