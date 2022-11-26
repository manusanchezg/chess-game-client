import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PortalReactDOM from "react-dom";
import React from "react";

const modalRoot = document.getElementById("modal-root");
export default function Portal(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => props.setOpen(false);
  return PortalReactDOM.createPortal(
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.login ? "Login" : props.result}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.message ? (
              <label htmlFor="username">{props.message}</label>
            ) : null}
            {props.login ? <input type="text" /> : null}
          </Typography>
        </Box>
      </Modal>
    </div>,
    modalRoot
  );
}
