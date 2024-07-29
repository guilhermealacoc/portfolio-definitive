import { Icon } from "@iconify/react/dist/iconify.js";
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";

interface Props {
  description?: string;
  openmodal: boolean;
  onClose: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function HomeDialog({ description, openmodal, onClose }: Props) {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(openmodal);
  }, [openmodal]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="sm" 
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Sobre o projeto
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Icon icon="material-symbols:close" width="25" height="25" />
      </IconButton>
      <DialogContent>
        <Typography gutterBottom>
          {description}
        </Typography>
      </DialogContent>
    </BootstrapDialog>
  );
}
