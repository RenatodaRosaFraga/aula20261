import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar"; // Certifique-se do import

export default function SistemaLayout({ children }: { children: React.ReactNode }) {
  return (
<div className="relative min-h-screen bg-slate-50">
      
      {/* Sidebar: Fixa e sempre visível em md+ */}
      <Sidebar />

      {/* Conteúdo: Adicionamos md:ml-64 para abrir espaço para a sidebar fixa */}
      <div className="flex flex-col min-h-screen md:ml-64 transition-all duration-300">
        
        {/* Header fixo no topo deste container */}
        <Header />

        <main className="flex-1 p-6 lg:p-10">
          <div className="mx-auto max-w-full">
            {children}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}