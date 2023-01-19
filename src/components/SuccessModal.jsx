import React from "react";
import AlertModal from "./AlertModal";
import { Box } from "@mui/system";
import DoneIcon from "@mui/icons-material/Done";
import { Avatar, Typography } from "@mui/material";
function SuccessModal() {
  return (
    <AlertModal primaryName="Deposit">
      <Box sx={{ mx: "34px" }}>
        <Box sx={{ display: "flex", gap: "25px" }}>
          <Avatar
            sx={{ backgroundColor: "#27BD67", width: "62px", height: "62px" }}
          >
            <DoneIcon sx={{ color: "black", fontSize: "40px" }}></DoneIcon>
          </Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {" "}
            <Typography sx={{ color: "white", fontSize: "28px" }}>
              Congratulations! Your Bank Verification Completed.
            </Typography>
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ color: "white", my: "30px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitatio.
        </Typography>
      </Box>
    </AlertModal>
  );
}

export default SuccessModal;
