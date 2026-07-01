import React from "react";
import { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";

export default function CitiesList() {
  const { cities } = useContext(CitiesContext);
  return (
    <div>
      <ul>
        {cities.map((c) => (
          <li key={c.id}>
            {c.emoji} - {c.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
