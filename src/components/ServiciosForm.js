import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  TextField,
  Button,
  Box,
  Typography,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  styled,
  ListItemButton,
  Paper,
} from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RegisterFormServicios from "./RegisterFormServicios";
// import DialogModal from "./DialogModal";
import DialogModalTemplate from "./componentTemplates/DialogModalTemplate";

import { useNavigate } from "react-router-dom";

const emails = ["username@gmail.com", "user02@gmail.com"]; // Lista de correos electronicos Temporal

const ServiciosForm = () => {
  //
  // Constantes de estado de React, tambien conocidos como Hooks
  const [tabValue, setTabValue] = useState("1"); // Hook para manejar las Tabs seleccionadas
  const [servicios, setServicios] = useState([]); // Hook para manejar la lista de servicios
  // const [SelectionListValue, setSelectionListValue] = useState(""); // Hook para manejar la lista de servicios
  const [fraccIDList, setFraccIDList] = React.useState([]); // Hook para manejar la lista de fraccionamientos
  const [selectedFraccID, setSelectedFraccID] = React.useState(); // Hook para manejar la seleccion de fraccionamientos
  const [serviciosDetalle, setServiciosDetalle] = React.useState([]); // Hook para manejar la lista de servicios detalle

  // controles de DialogModal
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  // Hooks para manejar la lista de seleccion de fraccionamientos y los tabs
  const handleSelectionChange = (event) => {
    setSelectedFraccID(fraccIDList[event.target.value]);
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Comienzan los hooks para navegar entre rutas en el backend
  const handleServicios = async () => {
    try {
      // usar get con axios para obtener la lista de servicios
      const response = await axios.get("http://localhost:3001/api/servicios");
      setServicios(response.data.servicios);
    } catch (err) {
      console.log(err);
      alert(`Error al visualizar lista de servicios`);
    }
  };
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
  // const handleServiciosDetalle = async () => {
  //   try {
  //     // usar get con axios para obtener la lista de servicios
  //     const response = await axios.get("http://localhost:3001/api/servicios/" + );
  //     setServiciosDetalle(response.data.servicios.);
  //   } catch (err) {
  //     console.log(err);
  //     alert(`Error al visualizar lista de servicios`);
  //   }
  // };

  // Terminan los hooks para navegar entre rutas en el backend

  // UseEffect se utiliza para cargar las listas de servicios y fraccionamientos al cargar la pagina
  useEffect(() => {
    handleServicios();
    handleFraccIDList();
  }, []);

  return (
    <Box component="form" sx={{ mt: 0 }}>
      {/* <DialogModal /> */}
      <DialogModalTemplate
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      {/* Inicia Formulario para seleccion de servicios */}
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab
              onClick={handleServicios}
              label="Lista de servicios"
              value="1"
            />
            <Tab label="Registro de servicios" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {/* Inicia Formulario para seleccion de fraccionamiento */}
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
                  <InputLabel id="demo-simple-select-label">
                    Fracc ID
                  </InputLabel>
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
          {/* Termina Formulario para seleccion de fraccionamiento */}

          <Paper sx={{ p: 2, mt: 2 }}>
            <List>
              <Grid container spacing={2}>
                {/* // array de servicios */}
                {servicios.map((servicio) => (
                  <Grid item xs={12} md={6}>
                    <ListItemButton
                      key={servicio.idServicio}
                      onClick={handleClickOpen}
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={servicio.nombreServicio}
                        secondary={"Secondary text"}
                        // secondary={secondary ? "Secondary text" : null}
                      />

                      <Box>
                        <IconButton edge="end" aria-label="delete">
                          <EditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </ListItemButton>
                  </Grid>
                ))}
              </Grid>
            </List>
          </Paper>
        </TabPanel>
        <TabPanel value="2">
          <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
            Registro de servicios
          </Typography>
          <RegisterFormServicios></RegisterFormServicios>
        </TabPanel>
      </TabContext>
      {/* Termina Formulario para seleccion de servicios */}
    </Box>
  );
};

export default ServiciosForm;
