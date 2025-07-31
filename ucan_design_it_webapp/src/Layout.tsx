import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>Ucan Design It Webapp</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
