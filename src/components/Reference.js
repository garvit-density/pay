import React from "react";
import { Box } from "@mui/material";
import { Button, TextField } from "@mui/material";

function Reference() {
  return (
    <Box>
      <Box>Reference</Box>
      <Box sx={{ paddingBottom: "2%" }}>
        <Box>Enter Reference ID </Box>
        <TextField variant="filled" size="small" fullWidth>
          {" "}
        </TextField>
      </Box>
      <Box sx={{ paddingBottom: "2%" }}>
        <Box>Deposit Amount</Box>
        <TextField
          variant="filled"
          size="small"
          label="5000 this will be received from EnterAmount comp"
          disabled
          fullWidth
        ></TextField>
      </Box>
    </Box>
  );
}

export default Reference;
