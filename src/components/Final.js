import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
function Final({ handleReset }) {
  return (
    <Box>
      <Typography
        sx={{ mt: 2, mb: 1, color: "common.white", fontSize: "30px" }}
      >
        Congratulations! You have successfully transferred.
      </Typography>
    </Box>
  );
}

export default Final;
