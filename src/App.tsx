import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navigation } from "./components/Navigation";
import ProductCatalog from "./components/ProductCatalouge";
import { ProductsSection } from "./components/ProductsSection";
import { ServicesSection } from "./components/ServicesSection";
import { SolutionsBanner } from "./components/SolutionsBanner";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen" style={{ background: "var(--porcelain)" }}>
            <Navigation></Navigation>
            <main>
              <HeroSection />
              <SolutionsBanner />
              <AboutSection />
              <ProductsSection />
              <ServicesSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
        }
      />
      <Route path="/products" element={<ProductCatalog />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      {/* ✅ Catch-all route for unknown paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
