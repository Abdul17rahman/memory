import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppLayout from "./pages/AppLayout";
import CitiesList from "./screens/CitiesList";
import CountriesList from "./screens/CountriesList";
import CreateMemo from "./pages/CreateMemo";

const URL = "http://127.0.0.1:9001";

function App() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`${URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CitiesList cities={cities} />} />
          <Route path="countries" element={<CountriesList />} />
          <Route path="create-memo" element={<CreateMemo />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
