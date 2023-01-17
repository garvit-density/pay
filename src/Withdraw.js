import React from "react";
import { Container } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
function Withdraw() {
  const [DepositAmount, setDepositAmount] = useState("");

  const handleDeposit = (event) => {
    setDepositAmount(event.target.value);
    console.log(DepositAmount);
  };
  const handleDepositButton = (amount) => {
    setDepositAmount(amount);
    console.log(DepositAmount);
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
      }}
    >
      <Typography sx={{ color: "white" }}>Withdraw INR</Typography>
      <Box sx={{ paddingBottom: "2%" }}>
        <Typography sx={{ color: "common.white" }}>
          Entered Deposit Amount
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              border: "1px solid",
              borderColor: "#959595",
              height: "46px",
              width: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{ backgroundColor: "black", width: "23%", height: "33%" }}
            >
              {" "}
              <CurrencyRupeeIcon sx={{ fontSize: "small" }}></CurrencyRupeeIcon>
            </Avatar>

            <Typography sx={{ color: "#FFFFFF" }}>INR</Typography>
          </Box>
          <TextField
            variant="filled"
            size="small"
            fullWidth
            label="Enter Deposit Amount"
            InputLabelProps={{
              style: { color: "white" },
            }}
            inputProps={{ style: { color: "white" } }}
            value={DepositAmount}
            onChange={handleDeposit}
          >
            {""}
          </TextField>
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{ color: "#FFFFFF" }}
            onClick={() => handleDepositButton(5000)}
          >
            ₹ 5000
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#FFFFFF" }}
            onClick={() => handleDepositButton(2000)}
          >
            ₹ 2000
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#FFFFFF" }}
            onClick={() => handleDepositButton(1000)}
          >
            ₹ 1000
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#FFFFFF" }}
            onClick={() => handleDepositButton(500)}
          >
            ₹ 500
          </Button>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ color: "#FFFFFF" }}>Account Number</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ color: "#FFFFFF" }}>
              PAGARPAY INDIA PRIVATE LIMITED
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ color: "#FFFFFF" }}>Account IFSC Code</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ color: "#FFFFFF" }}>
              0937480SBXHBA2E12E
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
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
            // onClick={handleBack}
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
            // onClick={handleNext}
          >
            Withdraw
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Withdraw;
