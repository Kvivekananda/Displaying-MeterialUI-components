import * as React from "react";
import { useState } from "react";
import Card from "./Card";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, CssBaseline, Switch } from "@mui/material";

const candidates = [
  { label: "Vivekananda", id: 1 },
  { label: "Srini", id: 2 },
  { label: "Praneeth", id: 3 },
  { label: "Ravi", id: 4 },
];

const candidateData = {
  Vivekananda: {
    description:
      "We’d love to know more about you! Please share your details below, Vivekananda 😊",
  },
  Srini: {
    description:
      "We’d love to know more about you! Please share your details below, Srini 😊",
  },
  Praneeth: {
    description:
      "We’d love to know more about you! Please share your details below,Praneeth 😊",
  },
  Ravi: {
    description:
      "We’d love to know more about you! Please share your details below, Ravi 😊",
  },
};

export default function Home() {
  const [selectedCandidate, setSelectedCandidate] = React.useState(null);
  const [showCard, setShowCard] = React.useState(false);

  const handleSubmit = () => {
    if (selectedCandidate) {
      setShowCard(true);
    }
  };
  const [darkMode, setDarkMode] = useState(false);
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#182c4c" : "#fff", // overall background
        paper: darkMode ? "#182c4c" : "#fff", // for Cards, Paper, etc.
      },
      text: {
        primary: darkMode ? "#fff" : "#000", // default text color
        secondary: darkMode ? "#ddd" : "#555", // secondary text
      },
    },
  });

  return (
    <div>
      <Box
        sx={{
          p: 2,
          bgcolor: "#f5f5f5",
          mb: 2,
          borderRadius: 1,
          padding: "40px",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          INPUTS COMPONENT
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Below, you can view all the fields and properties of the Material-UI
          Input component.
        </Typography>
      </Box>
      <div style={{ padding: "0px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2
              style={{
                marginLeft: "46px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Select Candidate
            </h2>
          </div>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ padding: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    marginRight: "0px",
                    fontWeight: "bold",
                    marginTop: "0px",
                  }}
                >
                  Enable DarkMode:
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} />
              </Box>
            </Box>
          </ThemeProvider>
        </div>

        <Box sx={{ padding: 2, marginTop: "-35px", marginLeft: "30px" }}>
          <Autocomplete
            options={candidates}
            getOptionLabel={(option) => option.label}
            onChange={(event, value) => setSelectedCandidate(value?.label)}
            sx={{ width: 300, marginBottom: 2 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Candidate" />
            )}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>

          {showCard && selectedCandidate && (
            <Box sx={{ marginTop: 3, marginRight: "30px" }}>
              <Card
                title={selectedCandidate}
                description={candidateData[selectedCandidate].description}
              />
            </Box>
          )}
        </Box>
      </div>
    </div>
  );
}
