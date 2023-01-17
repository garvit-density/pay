import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useState } from "react";
import EnterAmount from "./components/EnterAmount";
import TransferFund from "./components/TransferFund";
import Reference from "./components/Reference";
import green from "@mui/material/colors/green";
import Final from "./components/Final";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
// 4 steps to be displayed on top progress bar (non-clickable)

const steps = [
  "Enter Amount",
  "Transfer Fund",
  "Enter Reference ID",
  "Success",
];

export default function Pay() {
  const [Data, setData] = useState({
    accountNumber: "",
    depositAmount: "",
    referenceId: "",
  });
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
    <Container
      maxWidth="md"
      sx={{
        width: "100%",
        border: "1px solid",
        mt: 5,
        pt: 2,
        pl: "0px !important",
        pr: "0px !important",
        backgroundColor: "#1F1F24",
        height: "500px",
      }}
    >
      {/* top progress bar  */}
      <Top activeStep={activeStep} steps={steps}></Top>
      {/* Middle Content  */}
      <Middle activeStep={activeStep} steps={steps} setData={setData}></Middle>
      {/* Footer Below  */}
      <Footer
        activeStep={activeStep}
        steps={steps}
        handleNext={handleNext}
        handleBack={handleBack}
        handleReset={handleReset}
      ></Footer>
    </Container>
  );
}
