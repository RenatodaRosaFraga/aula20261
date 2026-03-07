'use client'; // Necessário para usar hooks como useEffect e useAuth

import "./globals.css";
import { AuthProvider, useAuth } from "./context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body >
        <AuthProvider>
          
            {children}
          
        </AuthProvider>
      </body>
    </html>
  );
}