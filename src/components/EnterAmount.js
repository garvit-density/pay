import React from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Avatar from "@mui/material/Avatar";

function EnterAmount() {
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
        <Box>Enter Amount</Box>
        <img src={require("../assets/imps.png")} alt="imps" />
      </Box>
      <Box sx={{ paddingBottom: "2%" }}>
        <Box>Registered Account Number</Box>
        <TextField variant="filled" size="small" fullWidth>
          {" "}
        </TextField>
      </Box>
      <Box sx={{ paddingBottom: "2%" }}>
        <Box>Entered Deposit Amount</Box>
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

            <Box>INR</Box>
          </Box>
          <TextField variant="filled" size="small" fullWidth>
            {""}
          </TextField>
        </Box>
      </Box>
      <Box>
        <Button variant="outlined">₹ 5000</Button>
        <Button variant="outlined">₹ 2000</Button>
        <Button variant="outlined">₹ 1000</Button>
        <Button variant="outlined">₹ 500</Button>
      </Box>
    </Box>
  );
}

export default EnterAmount;
