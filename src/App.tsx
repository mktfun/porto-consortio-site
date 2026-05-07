import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Cotacao from "./pages/Cotacao";

// Consórcio Pages
import Imoveis from "./pages/consorcio/Imoveis";
import Automoveis from "./pages/consorcio/Automoveis";
import Pesados from "./pages/consorcio/Pesados";
import Solar from "./pages/consorcio/Solar";
import Agro from "./pages/consorcio/Agro";
import Investimento from "./pages/consorcio/Investimento";
import Empresarial from "./pages/consorcio/Empresarial";

// Institutional pages
import SobreNos from "./pages/institucional/SobreNos";
import Cultura from "./pages/institucional/Cultura";
import Clientes from "./pages/institucional/Clientes";
import TrabalheConosco from "./pages/institucional/TrabalheConosco";
import Contato from "./pages/institucional/Contato";
import Artigos from "./pages/institucional/Artigos";
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

          {/* Consórcio Products */}
          <Route path="/consorcio/imoveis" element={<Imoveis />} />
          <Route path="/consorcio/automoveis" element={<Automoveis />} />
          <Route path="/consorcio/pesados" element={<Pesados />} />
          <Route path="/consorcio/solar" element={<Solar />} />
          <Route path="/consorcio/agro" element={<Agro />} />
          <Route path="/consorcio/investimento" element={<Investimento />} />
          <Route path="/consorcio/empresarial" element={<Empresarial />} />

          {/* Institucional */}
          <Route path="/institucional/sobre-nos" element={<SobreNos />} />
          <Route path="/institucional/cultura" element={<Cultura />} />
          <Route path="/institucional/clientes" element={<Clientes />} />
          <Route path="/institucional/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/institucional/contato" element={<Contato />} />
          <Route path="/institucional/artigos" element={<Artigos />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
