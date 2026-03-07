'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export class Usuario {
    constructor(
        public codigo: number,
        public name: string
    ) { }
}

interface AuthContextType {
    usuario: Usuario | null,
    token: string | null,
    login: (usuario: Usuario, token: string) => void,
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const usuarioRecover = Cookies.get('usuario');
        const tokenRecover = Cookies.get('token');

        if (usuarioRecover && tokenRecover) {
            try {
                setUsuario(JSON.parse(usuarioRecover));
                setToken(tokenRecover);
            } catch (e) {
                console.error(e);
            }

        }
    }, []);

    const login = (novoUsuario: Usuario, novoToken: string) => {
        // Atualiza o estado do React
        setUsuario(novoUsuario);
        setToken(novoToken);

        // CORREÇÃO: Use 'novoUsuario' e 'novoToken' aqui. 
        // Se usar 'usuario' ou 'token', você estará salvando o estado antigo (null).
        Cookies.set('usuario', JSON.stringify(novoUsuario), { expires: 7 });
        Cookies.set('token', novoToken, { expires: 7, secure: true });
    }

    const logout = () => {
        setUsuario(null);
        setToken(null);
        Cookies.remove('usuario');
        Cookies.remove('token');
    }

    return (
        <AuthContext.Provider value={{ usuario, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth deve ser usado dentro do provider!');
    return context;
}