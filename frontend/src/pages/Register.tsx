import { type JSX, useContext } from "react";
import { AuthForm } from "../components/AuthForm";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/authContext";
import { register } from "../services/auth";

export function Register(): JSX.Element {
    const navigate = useNavigate();
    const { login: setUser } = useContext(AuthContext);

    const handleRegister = async (data: { email: string; password: string; username?: string }) => {
        try {
            const response = await register(data.email, data.username!, data.password);
            setUser({ username: response.user.username, email: response.user.email, token: response.token });
            navigate('/');
        } catch (error) {
            console.error('Erro no registro:', error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
            <div className="w-full max-w-sm bg-gray-200 shadow-md rounded-2xl p-8">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Cadastro
                </h1>
                <AuthForm type="register" onSubmit={handleRegister} />
                <p className="text-center text-sm text-gray-600 mt-4">
                    Já tem uma conta?{" "}
                    <a href="/login" className="text-black font-medium hover:underline">
                        Faça login
                    </a>
                </p>
            </div>
        </main>
    );
}