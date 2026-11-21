import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./Dashboard";
import DemandForecasting from "./pages/DemandForecasting";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/demand"
          element={<DemandForecasting />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
