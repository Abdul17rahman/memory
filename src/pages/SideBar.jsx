import { Outlet } from "react-router-dom";
import AppNav from "../components/AppNav.jsx";

import "../styles/sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <AppNav />
      <Outlet />
    </div>
  );
}
