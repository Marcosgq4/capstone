import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Reservations from "./components/Reservations";
import ConfirmedBooking from "./components/ConfirmedBooking";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ScrollToSection = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/" && !location.hash) {
      // Scroll to the top of the page if on the home route without a hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.hash) {
      // Scroll to the section with the ID matching the hash
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <Header />
      <ScrollToSection />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Highlights />
              <Testimonials />
              <About />
              <Reservations />
            </>
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
