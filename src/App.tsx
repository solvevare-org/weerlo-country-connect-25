import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import WeerloFooter from "./components/WeerloFooter";
import WeerloHome from "./pages/WeerloHome";
import WeerloAbout from "./pages/WeerloAbout";
import WeerloTechnology from "./pages/WeerloTechnology";
import WeerloESG from "./pages/WeerloESG";
import WeerloNews from "./pages/WeerloNews";
import WeerloContact from "./pages/WeerloContact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<WeerloHome />} />
          <Route path="/about" element={<WeerloAbout />} />
          <Route path="/our-technology" element={<WeerloTechnology />} />
          <Route path="/esg-impact" element={<WeerloESG />} />
          <Route path="/news" element={<WeerloNews />} />
          <Route path="/contact" element={<WeerloContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WeerloFooter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
