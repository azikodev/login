import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="align-element">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
