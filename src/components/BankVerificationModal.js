import React from "react";
import Modal from "./Modal";
import { Box, Typography, TextField } from "@mui/material";
function BankVerificationModal() {
  return (
    <Modal
      title=" Bank Verification !"
      primaryName="Continue"
      secondaryName="Cancel"
    >
      <Box sx={{ padding: "27px" }}>
        <Box>
          <Box sx={{ py: "13px" }}>
            <Typography sx={{ color: "common.white" }}>Name</Typography>
            <TextField
              variant="filled"
              size="small"
              fullWidth
              inputProps={{ style: { color: "white", border: "1px solid" } }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              //  value={Data.accountNumber}
              // onChange={handleAccount}
            >
              {" "}
            </TextField>
          </Box>
          <Box sx={{ py: "13px" }}>
            <Typography sx={{ color: "common.white" }}>
              Enter Account Number
            </Typography>
            <TextField
              variant="filled"
              size="small"
              fullWidth
              inputProps={{ style: { color: "white", border: "1px solid" } }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              //  value={Data.accountNumber}
              // onChange={handleAccount}
            >
              {" "}
            </TextField>
          </Box>
          <Box sx={{ py: "13px" }}>
            <Typography sx={{ color: "common.white" }}>
              Enter IFSC Code
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              //  value={Data.accountNumber}
              // onChange={handleAccount}
            >
              {" "}
            </TextField>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default BankVerificationModal;
