import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ProjectManagement from "./pages/ProjectManagement";
import DesignWizard from "./pages/DesignWizard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProjectManagement />} />
          <Route path="design-wizard" element={<DesignWizard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
