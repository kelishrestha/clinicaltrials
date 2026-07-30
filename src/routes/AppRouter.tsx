import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import StudyDetails from "../pages/StudyDetails";
import StudyStatsPage from "@/pages/StudyStats";
import MetadataExplorer from "@/pages/MetadataExplorer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studies/:nctId" element={<StudyDetails />} />
        <Route path="/stats" element={<StudyStatsPage />} />
        <Route path="/metadata" element={<MetadataExplorer />} />
      </Routes>
    </BrowserRouter>
  );
}
