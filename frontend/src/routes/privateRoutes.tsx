import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/authContext";
import { useContext, type JSX } from "react";

export function PrivateRoute({ children }: { children: JSX.Element }) {
    const { isLogged, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Carregando...</div>; 
    }

    if (!isLogged) {
        return <Navigate to="/login" replace />
    }

    return children;
}

