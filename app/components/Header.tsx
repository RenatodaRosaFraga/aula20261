export default function Header(){
return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Perfil do Usuário */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-500">
            {/* SVG Ícone de Usuário (padrão W3C) */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800 leading-tight">
              Renato Fraga
            </span>
            <span className="text-[10px] uppercase tracking-wider font-medium text-slate-400">
              Admin Sistema
            </span>
          </div>
        </div>

        {/* Botão Sair */}
        <button 
          className="group flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100"
          aria-label="Sair do sistema"
        >
          <span className="hidden sm:inline">Sair</span>
          {/* SVG Ícone de LogOut (padrão W3C) */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </button>

      </div>
    </header>
  );
}