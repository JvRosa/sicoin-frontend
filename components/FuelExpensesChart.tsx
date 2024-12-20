"use client";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

// Registro dos elementos necessários do Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function FuelExpensesChart() {
  // Gastos médios diários em Goiânia
  const dailyAverage = 10000;

  // Dados fictícios ajustados proporcionalmente para 10.000 reais por dia
  const labels = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
  const dataCurrentWeek = [50, 60, 45, 70, 90, 30, 20]; // Gastos na semana atual (em unidades proporcionais)
  const dataLastWeek = [40, 55, 50, 65, 80, 35, 25]; // Gastos na semana anterior (em unidades proporcionais)

  // Encontrando o fator de escala baseado no gasto médio diário
  const totalCurrentWeek = dataCurrentWeek.reduce((acc, val) => acc + val, 0);
  const totalLastWeek = dataLastWeek.reduce((acc, val) => acc + val, 0);
  const scaleFactorCurrent = dailyAverage * 7 / totalCurrentWeek;
  const scaleFactorLast = dailyAverage * 7 / totalLastWeek;

  // Função para gerar variação nos valores e evitar valores inteiros redondos
  const generateRandomVariation = (value: number) => {
    const variation = (Math.random() - 0.5) * 50; // Variação aleatória de até ±50
    return value + variation;
  };

  // Ajustando os dados conforme o fator de escala e aplicando variação
  const scaledDataCurrentWeek = dataCurrentWeek.map(value => generateRandomVariation(value * scaleFactorCurrent));
  const scaledDataLastWeek = dataLastWeek.map(value => generateRandomVariation(value * scaleFactorLast));

  // Configuração dos dados do gráfico
  const data = {
    labels,
    datasets: [
      {
        label: "Semana Atual",
        data: scaledDataCurrentWeek,
        borderColor: "#65E6B2", // Cor da linha
        backgroundColor: "#65E6B2",
        fill: false, // Não preenche a área abaixo da linha
        tension: 0.4, // Suavidade das linhas
        pointRadius: 5,
      },
      {
        label: "Semana Anterior",
        data: scaledDataLastWeek,
        borderColor: "#962c41", // Cor da linha
        backgroundColor: "#962c41",
        fill: false,
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  // Configuração das opções do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const, // Explicitamente definindo como constante
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `R$ ${context.raw.toFixed(2)}`, // Formata os valores no tooltip
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Dias da Semana",
          color: "#000000",
        },
        ticks: {
          color: "#000000",
        },
      },
      y: {
        title: {
          display: true,
          text: "Gastos (R$)",
          color: "#000000",
        },
        ticks: {
          color: "#000000",
          min: 5000, // Definindo valor mínimo
          max: 15000, // Definindo valor máximo
        },
      },
    },
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-lg">
      <h2 className="text-black text-2xl font-semibold mb-4">
        Gastos com Combustível por Dia da Semana
      </h2>
      <Line data={data} options={options} />
    </div>
  );
}
