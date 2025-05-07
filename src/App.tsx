import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import LawyerList from "./components/LawyerList";
import LawyerDetail from "./components/LawyerDetail";
import ScrollToTop from "./commom/ScrollToTop";
import "aos/dist/aos.css";
import AOS from "aos";
import ServiceDetail from "./components/ServiceDetail";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { i18n } = useTranslation();
  // Current active language code, e.g. "en", "mm"
  const currentLanguage = i18n.language;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${currentLanguage === "mm" ? "mm-line-height" : ""}`}>
      <Navbar />
      <ScrollToTop />
      {/* Add this wrapper for padding below the fixed navbar */}
      <div className="pt-[92px] flex-grow">
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Contact />
                </>
              }
            />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/lawyers" element={<LawyerList />} />
            <Route path="/lawyers/:lawyerId" element={<LawyerDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      <footer className="bg-blue-900 text-white text-center p-4">
        &copy; {new Date().getFullYear()} LawFirm. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
