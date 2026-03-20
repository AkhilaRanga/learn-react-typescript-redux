import { BrowserRouter, Routes, Route, Link } from "react-router";

export const Router = () => (
  <BrowserRouter>
    <nav>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<>Home</>} />
      <Route path="/about" element={<>About</>} />
    </Routes>
  </BrowserRouter>
);
