import React from "react";
import ServiciosForm from "../components/ServiciosForm";

import { Box, Typography } from "@mui/material";

const ServiciosPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Página de servicios</h1>
        <ServiciosForm></ServiciosForm>
      </Box>
    </Box>
  );
};

export default ServiciosPage;
