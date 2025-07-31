import { Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const Layout = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <header>
        <h1>Ucan Design It Webapp</h1>
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
