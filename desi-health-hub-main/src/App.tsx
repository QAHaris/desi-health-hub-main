import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";
import Index from "./pages/Index.tsx";
import CaloriesPage from "./pages/CaloriesPage.tsx";
import CalculatorsPage from "./pages/CalculatorsPage.tsx";
import DietPlansPage from "./pages/DietPlansPage.tsx";
import SupplementsPage from "./pages/SupplementsPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <I18nProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/calories" element={<CaloriesPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/diet-plans" element={<DietPlansPage />} />
            <Route path="/supplements" element={<SupplementsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
