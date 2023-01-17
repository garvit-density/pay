import React from "react";
import Box from "@mui/material/Box";
import EnterAmount from "./EnterAmount";
import TransferFund from "./TransferFund";
import Reference from "./Reference";
import Final from "./Final";

function Middle({ activeStep, steps, setData }) {
  return (
    <Box sx={{ height: "350px" }}>
      {" "}
      {activeStep === steps.length - 1 ? (
        <Final></Final>
      ) : (
        <>
          {activeStep === 0 && <EnterAmount setData={setData}></EnterAmount>}
          {activeStep === 1 && <TransferFund></TransferFund>}
          {activeStep === 2 && <Reference setData={setData}></Reference>}
          {/* here will add 4 components -- above  */}
        </>
      )}
    </Box>
  );
}

export default Middle;
