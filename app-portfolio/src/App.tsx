import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./Theme/index";
import Container from "./components/Container";
import LandingPage from "./components/pages/landingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}
export default App;
