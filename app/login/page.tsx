'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importando o useRouter

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Inicializando o useRouter

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifique se os campos de login estão preenchidos
    if (username && password) {
      // Simulação de login - Aqui você pode adicionar a lógica de autenticação (API, verificação de usuário, etc.)
      router.push("/"); // Redireciona para a página principal após o login
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <div
      className="flex min-h-screen justify-center items-center bg-primaryBackground"
      style={{
        backgroundImage: "url('/artesicoin.jpeg')", // Caminho para a imagem de fundo
        backgroundSize: "cover", // Faz a imagem cobrir toda a tela
        backgroundPosition: "center", // Centraliza a imagem
        backgroundAttachment: "fixed", // Imagem fixa enquanto rola
      }}
    >
      {/* Camada de opacidade sobre a imagem */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg">
        {/* Título sobre a imagem */}
        <div className="flex justify-center mb-4">
          <h1 className="text-3xl font-bold text-center text-white">Sistema de Coleta Inteligente</h1>
        </div>

        {/* Logo no centro do formulário */}
        <div className="flex justify-center mb-6">
          <img
            src="/logosicoin.png" // Caminho para o logo
            alt="Logo do Sistema"
            className="w-32 h-32 object-contain"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black"
              placeholder="Digite seu nome de usuário"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-[#65E6B2] text-white rounded-lg hover:bg-[#4AC798] focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <span>Não possui uma conta? </span>
          <a href="/register" className="text-[#65E6B2] hover:underline">Registre-se</a>
        </div>
      </div>
    </div>
  );
}
