import React from 'react';
import { LineChart } from '@mui/x-charts';
import CalendarIcon from '@mui/icons-material/CalendarToday';

export interface ChartData {
  months: string[];
  tempData: number[];
  humidityData: number[];
  vpdData: number[];
  co2Data: number[];
}

interface ChartWidgetProps {
  data: ChartData;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ data }) => {
  const { months, tempData, humidityData, vpdData, co2Data } = data;

  const chartColors = {
    temperature: 'rgba(239,68,68,1)', // red
    humidity: 'rgba(34,197,94,1)',    // green
    vpd: 'rgba(59,130,246,1)',        // blue
    co2: 'rgba(234,179,8,1)'          // yellow
  };

  return (
    <div className="bg-[rgba(24,24,27,0.2)] rounded-2xl backdrop-blur-sm border border-zinc-700 p-4 lg:w-3/5 w-1/2">
      <div className="mb-3 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-white">Environment</h2>
          <p className='text-white'>chart</p>
        </div>
        <CalendarIcon className="text-white/70 cursor-pointer hover:text-white transition-colors" />
      </div>
      <LineChart
        xAxis={[{ 
          scaleType: 'point', 
          data: months,
          tickLabelStyle: {
            fill: 'white'
          },
          stroke: '#FFFFFF',
          fill: '#FFFFFF'
        }]}
        yAxis={[{
          tickLabelStyle: {
            fill: 'white'
          },
          stroke: '#FFFFFF'
        }]}
        
        series={[
          { 
            data: tempData, 
            label: 'Temperature',
            color: chartColors.temperature,
            showMark: false,
            curve: "monotoneX",
          },
          { 
            data: humidityData, 
            label: 'Humidity',
            color: chartColors.humidity,
            showMark: false,
            curve: "monotoneX",
          },
          { 
            data: vpdData, 
            label: 'VPD',
            color: chartColors.vpd,
            showMark: false,
            curve: "monotoneX",
          },
          { 
            data: co2Data, 
            label: 'CO2',
            color: chartColors.co2,
            showMark: false,
            curve: "monotoneX",
          }
        ]}
        height={300}
        margin={{ left: 30, right: 30, top: 20, bottom: 40 }}
        sx={{
          '.MuiLineElement-root': {
            strokeWidth: 2,
          },
          '.MuiChartsLegend-root': {
            display: 'none',
          }
        }}
      >
      </LineChart>
    </div>
  );
};

export default ChartWidget;