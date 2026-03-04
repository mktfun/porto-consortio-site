import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Cotacao from "./pages/Cotacao";

// Institutional pages
import SobreNos from "./pages/SobreNos";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";

// Insurance pages
import AutoFrota from "./pages/seguros/AutoFrota";
import RctrC from "./pages/seguros/RctrC";
import RcDc from "./pages/seguros/RcDc";
import VidaEmGrupo from "./pages/seguros/VidaEmGrupo";
import Empresarial from "./pages/seguros/Empresarial";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cotacao" element={<Cotacao />} />
          <Route path="/sucesso" element={<Success />} />

          {/* Institutional */}
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />

          {/* Insurance */}
          <Route path="/seguros/auto-frota" element={<AutoFrota />} />
          <Route path="/seguros/rctr-c" element={<RctrC />} />
          <Route path="/seguros/rc-dc" element={<RcDc />} />
          <Route path="/seguros/vida-em-grupo" element={<VidaEmGrupo />} />
          <Route path="/seguros/empresarial" element={<Empresarial />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
