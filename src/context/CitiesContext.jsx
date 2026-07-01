import { createContext } from "react";
import { useState, useEffect } from "react";

const URL = "http://127.0.0.1:9001";

const CitiesContext = createContext([]);

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch(`${URL}/cities`)
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error("Error fetching cities:", error));
  }, []);

  return (
    <CitiesContext.Provider value={{ cities }}>
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesContext, CitiesProvider };
