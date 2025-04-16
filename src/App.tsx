import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BenefitsList from "./pages/BenefitsList";
import BenefitsDetails from "./pages/BenefitDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BenefitsList />} />
        <Route path="/beneficios" element={<BenefitsList />} />
        <Route path="/beneficio/:id" element={<BenefitsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

