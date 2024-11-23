'use client';

import { useSearchParams } from 'next/navigation';
import EnvironmentWidget, { MetricData } from "../../../components/dashboard/widgets/EnvironmentWidget";
import ChartWidget, { ChartData } from "../../../components/dashboard/widgets/EnvironmentChart";

export default function GrowLocation2Page() {
  const searchParams = useSearchParams();
  const strain = searchParams.get('strain');

  const strainMetrics: MetricData[] = [
    { label: 'Soil Temperature', value: '22', unit: '°C', highest: '25', lowest: '18' },
    { label: 'Water Level', value: '80', unit: '%', highest: '90', lowest: '70' },
    { label: 'Nutrients', value: '65', unit: 'ppm', highest: '80', lowest: '45' },
    { label: 'pH Level', value: '6.5', unit: 'pH', highest: '7.0', lowest: '6.0' },
  ];

  const strainChartData: ChartData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    tempData: Array.from({ length: 12 }, () => Math.random() * 300 + 10),
    humidityData: Array.from({ length: 12 }, () => Math.random() * 40 + 400),
    vpdData: Array.from({ length: 12 }, () => Math.random() * 100 + 200),
    co2Data: Array.from({ length: 12 }, () => Math.random() * 300 + 400),
  };

  // Only show strain-specific widgets if a strain is selected
  if (strain) {
    return (
      <div className="space-y-6">
        <div className="flex gap-3">
          <EnvironmentWidget metrics={strainMetrics} />
          <ChartWidget data={strainChartData} />
        </div>
      </div>
    );
  }

  return (
    <div className="text-white">
      <h2 className="text-xl font-semibold">Grow Location 2</h2>
      <p className="mt-2">Select a strain from the sidebar to view detailed metrics.</p>
    </div>
  );
}