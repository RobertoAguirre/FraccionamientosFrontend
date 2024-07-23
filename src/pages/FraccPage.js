import React from "react";
import FraccForm from "../components/FraccForm";
import { Box, Typography } from "@mui/material";
import Sidebar from "../components/SideBar";
import Appbar from "../components/AppBar";

const FraccPage = () => {
  return (
    <>
      {/* <Appbar></Appbar> */}
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Registro de Fraccionamiento</h1>

          {/* <Sidebar></Sidebar> */}

          <FraccForm></FraccForm>
        </Box>
      </Box>
    </>
  );
};

export default FraccPage;
