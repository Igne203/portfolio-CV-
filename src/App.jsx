import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import ContactsPage from "./pages/Contacts/ContactsPage.jsx";
import Header from "./components/Header/header.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />

      </Routes>
    </>
  );
}

export default App;
