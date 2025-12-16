import { type JSX, useContext, useState } from "react";
import { AuthForm } from "../components/AuthForm";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/authContext";
import { login } from "../services/auth";

export function Login(): JSX.Element {
    const navigate = useNavigate();
    const { login: setUser, isLogged, logout, username } = useContext(AuthContext);
    const [emailCerto, setEmailCerto] = useState(true)
    const [senhaCerta, setSenhaCerta] = useState(true)
    const handleLogin = async (data: { email: string; password: string }) => {
        setEmailCerto(true);
        setSenhaCerta(true);
        try {
            const response = await login(data.email, data.password);
            setUser({ username: response.user.username, email: response.user.email, token: response.token });
            navigate('/');
        } catch (error: any) {
            const status = error.response.status

            if (status == 401) {
                setEmailCerto(false)
            }
            if (status == 402) {
                setSenhaCerta(false)
            }
            console.error("Erro no login:", error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
            <div className="w-full max-w-sm bg-gray-200 shadow-md rounded-2xl p-8">

                {!isLogged ? (
                    <>
                        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                            Login
                        </h1>
                        <AuthForm
                            type="login"
                            onSubmit={handleLogin}
                            emailError={!emailCerto}
                            passwordError={!senhaCerta}
                        />

                        {!senhaCerta && <p className="text-red-600">Senha incorreta</p>}
                        {!emailCerto && <p className="text-red-600">Email incorreto</p>}
                        <p className="text-center text-sm text-gray-600 mt-4">
                            Não tem uma conta?{" "}
                            <a href="/register" className="text-black font-medium hover:underline">
                                Cadastre-se
                            </a>
                        </p>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                            Olá, {username}!
                        </h1>
                        <button
                            onClick={() => {
                                logout();
                                navigate('/');
                            }}
                            className=" clickable mt-4 w-full py-2 text-center bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 active:bg-red-800 transition-all"
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </main>
    );
}