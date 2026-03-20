import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const Router = () => (
  <BrowserRouter>
    <nav>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/about" element={<></>} />
    </Routes>
  </BrowserRouter>
);
