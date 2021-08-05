import { useState } from "react";

// hooks
import { useAuth } from "./useAuth";

export const useProfile = () => {
  const [open, setOpen] = useState(false);

  //   use hooks
  const { logout } = useAuth();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    logout();
  };

  return {
    open,
    handleOpen,
    handleClose,
    handleLogOut,
  };
};
