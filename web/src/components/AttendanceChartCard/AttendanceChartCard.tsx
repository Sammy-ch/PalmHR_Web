import React from 'react'

import * as V from 'victory'
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
} from 'victory'


const AttendanceChartCard = () => {
  return (
    <VictoryChart>
      <VictoryGroup offset={20} colorScale={'qualitative'}>
        <VictoryBar
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 5 },
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 7 },
          ]}
        />
      </VictoryGroup>
    </VictoryChart>
  )
}

export default AttendanceChartCard
