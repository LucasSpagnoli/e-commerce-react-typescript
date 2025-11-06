import { createContext, type ReactNode, useEffect, useState } from 'react'

interface AuthContextType {
    username: string;
    email: string;
    password: string;
    isLogged: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: AuthProviderProps) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    function login(username:string, email: string, password: string){
        const hashedPassword = '' // busca no banco de dados pela senha correspondente ao email?
        if (/* email, user achado no banco */ ){
            email === emailAchado ? setEmail(email) : console.log('email incorreto')
            username === userAchado ?  setUsername(username) : console.log('user incorreto')
        }
    }

    return (
        <AuthContext.Provider
            value={{
                username,
                email,
                password,
                isLogged,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;