import React, { useEffect } from "react";
import "./App.css";
import backgroundImage from './components/images/background/blurry-gradient-haikei.svg';
import { ThemeProvider, CssBaseline} from "@mui/material";
import theme from "./Theme/index";
import MainRouter from "./components/routers/MainRouter";
import Container from "./components/Container";

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundAttachment = '';
    };
  }, [])
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

