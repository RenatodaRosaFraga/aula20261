import Footer from "../components/Footer";
import Header from "../components/Header";

export default function SistemaLayout({ children }: { children: React.ReactNode }) {
  return (
    /* A classe min-h-screen garante que o container tenha no mínimo a altura da tela.
       O flex-col empilha Header, Main e Footer.
    */
    <div className="relative flex min-h-screen flex-col bg-slate-50">
      
      {/* A Sidebar sendo flutuante (fixed), não ocupa espaço no fluxo aqui, 
          então o Header e o Main encostam no topo/esquerda normalmente. 
      */}
      {/* <Sidebar /> */}

      <Header />

      {/* flex-1: Faz o main 'esticar' para preencher todo o espaço vazio,
          empurrando o Footer para o final da página.
      */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="w-full">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}