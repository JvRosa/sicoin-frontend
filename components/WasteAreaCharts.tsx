'use client';

import { Pie, PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

export default function WasteAreaCharts() {
  // Dados fictícios para demonstração
  const areas = ["Área 1", "Área 2", "Área 3", "Área 4"];
  
  // Dados para o gráfico de torta
  const dailyData = [5, 3, 2, 6]; // Preenchimentos por dia em cada área
  const pieData = {
    labels: areas,
    datasets: [
      {
        label: "Preenchimentos Diários",
        data: dailyData,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384AA", "#36A2EBAA", "#FFCE56AA", "#4BC0C0AA"],
      },
    ],
  };

  // Dados para o gráfico de área polar
  const weeklyData = [25, 15, 10, 35]; // Preenchimentos por semana em cada área
  const polarAreaData = {
    labels: areas,
    datasets: [
      {
        label: "Preenchimentos Semanais",
        data: weeklyData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)", 
          "rgba(54, 162, 235, 0.4)", 
          "rgba(255, 206, 86, 0.4)", 
          "rgba(75, 192, 192, 0.4)"
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)", // Linha branca para cada setor
          "rgba(255, 255, 255, 1)", // Linha branca para cada setor
          "rgba(255, 255, 255, 1)", // Linha branca para cada setor
          "rgba(255, 255, 255, 1)", // Linha branca para cada setor
        ],
        borderWidth: 1, // Espessura da linha
      },
    ],
  };

  // Opções comuns de formatação
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.raw} Preenchimentos`,
        },
      },
    },
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-lg">
      <h2 className="text-black text-2xl font-semibold mb-4">
        Lixeiras Preenchidas por Área
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
        {/* Gráfico de Torta */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-center text-xl font-semibold mb-4 text-black">Preenchimentos Diários</h2>
          <Pie data={pieData} options={options} />
        </div>
  
        {/* Gráfico de Área Polar */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-center text-xl font-semibold mb-4 text-black">Preenchimentos Semanais</h2>
          <PolarArea data={polarAreaData} options={options} />
        </div>
      </div>
    </div>
  );
  
}
