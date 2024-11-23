import EnvironmentWidget, { MetricData } from "../../components/dashboard/widgets/EnvironmentWidget";
import ChartWidget, { ChartData } from "../../components/dashboard/widgets/EnvironmentChart";
import 'app/globals.css';
import Navbar from "@components/dashboard/Header";
import Sidebar from "@components/dashboard/Sidebar";
import React, { Suspense } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metrics: MetricData[] = [
    { label: 'Temperature', value: '22', unit: '°C', highest: '25', lowest: '18' },
    { label: 'VPD', value: '0.8', unit: 'kPa', highest: '0.9', lowest: '0.5' },
    { label: 'Humidity', value: '65', unit: '%', highest: '80', lowest: '45' },
    { label: 'CO₂', value: '554', unit: 'ppm', highest: '700', lowest: '450' },
  ];

  const chartData: ChartData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    tempData: Array.from({ length: 12 }, () => Math.random() * 300 + 10),
    humidityData: Array.from({ length: 12 }, () => Math.random() * 40 + 400),
    vpdData: Array.from({ length: 12 }, () => Math.random() * 100 + 200),
    co2Data: Array.from({ length: 12 }, () => Math.random() * 300 + 400)
  };

  return (
    <div className="flex min-h-screen h-auto bg-gradient">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-3">
          <div className="flex gap-3 mb-6">
            <EnvironmentWidget metrics={metrics} />
            <ChartWidget data={chartData} />
          </div>
          <div className="mt-6">
            <Suspense fallback={<div>Loading...</div>}>
              {children}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}