import React from "react";

export default function CitiesList({ cities }) {
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
