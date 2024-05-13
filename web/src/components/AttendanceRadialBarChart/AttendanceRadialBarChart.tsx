import { ResponsiveRadialBar } from '@nivo/radial-bar'

const data = [
  {
    id: 'Supermarket',
    data: [
      {
        x: 'Vegetables',
        y: 161,
      },
      {
        x: 'Fruits',
        y: 291,
      },
      {
        x: 'Meat',
        y: 167,
      },
      {
        x: 'Fish',
        y: 47,
      },
    ],
  },
  {
    id: 'Combini',
    data: [
      {
        x: 'Vegetables',
        y: 175,
      },
      {
        x: 'Fruits',
        y: 98,
      },
      {
        x: 'Meat',
        y: 52,
      },
      {
        x: 'Fish',
        y: 230,
      },
    ],
  },
  {
    id: 'Online',
    data: [
      {
        x: 'Vegetables',
        y: 212,
      },
      {
        x: 'Fruits',
        y: 166,
      },
      {
        x: 'Meat',
        y: 46,
      },
      {
        x: 'Fish',
        y: 9,
      },
    ],
  },
  {
    id: 'Marché',
    data: [
      {
        x: 'Vegetables',
        y: 224,
      },
      {
        x: 'Fruits',
        y: 127,
      },
      {
        x: 'Meat',
        y: 170,
      },
      {
        x: 'Fish',
        y: 28,
      },
    ],
  },
]

const AttendanceRadialBarChart = () => {
  return (
    <main className={'h-[500px]'}>
      <ResponsiveRadialBar
        data={data}
        valueFormat=">-.2f"
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        legends={[
          {
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 80,
            translateY: 0,
            itemsSpacing: 6,
            itemDirection: 'left-to-right',
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            symbolSize: 18,
            symbolShape: 'square',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </main>
  )
}

export default AttendanceRadialBarChart
