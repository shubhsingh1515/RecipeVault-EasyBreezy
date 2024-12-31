import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router
import VideoList from "./pages/VideoList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./pages/About";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <Router>
      <Header /> {/* Header always visible */}
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/videos" element={<VideoList />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
      <Footer /> {/* Footer always visible */}
    </Router>
  );
};

export default App;
