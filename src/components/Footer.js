import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
function Footer({ activeStep, steps, handleNext, handleBack, handleReset }) {
  return (
    <Box>
      {activeStep == steps.length - 1 ? (
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              backgroundColor: "#2C2C34",
              width: "100%",
            }}
          >
            {/* this rest button should be removed later */}
            <Button onClick={handleReset} sx={{ color: "#FFFFFF" }}>
              Reset
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                ":hover": {
                  borderColor: "white",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "black",
                backgroundColor: "white",
                ":hover": {
                  bgcolor: "white",
                },
              }}
            >
              Trade Now
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "row",
            pt: 1,
            pb: 1,
            backgroundColor: "#2C2C34",
            width: "100%",
          }}
        >
          <Button
            color="inherit"
            onClick={handleBack}
            sx={{ mr: 1, color: "#FFFFFF" }}
          >
            {activeStep === 0 ? "Cancel" : "Back"}
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button onClick={handleNext} sx={{ color: "#FFFFFF" }}>
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Footer;
