import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const Chart = () => {
  const option = {
    chart: {
      type: 'column',
      backgroundColor: '#0d131a'
  },
  title: {
      text: 'Restaurants Complaints'
  },
  tooltip: {
      shared: true
  },
  xAxis: {
      categories: [
          'Jun1',
          'Jun2',
          'Jun3',
          'Jun4',
          'Jun5',
          'Jun6',
          'Jun7',
          'Jun8',
          'Jun9',
          'Jun10',
          'Jun11',
          'Jun12',
          'Jun13',
          'Jun14',
          'Jun15',
      ],
      crosshair: true
  },
  yAxis: [{
      title: {
          text: ''
      },
      labels: {
        format: '${value}M'
      }   
  }, {
      title: {
          text: ''
      },
      minPadding: 0,
      maxPadding: 0,
      max: 100,
      min: 0,
      opposite: true,
      labels: {
          format: '{value}%'
      }
  }],
  series: [{
      type: 'line',
      name: 'Pareto',
      data: [755, 222, 151, 86, 72, 51, 36, 10, 55,65,58,75,95,25,566],
      zIndex: 10,
      tooltip: {
          valueDecimals: 2,
          valueSuffix: '%'
      }
  }, {
      name: 'Complaints',
      type: 'column',
      zIndex: 2,
      data: [411.29,418.12,418.34,411.45,415.12,413.12,413.12,412.12,410.67,416.12,413.12,418.67,456.18,467.12,443.12]
  }]
  }
  return (
    <div>
            <HighchartsReact
   highcharts={Highcharts}
   options={option}
  />
    </div>
  )
}

export default Chart
