import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Appbar = ({ handleDrawerToggle }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: {
              // sm: 'none'
            },
          }} // mr means margin-right sm means small
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          FRACCIONAMIENTOS
        </Typography>
        <Button color="inherit" sx={{ marginLeft: "auto" }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
