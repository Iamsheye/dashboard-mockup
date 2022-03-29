import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
