import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroEvento from "./pages/CadastroEvento";
import Eventos from "./pages/Eventos";
import DetalhesEvento from "./pages/DetalhesEvento";
import Favoritos from "./pages/Favoritos";
import Acessibilidade from "./pages/Acessibilidade";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/cadastro-evento" element={<CadastroEvento />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/evento/:id" element={<DetalhesEvento />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/acessibilidade" element={<Acessibilidade />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;