import React from "react";
import { Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";

function Reference({ setData }) {
  return (
    <Box
      sx={{
        //backgroundColor: "red",
        marginTop: "2%",
        marginLeft: "4%",
        marginRight: "4%",
      }}
    >
      <Typography sx={{ color: "common.white" }}>Reference</Typography>
      <Box sx={{ paddingBottom: "2%" }}>
        <Typography sx={{ color: "common.white" }}>
          Enter Reference ID{" "}
        </Typography>
        <TextField
          variant="filled"
          size="small"
          fullWidth
          InputLabelProps={{
            style: { color: "white" },
          }}
          inputProps={{ style: { color: "white" } }}
        >
          {" "}
        </TextField>
      </Box>
      <Box sx={{ paddingBottom: "2%" }}>
        <Typography sx={{ color: "common.white" }}>Deposit Amount</Typography>
        <TextField
          variant="filled"
          size="small"
          label="5000 this will be received from EnterAmount comp"
          disabled
          fullWidth
          InputLabelProps={{
            style: { color: "white" },
          }}
          inputProps={{ style: { color: "white" } }}
        ></TextField>
      </Box>
    </Box>
  );
}

export default Reference;
