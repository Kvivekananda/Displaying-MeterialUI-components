import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import FeedbackSurfaces from "./components/FeedbackSurfaces";
import NavigationLayout from "./components/NavigationLayout";
import DataGrid1 from "./components/DataGrid1";
import DataGrid2 from "./components/DataGrid2";
import AFC from "./components/AFC";
import DTP from "./components/DTP";
import BarChart from "./components/BarChart";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/FeedbackSurfaces" element={<FeedbackSurfaces />} />
            <Route path="/NavigationLayout" element={<NavigationLayout />} />
            <Route path="/DataGrid1" element={<DataGrid1 />} />
            <Route path="/DataGrid2" element={<DataGrid2 />} />
            <Route path="/AFC" element={<AFC />} />
            <Route path="/DTP" element={<DTP />} />
             <Route path="/BarChart" element={<BarChart />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
