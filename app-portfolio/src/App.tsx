import React from "react";
import "./App.css";
import { ThemeProvider, CssBaseline} from "@mui/material";
import theme from "./Theme/index";
import MainRouter from "./components/routers/MainRouter";
import Container from "./components/Container";
function App() {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline  />
    <Container>
    <MainRouter />
  </Container>
  </ThemeProvider>
);
}
export default App;