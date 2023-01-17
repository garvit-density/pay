import React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const handleCopy = (txt) => {
  navigator.clipboard.writeText(txt);
};

function TransferFund() {
  return (
    <Box
      sx={{
        //backgroundColor: "red",
        marginTop: "2%",
        marginLeft: "4%",
        marginRight: "4%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "1%",
        }}
      >
        <Box>Transfer Fund to this Bank Account</Box>
        <img src={require("../assets/imps.png")} alt="imps" />
      </Box>
      <Box>
        {" "}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Beneficiary Entity</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography>PAGARPAY INDIA PRIVATE LIMITED</Typography>
            <Button
              startIcon={<ContentCopyIcon></ContentCopyIcon>}
              onClick={() => handleCopy("PAGARPAY INDIA PRIVATE LIMITED")}
            ></Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Baneficiary Account Number</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography>0937480SBXHBA2E12E</Typography>
            <Button
              startIcon={<ContentCopyIcon></ContentCopyIcon>}
              onClick={() => handleCopy("0937480SBXHBA2E12E")}
            ></Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Baneficiary IFSC Number </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography>ESFB0003031</Typography>
            <Button
              startIcon={<ContentCopyIcon></ContentCopyIcon>}
              onClick={() => handleCopy("ESFB0003031")}
            ></Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Bank Account Type </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography>CURRENT</Typography>
            <Button
              startIcon={<ContentCopyIcon></ContentCopyIcon>}
              onClick={() => handleCopy("CURRENT")}
            ></Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TransferFund;
