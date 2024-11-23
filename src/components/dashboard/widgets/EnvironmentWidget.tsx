import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export interface MetricData {
  label: string;
  value: string;
  unit: string;
  highest: string;
  lowest: string;
}

interface EnvironmentWidgetProps {
  metrics: MetricData[];
}

const borderColors: Record<number, string> = {
  0: 'border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]',
  1: 'border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.2)]',
  2: 'border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]',
  3: 'border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]'
};


const EnvironmentWidget: React.FC<EnvironmentWidgetProps> = ({ metrics }) => {
  return (
    <div className=" bg-[rgba(24,24,27,0.2)] rounded-2xl backdrop-blur-sm border border-zinc-700 p-4 lg:w-2/5 w-1/2">
      <h2 className="text-lg font-bold text-white">Environment</h2>
      <p className='text-white pb-10'>current value</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 pb-8 gap-4 max-w-lg mx-auto">
      {metrics.map((metric, index) => {

        return (
          <Card
            key={metric.label}
            className={`w-full h-full lg:h-[110px] bg-[rgba(24,24,27,0.2)] backdrop-blur-sm border ${borderColors[index % 4]} rounded-xl`}
          >
            <CardContent className="h-full">
              <div className="lg:flex gap-3 h-full">
                <div className="w-[calc(71.4%)] lg:border-r border-white/10 pr-4">
                  <div className=" font-bold mb-2 text-slate-400	">{metric.label}</div>
                  <div className="text-2xl font-bold text-center text-white">
                    {metric.value}
                    <span className="ml-1 text-lg">{metric.unit}</span>
                  </div>
                </div>
                <div className="w-[calc(28.6%)] flex flex-col justify-between divide-y divide-white/10">
                  <div className="text-slate-400 text-sm pb-1">
                    Highest:
                    <div className="text-xs text-white">
                      {metric.highest}
                      <span className="">{metric.unit}</span>
                    </div>
                  </div>
                  <div className="text-slate-400 pt-1">
                    Lowest:
                    <div className="text-xs text-white">
                      {metric.highest}
                      <span className="">{metric.unit}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
      </div>
    </div>
  );
};

export default EnvironmentWidget;