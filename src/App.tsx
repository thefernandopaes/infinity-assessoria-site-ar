import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index.tsx";
import Sobre from "./pages/Sobre.tsx";
import Servicos from "./pages/Servicos.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import FAQPage from "./pages/FAQPage.tsx";
import Contato from "./pages/Contato.tsx";
import Transporte from "./pages/setores/Transporte.tsx";
import Estudantil from "./pages/setores/Estudantil.tsx";
import Turismo from "./pages/setores/Turismo.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/servicos/:slug" element={<ServiceDetail />} />
          <Route path="/setores/transporte" element={<Transporte />} />
          <Route path="/setores/estudantil" element={<Estudantil />} />
          <Route path="/setores/turismo" element={<Turismo />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
