import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Description } from "@mui/icons-material";

const steps = [
  {
    label: (
      <Typography
        variant="h2"
        className="!font-semibold underline text-white"
        component="div"
      >
        <a
          href="https://eslearning.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          ElevateStakLearning
        </a>
      </Typography>
    ),
    description: (
      <Box className="space-y-4">
        <div className="flex flex-row justify-between"></div>
        <div className="flex flex-wrap justify-between gap-4">
          <Typography variant="h6">Designed using:</Typography>
          <Typography variant="h6">TypeScript</Typography>
          <Typography variant="h6">React</Typography>
          <Typography variant="h6">Node.Js</Typography>
          <Typography variant="h6">Express</Typography>
          <Typography variant="h6">MySQL</Typography>
          <Typography variant="h6">Docker</Typography>
        </div>
        <div>
          <Typography variant="h3">
            ElevateStakLearning is a web application that allows users to create
            an account, log in, and start learning. The application is designed
            to help users learn new skills and improve their knowledge. Users
            can access a wide range of courses, quizzes, and other learning
            materials. The application also allows users to track their progress
            and see how they are improving over time.
          </Typography>
        </div>
      </Box>
    ),
  },
  {
    label: "future work",
    description: "will add more stuff soon",
  },
];

export default function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          backgroundColor: "transparent",
        }}
      >
        <Typography variant="h5">{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ minHeight: 400, width: "100%", p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "white",
        }}
        activeStep={activeStep}
        nextButton={
          <Button
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              color: "white",
              "& svg": {
                color: "white",
              },
              "&.Mui-disabled": {
                color: "rgba(255, 255, 255, 0.5)",
                "& svg": {
                  color: "rgba(255, 255, 255, 0.5)",
                },
              },
            }}
          >
            Next{" "}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              color: "white",
              "& svg": {
                color: "white",
              },
              "&.Mui-disabled": {
                color: "rgba(255, 255, 255, 0.5)",
                "& svg": {
                  color: "rgba(255, 255, 255, 0.5)",
                },
              },
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
