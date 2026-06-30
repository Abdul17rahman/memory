import SideBar from "../pages/SideBar";
import MapLayout from "../pages/MapLayout";
import "../styles/app-layout.css";

export default function AppLayout() {
  return (
    <div className="app-layout">
      <SideBar />
      <MapLayout />
    </div>
  );
}
