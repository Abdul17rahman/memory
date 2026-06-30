import React from "react";

export default function CitiesList({ cities }) {
  return (
    <div>
      <ul>
        {cities.map((c) => (
          <li key={c.city}>
            {c.emoji} - {c.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
