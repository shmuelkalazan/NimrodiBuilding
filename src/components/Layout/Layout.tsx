import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import useBuildingData from "../../utils/BuildingDataProvider";
import "./Layout.css";
import Floor from "../../pages/Floor/Floor";
import Reception from "../../pages/Reception/Reception";
import Forbidden from "../../pages/Forbidden/Forbidden";

const Layout: React.FC = () => {
  const floorAccess = useSelector((state: any) => state.floorAccess);
  const { getFloorByIndex } = useBuildingData();
  console.log(floorAccess);
  return (
    <div className="layout-page">
      <nav className="navbar">
        <h1>מגדל נמרודי</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          {floorAccess.map((floor: boolean, index: number) => (
            <Link key={index} to={`/floor/${index}`}>
              {getFloorByIndex(index)?.purpose || `Floor ${index + 1}`}
            </Link>
          ))}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Reception />} />
        <Route path="/floor/:index" element={<Floor />} />
        <Route path="/forbidden" element={<Forbidden />} />
      </Routes>
      <Outlet />

      <footer className="layout-footer">
        <h2>About מגדל נמרודי</h2>
        <p>
          Nimrodi Tower is a prominent skyscraper in the BBC complex of Bnei
          Brak, comprising 55 floors reaching a height of 211 meters. It
          includes commercial and office spaces with a unique architectural
          style. The project, part of a larger construction initiative,
          positions the Nimrodi Tower as a key architectural landmark in the
          cityscape.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
