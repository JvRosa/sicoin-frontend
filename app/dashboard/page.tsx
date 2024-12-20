'use client';

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import CarbonEmissionChart from '@/components/CarbonEmissionChart';
import FuelExpensesChart from "@/components/FuelExpensesChart";
import WasteAreaCharts from "@/components/WasteAreaCharts";

export default function Dashboard() {
  const [selectedReport, setSelectedReport] = useState<string>("");
  const [caminhaoId, setCaminhaoId] = useState<string>("");
  const [localDate, setLocalDate] = useState<string>("");
  const [distancia, setDistancia] = useState<string>("");
  const [combustivel, setCombustivel] = useState<string>("");
  const [gasto, setGasto] = useState<string>("");

  // Função para simular a consulta de dados
  const consultarDados = () => {
    // Exemplo de dados gerados de forma fictícia
    if (!caminhaoId || !localDate) {
      alert("Por favor, insira um ID de caminhão e uma data.");
      return;
    }

    const distanciaPercorrida = (Math.random() * (150 - 50) + 50).toFixed(2);
    const consumoCombustivel = (parseFloat(distanciaPercorrida) / 3).toFixed(2);
    const valorGasto = (parseFloat(consumoCombustivel) * 5.5).toFixed(2);

    setDistancia(distanciaPercorrida);
    setCombustivel(consumoCombustivel);
    setGasto(valorGasto);
  };

  const renderGraph = () => {
    switch (selectedReport) {
      case "distancia-percorrida":
        return (
          <>
            <h2 className="text-xl font-bold text-white mb-4">Informações por Caminhão</h2>
            <div className="mb-4">
              <label htmlFor="caminhaoId" className="block text-white mb-2">Caminhão ID</label>
              <input
                type="text"
                id="caminhaoId"
                value={caminhaoId}
                onChange={(e) => setCaminhaoId(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black"
                placeholder="Digite o ID do caminhão"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="localDate" className="block text-white mb-2">Data</label>
              <input
                type="date"
                id="localDate"
                value={localDate}
                onChange={(e) => setLocalDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black"
              />
            </div>

            <div className="mb-4 flex justify-center">
              <button
                onClick={consultarDados}
                className="px-6 py-3 bg-[#65E6B2] text-white rounded-lg hover:bg-opacity-90"
              >
                Consultar
              </button>
            </div>


            {distancia && combustivel && gasto && (
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-black">Resultados:</h3>
                <p className="text-black">Distância Percorrida: {distancia} km</p>
                <p className="text-black">Combustível Consumido: {combustivel} litros</p>
                <p className="text-black">Valor Gasto: R$ {gasto}</p>
              </div>
            )}
          </>
        );
      case "geracao-residuos":
        return (
          <div className="p-4">
            <div className="bg-gray-900 p-4 rounded shadow">
              <WasteAreaCharts />
            </div>
          </div>
        );
      case "recurso-gasto":
        return (
          <div className="p-4">
            <div className="bg-gray-900 p-4 rounded shadow">
              <FuelExpensesChart />
            </div>
          </div>
        );
      case "emissao-carbono":
        return (
          <div className="p-4">
            <div className="p-4 rounded shadow">
              <CarbonEmissionChart />
            </div>
          </div>
        );
        default:
          return (
            <div className="text-center">
              {/* Título do Sistema */}
              <h1 className="text-3xl font-bold text-white mb-4">
                Sistema de Coleta Inteligente
              </h1>
              <h1 className="text-2xl font-bold text-white mb-4">
                Gerador de Relatórios Administrativo
              </h1>
              {/* Adicionando espaçamento entre os títulos */}
              <div className="mb-20"></div> {/* Espaçamento adicional */}
              {/* Mensagem para selecionar o relatório */}
              <h2 className="text-xl font-bold text-white">
                Selecione um relatório na barra lateral
              </h2>
              <div className="mb-20"></div> {/* Espaçamento adicional */}
            </div>
          );
    }
  };

  const handleBackToHome = () => {
    setSelectedReport(""); // Limpa o relatório selecionado
    setCaminhaoId(""); // Limpa o ID do caminhão
    setLocalDate(""); // Limpa a data
    setDistancia(""); // Limpa a distância
    setCombustivel(""); // Limpa o combustível
    setGasto(""); // Limpa o gasto
  };
  
  const handleReportSelection = (report: string) => {
    setSelectedReport(report); // Atualiza o relatório selecionado
    setCaminhaoId(""); // Limpa o ID do caminhão
    setLocalDate(""); // Limpa a data
    setDistancia(""); // Limpa a distância
    setCombustivel(""); // Limpa o combustível
    setGasto(""); // Limpa o gasto
  };
  
  

  const getButtonClasses = (report: string) => {
    return selectedReport === report
      ? "w-full text-left p-3 hover:bg-[#65E6B2] text-white rounded-lg transition-colors duration-200 bg-[#65E6B2] shadow-md"
      : "w-full text-left p-3 hover:bg-[#65E6B2] text-white rounded-lg transition-colors duration-200 bg-[#65E6B2] bg-opacity-70 hover:bg-opacity-100";
  };

  return (
    <div className="flex bg-primaryBackground min-h-screen">
      {/* Barra Lateral */}
      <aside className="w-64 text-white h-screen p-5 shadow-md bg-gray-900 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-6">
            <button
              onClick={handleBackToHome}
              className="text-white text-2xl transition-transform transform hover:scale-110 hover:bg-[#65E6B2] hover:rounded-full p-2 transition-colors duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faHome} />
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-6 text-white">Relatórios</h2>
          <ul>
            <li className="py-1">
              <button
                className={getButtonClasses("distancia-percorrida")}
                onClick={() => handleReportSelection("distancia-percorrida")}
              >
                Informações por Caminhão
              </button>
            </li>
            <li className="py-1">
              <button
                className={getButtonClasses("geracao-residuos")}
                onClick={() => handleReportSelection("geracao-residuos")}
              >
                Geração de Resíduos por Área
              </button>
            </li>
            <li className="py-1">
              <button
                className={getButtonClasses("recurso-gasto")}
                onClick={() => handleReportSelection("recurso-gasto")}
              >
                Recursos
              </button>
            </li>
            <li className="py-1">
              <button
                className={getButtonClasses("emissao-carbono")}
                onClick={() => handleReportSelection("emissao-carbono")}
              >
                Emissão de Carbono
              </button>
            </li>
          </ul>
        </div>

        {/* Logo do Projeto */}
        <div className="flex justify-center mt-8">
        <a href="/login">
          <img
            src="/logosicoin.png"
            alt="Logo do Projeto"
            className="w-32 h-32 object-contain"
          />
          </a>
        </div>
      </aside>

      {/* Conteúdo Central */}
      <main
  className="flex-1 p-8 relative overflow-auto flex items-center justify-center"
  style={{
    backgroundImage: "url('/artesicoin.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
  <div className="relative z-10 w-full">
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg overflow-auto">
      {renderGraph()}
    </div>
  </div>
</main>

    </div>
  );
}
