import React from "react";
import AlertModal from "./AlertModal";
import { Box } from "@mui/system";
import DoneIcon from "@mui/icons-material/Done";
import { Avatar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ErrorModal() {
  return (
    <AlertModal primaryName="Try Again">
      <Box sx={{ mx: "34px" }}>
        <Box sx={{ display: "flex", gap: "25px" }}>
          <Avatar
            sx={{ backgroundColor: "#F46151", width: "62px", height: "62px" }}
          >
            <CloseIcon sx={{ color: "black", fontSize: "40px" }}></CloseIcon>
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
              We can’t verify your Account
            </Typography>
            <Typography sx={{ color: "white" }}>
              Sorry we couldn’t verify your account.
            </Typography>
          </Box>
        </Box>
      </Box>
    </AlertModal>
  );
}

export default ErrorModal;
