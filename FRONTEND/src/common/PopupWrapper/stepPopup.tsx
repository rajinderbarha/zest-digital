import { Dialog, DialogTitle, Fab, useMediaQuery, useTheme } from "@mui/material";
import { Box, SxProps } from "@mui/system";
import React, { ReactNode, useEffect, useState } from "react";
interface IProps {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
}
const StepPopup = ({
  onClose,
  open,
  children
}: IProps) => {

  return (
    <Dialog
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: 1150,
          maxHeight: 1000,
          background: "transparent",
          border: "none !important",
          boxShadow: "none",

        },
      }}
    >
      <Box sx={{ position: "relative" }}>

        <Box
          sx={{
            height: "100%",
            border: "none !important"
          }}
        >
          {children}
        </Box>
      </Box>
    </Dialog>
  );
};
export default StepPopup;