/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Cars } from "./pages/Cars";
import { Drivers } from "./pages/Drivers";
import { About } from "./pages/About";
import { Visualisations } from "./pages/Visualisations";
import { Future } from "./pages/Future";
import { CarTelemetry } from "./pages/CarTelemetry";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/1" element={<CarTelemetry />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/about" element={<About />} />
          <Route path="/visualisations" element={<Visualisations />} />
          <Route path="/future" element={<Future />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
