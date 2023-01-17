import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, createTheme } from "@mui/material";
import { useState } from "react";
import EnterAmount from "./components/EnterAmount";
import TransferFund from "./components/TransferFund";
import Reference from "./components/Reference";
import { ThemeProvider } from "@emotion/react";
import green from "@mui/material/colors/green";

const theme = createTheme({
  stepper: {
    color: "green",
  },
});

// 4 steps to be displayed on top progress bar (non-clickable)
const steps = [
  "Enter Amount",
  "Transfer Fund",
  "Enter Reference ID",
  "Success",
];

export default function Pay() {
  // steps are 0-based indexed
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          width: "100%",
          border: "1px solid",
          mt: 5,
          p: 2,
        }}
      >
        {/* top progress bar  */}
        <Stepper activeStep={activeStep} alternativeLabel sx={{}}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step
                key={label}
                {...stepProps}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "success.main", // circle color (COMPLETED)
                  },
                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                    {
                      color: "black", // Just text label (COMPLETED)
                    },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "success.main", // circle color (ACTIVE)
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      // color: "common.white", // Just text label (ACTIVE)
                      color: "black",
                    },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "black", // circle's number (ACTIVE)
                  },
                }}
              >
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length - 1 ? (
          <>
            {/* final congrats!! page */}
            <Typography sx={{ mt: 2, mb: 1 }}>
              Congratulations! You have successfully transferred.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained">Trade Now</Button>
            {/* last screen -- cancel and trade now buttons should be here */}
          </>
        ) : (
          <>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>
            Main content here {activeStep + 1}
          </Typography> */}
            {activeStep === 0 && <EnterAmount></EnterAmount>}
            {activeStep === 1 && <TransferFund></TransferFund>}
            {activeStep === 2 && <Reference></Reference>}
            {/* here will add 4 components -- above  */}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}
