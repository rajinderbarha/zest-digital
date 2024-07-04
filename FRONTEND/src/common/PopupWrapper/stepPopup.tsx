import { Dialog,} from "@mui/material";
import { Box, } from "@mui/system";
import  { ReactNode} from "react";
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