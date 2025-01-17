import React from "react";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { PropaneSharp } from "@mui/icons-material";

function Modal({
  title,
  close,
  primaryName,
  primaryAction,
  secondaryName,
  secondaryAction,
  children,
}) {
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
        sx={{ display: "flex", justifyContent: "space-between", px: "20px" }}
      >
        <Typography sx={{ color: "white", fontSize: "28px" }}>
          {title}
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end" }}
          onClick={close}
        >
          <CloseIcon sx={{ color: "white" }}></CloseIcon>
        </Box>
      </Box>
      {children}
      <Box
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "row",
          py: "27px",
          pr: 1,
          mt: "10px",
          backgroundColor: "#2C2C34",
          gap: "32px",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            ":hover": {
              borderColor: "white",
            },
            borderRadius: "0 !important",
            width: "196px",
          }}
          onClick={secondaryAction}
        >
          {secondaryName}
        </Button>
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

Modal.propTypes = {
  title: PropTypes.string,
  close: PropTypes.func,
  primaryName: PropTypes.string,
  primaryAction: PropTypes.func,
  secondaryName: PropTypes.string,
  secondaryAction: PropTypes.func,
  children: PropTypes.object,
};

export default Modal;
