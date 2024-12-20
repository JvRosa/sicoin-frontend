import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function CarbonEmissionChart() {
  const data = {
    labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Carbono Emitido (kgCO2)',
        data: [120, 100, 80, 150, 190, 50, 70], // Exemplo de valores
        backgroundColor: '#65E6B2',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Emissões de Carbono por Dia da Semana',
      },
    },
  };

  return(
  <div className="bg-white p-2 rounded-lg shadow-lg">
      <h2 className="text-black text-2xl font-semibold mb-4">
      Emissão de kgCO2 por Dia da Semana
      </h2>
  <Bar data={data} options={options} />
  </div>
  );
}
