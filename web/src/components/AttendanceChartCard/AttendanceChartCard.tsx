import React from 'react'

import { VictoryBar, VictoryChart, VictoryGroup, VictoryAxis } from 'victory'

const AttendanceChartCard = () => {
  return (
    <main className="p-5 ">
      <h1 className='text-lg text-slate-800 font-semibold'>Attendance Time</h1>
      <VictoryChart>
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'grey' }, // Change the axis line color to blue
            ticks: { stroke: 'grey' }, // Change the tick marks color to blue
            tickLabels: { fill: 'grey' }, // Change the tick labels color to blue
          }}
        />
        <VictoryAxis
          style={{
            axis: { stroke: 'grey' }, // Change the axis line color to red
            ticks: { stroke: 'grey' }, // Change the tick marks color to red
            tickLabels: { fill: 'grey' }, // Change the tick labels color to red
          }}
        />
        <VictoryGroup offset={10} colorScale={'qualitative'}>
          <VictoryBar
            barRatio={10}
            cornerRadius={5}
            barWidth={10}
            colorScale={'red'}
            data={[
              { x: 'Mon', y: 3 },
              { x: 'Tue', y: 2 },
              { x: 'Wed', y: 3 },
              { x: 'Thu', y: 6 },
              { x: 'Fri', y: 10 },
              { x: 'Sat', y: 4 },
              { x: 'Sun', y: 5 },
            ]}
          />
          <VictoryBar
            cornerRadius={5}
            barWidth={10}
            colorScale={'blue'}
            data={[
              { x: 'Mon', y: 4 },
              { x: 'Tue', y: 2 },
              { x: 'Wed', y: 3 },
              { x: 'Thu', y: 9 },
              { x: 'Fri', y: 4 },
              { x: 'Sat', y: 8 },
              { x: 'Sun', y: 15 },
            ]}
          />
        </VictoryGroup>
      </VictoryChart>
    </main>
  )
}

export default AttendanceChartCard
