import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import StudyDetails from "../pages/StudyDetails";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studies/:nctId" element={<StudyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
