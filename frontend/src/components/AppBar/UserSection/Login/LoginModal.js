import React from "react";
import Modal from "@material-ui/core/Modal";
import makeStyles from "@material-ui/styles/makeStyles";
import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.primary.dark,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

function LoginModal({
  modalOpen,
  handleModalClose,
  error,
  handleLoginFormSubmit,
  handleCreateUserClick,
  message,
  loading,
}) {
  const classes = useStyles();

  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper} color="secondary">
        <LoginForm
          handleLoginFormSubmit={handleLoginFormSubmit}
          error={error}
          message={message}
          handleCreateUserClick={handleCreateUserClick}
          loading={loading}
        />
      </div>
    </Modal>
  );
}

export default LoginModal;
