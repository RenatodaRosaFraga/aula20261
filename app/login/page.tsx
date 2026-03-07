'use client';

import React, { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, Usuario } from '../context/AuthContext';

async function handleLoginAction(prevState: any, formData: FormData) {
  try {
    await new Promise((res) => setTimeout(res, 800));

    // Retorna os dados do mock para o state do useActionState
    return { 
      success: true, 
      user: new Usuario(1, "Renato Fraga"), 
      token: "jwt-token-liberado-para-teste" 
    };
  } catch (error) {
    return { 
      success: false, 
      message: "Erro crítico ao entrar no sistema!" 
    };
  }
}

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(handleLoginAction, null);

  useEffect(() => {
    // Verificamos se a ação foi bem sucedida
    if (state?.success && state.user && state.token) {
      
      // 1. Atualiza o contexto (isso muda o 'usuario' para logado)
      login(state.user, state.token);
      
      // 2. Pequeno fôlego para o React processar a mudança de contexto
      // e o AuthGuard do layout liberar a passagem.
      const redirectTimeout = setTimeout(() => {
        router.push('/home');
      }, 50);

      return () => clearTimeout(redirectTimeout);
    }
  }, [state, login, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFDFD] px-6 font-sans antialiased">
      <a href="/" className="mb-10 flex items-center gap-2 transition-transform hover:scale-105">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white font-black text-2xl shadow-xl shadow-slate-950/20">
          TA
        </div>
        <span className="text-2xl font-bold tracking-tighter text-slate-950 uppercase">TaskAgile</span>
      </a>

      <div className="w-full max-w-[420px] rounded-[2.5rem] border border-slate-200/60 bg-white p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.06)]">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">Acesse sua conta</h2>
          <p className="mt-2 text-sm text-slate-500 font-medium italic">Modo de acesso rápido ativado.</p>
        </div>

        <form action={formAction} className="space-y-5">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
              E-mail corporativo
            </label>
            <input
              name="email"
              type="email"
              placeholder="nome@empresa.com"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-5 py-4 text-sm outline-none transition-all focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/5 text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Senha</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-5 py-4 text-sm outline-none transition-all focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/5 text-slate-900"
            />
          </div>

          {state?.success === false && (
            <div className="rounded-xl bg-red-50 p-4 text-center text-xs font-bold text-red-600 border border-red-100">
              {state.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="relative w-full overflow-hidden rounded-2xl bg-slate-950 py-4 text-sm font-black text-white transition-all hover:bg-slate-800 active:scale-[0.98] disabled:opacity-70 shadow-lg shadow-slate-950/20"
          >
            {isPending ? (
               <div className="flex items-center justify-center gap-2">
                 <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                 <span>Entrando...</span>
               </div>
            ) : 'Acessar Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}