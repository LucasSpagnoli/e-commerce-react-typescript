import { type JSX, useContext } from "react";
import { AuthForm } from "../components/AuthForm";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/authContext";
import { login } from "../services/auth";

export function Login(): JSX.Element {
    const navigate = useNavigate();
    const { login: setUser, isLogged, logout } = useContext(AuthContext);

    const handleLogin = async (data: { email: string; password: string }) => {
        try {
            const response = await login(data.email, data.password);
            setUser({ username: response.user.username, email: response.user.email, token: response.token });
            navigate('/');
        } catch (error) {
            console.error("Erro no login:", error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
            <div className="w-full max-w-sm bg-gray-200 shadow-md rounded-2xl p-8">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Login
                </h1>
                {!isLogged ? (
                    <>
                        <AuthForm type="login" onSubmit={handleLogin} />
                        <p className="text-center text-sm text-gray-600 mt-4">
                            Não tem uma conta?{" "}
                            <a href="/register" className="text-black font-medium hover:underline">
                                Cadastre-se
                            </a>
                        </p>
                    </>
                ) : (
                    <button
                        onClick={() => {
                            logout();
                            navigate('/');
                        }}
                        className="mt-4 w-full py-2 text-center bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 active:bg-red-800 transition-all"
                    >
                        Logout
                    </button>
                )}
            </div>
        </main>
    );
}