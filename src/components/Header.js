import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Header() {
  const location = useLocation();
  const [value, setValue] = useState(() => {
    switch (location.pathname) {
      case "/":
        return 0;
      case "/about":
        return 1;
      case "/FeedbackSurfaces":
        return 2;
      case "/NavigationLayout":
        return 3;
      case "/DataGrid1":
        return 4;
      case "/DataGrid2":
        return 5;
      case "/AFC":
        return 6;
      case "/DTP":
        return 7;
      case "/BarChart":
        return 8;
      case "/LinesChart":
        return 9;
      case "/PieChart1":
        return 10;
      case "/ScatterChart":
        return 11;
      default:
        return 0;
    }
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header
      style={{
        background: "#9e6976",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="#ffffff"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            label="Input"
            sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            component={Link}
            to="/"
          />
          <Tab
            label="DataDisplay"
            sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            component={Link}
            to="/about"
          />
          <Tab
            label="FeedbackSurfaces"
            sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            component={Link}
            to="/FeedbackSurfaces"
          />
          <Tab
            label="NavigationLayout"
            sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            component={Link}
            to="/NavigationLayout"
          />
          <Tab
            label="DataGrid1"
            sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            component={Link}
            to="/DataGrid1"
          />
          <Tab
            label="DataGrid2"
            sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            component={Link}
            to="/DataGrid2"
          />
          <Tab
            label="AFC"
            sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            component={Link}
            to="/AFC"
          />
          <Tab
            label="DTP"
            sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            component={Link}
            to="/DTP"
          />
          <Tab
            label="BarChart"
            sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            component={Link}
            to="/BarChart"
          />
          <Tab
            label="LinesChart"
            sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            component={Link}
            to="/LinesChart"
          />
          <Tab
            label="PieChart"
            sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            component={Link}
            to="/PieChart1"
          />
          <Tab
            label="ScatterChart"
            sx={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
            component={Link}
            to="/Scatter"
          />
        </Tabs>
      </Box>
    </header>
  );
}

export default Header;
