import React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Avatar from "@mui/material/Avatar";

function EnterAmount({ Data, setData }) {
  const handleAccount = (event) => {
    setData({ ...Data, accountNumber: event.target.value });
    console.log(Data);
  };
  const handleDeposit = (event) => {
    setData({ ...Data, depositAmount: event.target.value });
    console.log(Data);
  };
  const handleDepositButton = (amount) => {
    setData({ ...Data, depositAmount: amount });
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "1%",
        }}
      >
        <Typography sx={{ color: "common.white" }}>Enter Amount</Typography>
        <img src={require("../assets/imps.png")} alt="imps" />
      </Box>
      <Box sx={{ paddingBottom: "2%" }}>
        <Typography sx={{ color: "common.white" }}>
          Registered Account Number
        </Typography>
        <TextField
          variant="filled"
          size="small"
          fullWidth
          inputProps={{ style: { color: "white" } }}
          value={Data.accountNumber}
          onChange={handleAccount}
        >
          {" "}
        </TextField>
      </Box>
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
            value={Data.depositAmount}
            onChange={handleDeposit}
          >
            {""}
          </TextField>
        </Box>
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
  );
}

export default EnterAmount;
