import { useNavigate } from "react-router-dom";

import "../styles/map-layout.css";

export default function MapLayout() {
  const navigate = useNavigate();
  return (
    <div
      className="map-layout"
      onClick={() => {
        navigate("/app/create-memo");
      }}
    >
      MapLayout
    </div>
  );
}
