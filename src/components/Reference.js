import React from "react";
import { Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";

function Reference({ Data, setData }) {
  const handleReference = (event) => {
    setData({ ...Data, referenceId: event.target.value });
    console.log(Data);
  };
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
          value={Data.referenceId}
          onChange={handleReference}
        >
          {" "}
        </TextField>
      </Box>
      <Box sx={{ paddingBottom: "2%" }}>
        <Typography sx={{ color: "common.white" }}>Deposit Amount</Typography>
        <TextField
          variant="filled"
          size="small"
          label={Data.depositAmount}
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
