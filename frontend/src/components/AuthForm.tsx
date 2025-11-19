import { useState } from "react";

interface AuthFormProps {
    type: 'login' | 'register';
    onSubmit: (data: FormData) => void;
    emailError?: boolean;
    passwordError?: boolean;
}

interface FormData {
    email: string;
    password: string;
    username?: string;
}


export function AuthForm({ type, onSubmit, emailError, passwordError }: AuthFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ email, password, username });
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>

                {type === 'register' && (
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                            Nome de usuário
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Seu nome de usuário"
                            required
                        />
                    </div>
                )}

                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={
                        "w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 " +
                        (emailError
                            ? "border-red-500 focus:ring-red-400"
                            : "border-gray-300 focus:ring-black")
                    }
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
                    className={
                        "w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 " +
                        (passwordError
                            ? "border-red-500 focus:ring-red-400"
                            : "border-gray-300 focus:ring-black")
                    }
                    placeholder="••••••••"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full clickable transition-all bg-black text-white rounded-xl py-2 font-medium hover:bg-gray-800"
            >
                {type === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>
        </form>
    );
}