import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "./pages/HomePage";
import SolutionsPage from "./pages/SolutionsPage";
import SDRPage from "./pages/SDRPage";
import AppointmentPage from "./pages/AppointmentPage";
import ProspectionPage from "./pages/ProspectionPage";
import RecoveryPage from "./pages/RecoveryPage";
import CRMPage from "./pages/CRMPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solucoes" element={<SolutionsPage />} />
          <Route path="/solucoes/sdr" element={<SDRPage />} />
          <Route path="/solucoes/agendamento" element={<AppointmentPage />} />
          <Route path="/solucoes/prospeccao" element={<ProspectionPage />} />
          <Route path="/solucoes/recuperacao" element={<RecoveryPage />} />
          <Route path="/solucoes/crm" element={<CRMPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
