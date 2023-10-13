import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const ExSidebar = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <aside style={{ width: "200px" }}>
        <h2>Example</h2>
        <ul>
          <li>
            <Link to="/example/exios">Exios</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default ExSidebar;
