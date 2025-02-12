import { IconButton, Typography, Container } from "@mui/material";
import React from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Test = ({ toggleMode, mode }) => {
  return (
    <Container>
      <IconButton onClick={toggleMode}>
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
      <Typography variant="h2">
        Current Mode: {mode}
      </Typography>
    </Container>
  );
};

export default Test;
