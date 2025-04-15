import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BenefitsList from "./pages/BenefitsList";
import BenefitDetail from "./pages/BenefitDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/beneficios" replace />} />
        <Route path="/beneficios" element={<BenefitsList />} />
        <Route path="/beneficio/:id" element={<BenefitDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

