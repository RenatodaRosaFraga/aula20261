'use client';

import React from 'react';
import { useAuth } from "../context/AuthContext";
import { useRouter } from 'next/navigation';

export default function Header() {
  const { usuario, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      {/* AJUSTE: lg:pl-64 garante que o conteúdo do header não fique sob a sidebar.
          A transição suave (transition-all) evita saltos bruscos.
      */}
      <div className="flex h-16 items-center justify-between px-6 lg:pl-64 transition-all duration-300">
        
        {/* Espaçador para manter o perfil à direita se não houver nada à esquerda */}
        <div />

        <div className="flex items-center gap-4">
          {/* Perfil do Usuário */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-800 leading-tight">
                {usuario ? usuario.name : 'Convidado'}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-medium text-slate-400">
                Admin Sistema
              </span>
            </div>
          </div>

          <div className="h-6 w-px bg-slate-200 mx-2" />

          {/* Botão Sair */}
          <button 
            type="button"
            onClick={handleLogout}
            className="group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-slate-600 transition-all hover:bg-red-50 hover:text-red-600"
          >
            <span className="hidden sm:inline">Sair</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 opacity-60 group-hover:opacity-100">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}