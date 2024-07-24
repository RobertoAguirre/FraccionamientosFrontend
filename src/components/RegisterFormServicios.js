import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterFormServicios = () => {
  const [nombreServicio, setNombreServicio] = useState("");
  const [nombreCompania, setNombreCompania] = useState("");
  const [numeroContrato, setNumeroContrato] = useState("");
  const [frecuenciaPago, setFrecuenciaPago] = useState("");
  const [costoPorPago, setCostoPorPago] = useState("");
  const [idFraccionamiento, setIdFraccionamiento] = useState("");
  const [nombreFraccionamiento, setNombreFraccionamiento] = useState("");
  const [logo, setLogo] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/servicios", {
        nombreServicio,
        nombreCompania,
        numeroContrato,
        frecuenciaPago,
        costoPorPago,
        idFraccionamiento,
        nombreFraccionamiento,
        logo,
      });
      alert("Servicio registrado con éxito");
      navigate("/servicios");
    } catch (err) {
      console.log(err);
      alert(`Error al registrar el servicio ${nombreServicio}`);
    }
  };

  return (
    <Box component="form" sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="nombreServicio"
        label="Nombre del Servicio"
        name="nombreServicio"
        autoComplete="nombreServicio"
        autoFocus
        value={nombreServicio}
        onChange={(e) => setNombreServicio(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="nombreCompania"
        label="Nombre de la Compañía"
        name="nombreCompania"
        autoComplete="nombreCompania"
        value={nombreCompania}
        onChange={(e) => setNombreCompania(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="numeroContrato"
        label="Número de Contrato"
        name="numeroContrato"
        autoComplete="numeroContrato"
        value={numeroContrato}
        onChange={(e) => setNumeroContrato(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="frecuenciaPago"
        label="Frecuencia de Pago"
        name="frecuenciaPago"
        autoComplete="frecuenciaPago"
        value={frecuenciaPago}
        onChange={(e) => setFrecuenciaPago(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="costoPorPago"
        label="Costo por Pago"
        name="costoPorPago"
        type="number"
        autoComplete="costoPorPago"
        value={costoPorPago}
        onChange={(e) => setCostoPorPago(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="idFraccionamiento"
        label="ID del Fraccionamiento"
        name="idFraccionamiento"
        autoComplete="idFraccionamiento"
        value={idFraccionamiento}
        onChange={(e) => setIdFraccionamiento(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="nombreFraccionamiento"
        label="Nombre del Fraccionamiento"
        name="nombreFraccionamiento"
        autoComplete="nombreFraccionamiento"
        value={nombreFraccionamiento}
        onChange={(e) => setNombreFraccionamiento(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth
        id="logo"
        label="Logo del Fraccionamiento (URL)"
        name="logo"
        autoComplete="logo"
        value={logo}
        onChange={(e) => setLogo(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleRegister}
      >
        Registrar Servicio
      </Button>
    </Box>
  );
};

export default RegisterFormServicios;
