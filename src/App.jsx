import { Navigate, Route, Routes, createContext } from "react-router-dom";

import { CitiesProvider } from "./context/CitiesContext";

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

function App() {
  return (
    <div className="container">
      <Navbar />
      <CitiesProvider>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CitiesList />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="create-memo" element={<CreateMemo />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CitiesProvider>
      <Footer />
    </div>
  );
}

export default App;
