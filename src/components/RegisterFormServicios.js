import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterFormServicios = () => {
  const [nombreServicio, setNombreServicio] = useState("");
  const [nombreCompania, setNombreCompania] = useState("");
  const [numeroContrato, setNumeroContrato] = useState("");
  const [frecuenciaPago, setFrecuenciaPago] = useState("");
  const [costoPorPago, setCostoPorPago] = useState("");
  const [idFraccionamiento, setIdFraccionamiento] = useState("");

  const [logo, setLogo] = useState("");

  // Hook para manejar Dropdown List de FraccID
  const [selectedFraccID, setSelectedFraccID] = React.useState(); // Hook para manejar la seleccion de fraccionamientos
  const [fraccIDList, setFraccIDList] = React.useState([]); // Hook para manejar la lista de fraccionamientos
  const [fraccIDAutoFill, setFraccIDAutoFill] = React.useState(""); // Hook para manejar la lista de fraccionamientos

  // Hooks para manejar DROPDOWN List. la lista de seleccion de fraccionamientos y los tabs
  const handleSelectionChange = (event) => {
    setSelectedFraccID(fraccIDList[event.target.value]);
    setIdFraccionamiento(fraccIDList[event.target.value]._id);
    // setFraccIDAutoFill()
  };

  // Hook para manejar Rutas del Backend
  const handleFraccIDList = async () => {
    try {
      // alert("Intentando conexion");
      // usar get con axios para obtener la lista de servicios
      const response = await axios.get("http://localhost:3001/api/fracc");
      setFraccIDList(response.data.fraccionamientos);
      // alert("Conexion exitosa");
    } catch (err) {
      console.log(err);
      alert(`Error al visualizar lista de servicios`);
    }
  };

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
        // nombreFraccionamiento,
        logo,
      });
      alert("Servicio registrado con éxito");
      navigate("/servicios");
    } catch (err) {
      console.log(err);
      alert(`Error al registrar el servicio ${nombreServicio}`);
    }
  };
  // UseEffect se utiliza para cargar las listas de servicios y fraccionamientos al cargar la pagina
  useEffect(() => {
    handleFraccIDList();
  }, []);
  return (
    <Box component="form" sx={{ mt: 1 }}>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{}} variant="h6" component="div">
              {/* [Nombre del Fraccionamiento] */}
              {/* {fraccIDList[0].nombreFracc} */}
              {selectedFraccID
                ? selectedFraccID.nombreFracc
                : "[Nombre del Fraccionamiento]"}
            </Typography>

            <Typography
              variant="h3
            "
              color="text.secondary"
              sx={{ mt: 2, mb: 8 }}
            >
              {selectedFraccID
                ? selectedFraccID._id
                : "[ID del Fraccionamiento]"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Fracc ID</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fraccIDList}
                label="FraccID"
                onChange={handleSelectionChange}
                onClick={handleFraccIDList}
              >
                {fraccIDList.map((fraccIDList, index) => (
                  <MenuItem key={index} value={index}>
                    {fraccIDList.nombreFracc} - ID: {fraccIDList._id}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
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
      {/* <TextField
        margin="normal"
        required
        fullWidth
        id="idFraccionamiento"
        label={selectedFraccID
          ? selectedFraccID._id
          : "[ID del Fraccionamiento]"}
        name="idFraccionamiento"
        autoComplete={
          selectedFraccID ? selectedFraccID._id : "[ID del Fraccionamiento]"
        }
        value={idFraccionamiento}
        onChange={(e) => setIdFraccionamiento(e.target.value)}
      /> */}
      {/* <TextField
        margin="normal"
        required
        fullWidth
        id="nombreFraccionamiento"
        label="Nombre del Fraccionamiento"
        name="nombreFraccionamiento"
        autoComplete="nombreFraccionamiento"
        value={nombreFraccionamiento}
        onChange={(e) => setNombreFraccionamiento(e.target.value)}
      /> */}
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
