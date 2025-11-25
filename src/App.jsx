import React from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import PlantDetails from "./components/PlantDetails";
import Aboutus from "./components/Aboutus";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "./components/Loader";
// import PlantCategories from "./components/PlantCategories";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start loader on route change
    setLoading(true);

    // Simulate small delay for effect
    const timer = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Services />} path="/service" />
            <Route element={<Aboutus />} path="/about" />
            <Route path="/:category/:item" element={<PlantDetails />} />
          </Routes>
          {/* <PlantCategories /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
