import { NavLink } from "react-router-dom";
import "../styles/app-nav-list.css";

export default function AppNav() {
  return (
    <div className="app-nav">
      <ul className="app-nav-list">
        <li>
          <NavLink to="/app/cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="/app/countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}
