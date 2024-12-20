'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    if (name && email && username && password) {
      // Simulação de registro bem-sucedido
      router.push("/login");
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <div
      className="flex min-h-screen justify-center items-center bg-primaryBackground"
      style={{
        backgroundImage: "url('/artesicoin.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src="/logosicoin.png"
            alt="Logo do Sistema"
            className="w-32 h-32 object-contain"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6">Registrar</h2>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black"
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black"
              placeholder="Escolha um nome de usuário"
              required
            />
          </div>

          <div className="mb-4">
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

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirme a Senha</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-black"
              placeholder="Confirme sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-[#65E6B2] text-white rounded-lg hover:bg-[#4AC798] focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
          >
            Registrar
          </button>
        </form>

        <div className="text-center mt-4">
          <span>Já possui uma conta? </span>
          <a href="/login" className="text-[#65E6B2] hover:underline">Faça login</a>
        </div>
      </div>
    </div>
  );
}
