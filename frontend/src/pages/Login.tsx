import { type JSX, useState } from "react";

export function Login(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-sm bg-gray-200 shadow-md rounded-2xl p-8">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="user@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full clickable transition-all bg-black text-white rounded-xl py-2 font-medium hover:bg-gray-800"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Não tem uma conta?{" "}
          <a href="/register" className="text-black font-medium hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </main>
  );
}
