import { createContext, type ReactNode, useEffect, useState } from 'react'

interface AuthContextType {
    username: string;
    email: string;
    isLogged: boolean;
    login: (userData: { username: string; email: string; token: string }) => void;
    logout: () => void;
    loading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: AuthProviderProps) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(true)

    const login = (userData: { username: string; email: string; token: string }) => {
        setUsername(userData.username);
        setEmail(userData.email);
        setIsLogged(true);
        localStorage.setItem("token", userData.token);
    };

    const logout = () => {
        setUsername('');
        setEmail('');
        setIsLogged(false);
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLogged(true);
        }
        setLoading(false)
    }, []);

    return (
        <AuthContext.Provider value={{ username, email, isLogged, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
