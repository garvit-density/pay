import React from "react";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { PropaneSharp } from "@mui/icons-material";

function AlertModal({ close, primaryName, primaryAction, children }) {
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
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", mr: "32px" }}
        onClick={close}
      >
        <CloseIcon sx={{ color: "white" }}></CloseIcon>
      </Box>
      {children}
      <Box
        maxWidth="md"
        sx={{
          display: "flex",
          py: "27px",
          pr: 1,
          mt: "10px",
          backgroundColor: "#2C2C34",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "white",
            ":hover": {
              bgcolor: "white",
            },
            borderRadius: "0 !important",
            width: "196px",
            mr: "32px",
          }}
          onClick={primaryAction}
        >
          {primaryName}
        </Button>
      </Box>
    </Container>
  );
}

AlertModal.propTypes = {
  close: PropTypes.func,
  primaryName: PropTypes.string,
  primaryAction: PropTypes.func,
  children: PropTypes.object,
};

export default AlertModal;
