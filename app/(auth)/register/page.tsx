import Link from 'next/link'
import { RegisterForm } from './form'

export default function RegisterPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
      <h1 className="font-semibold text-2xl text-center">SICOIN Administrador</h1>
        <h1 className="font-bold text-2xl text-center">Crie sua conta</h1>
        <RegisterForm />
        <p className="text-center">
          Já tem uma conta?{' '}
          <Link className="text-indigo-500 hover:underline" href="/login">
            Entrar
          </Link>{' '}
        </p>
      </div>
    </div>
  )
}
