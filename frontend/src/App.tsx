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
<<<<<<< HEAD
        <Route
  path="/demand"
  element={<DemandForecasting />}
/>
=======
>>>>>>> 0a7c95faf63294d40fe77b5023acf577de47ca10
      </Routes>
    </BrowserRouter>
  );
}

export default App;
