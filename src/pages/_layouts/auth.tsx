import { Pizza } from 'lucide-react';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased">
      <div className="flex flex-col h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground justify-between">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza className="w-5 h-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  );
};
