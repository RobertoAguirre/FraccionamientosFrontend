import React, { useState } from "react";
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
} from "@mui/material";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RegisterFormServicios from "./RegisterFormServicios";

import { useNavigate } from "react-router-dom";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const ServiciosForm = () => {
  const [tabValue, setTabValue] = useState("1");
  const [response, setResponse] = useState([]);
  const [nombreServicio, setNombreServicio] = useState("");

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  // const [password, setPassword] = useState('');
  // const navigate = useNavigate(); //hook para navegar entre rutas
  // const role= 'user'

  const handleChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  const handleServicios = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/servicios");

      setResponse(response.data.servicios);

      // alert("Lista de Servicios encontrada con éxito" + response.data);
      //   navigate("/login");
    } catch (err) {
      console.log(err);
      alert(`Error al visualizar lista de servicios`);
    }
  };

  return (
    <Box component="form" sx={{ mt: 1 }}>
      {/* <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Enable secondary text"
        />
      </FormGroup> */}
      <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
        [Nombre del Fraccionamiento]
      </Typography>

      <Typography
        variant="h3
            "
        color="text.secondary"
        sx={{ mt: 2, mb: 8 }}
      >
        [ID del fraccionamiento]
      </Typography>

      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              onClick={handleServicios}
              label="Lista de servicios"
              value="1"
            />
            <Tab label="Registro de servicios" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid item xs={12} md={6}>
            {/* Comineza Muestra extraida de MUI para mostrar formate de lista de servicios */}
            {/* <Demo>
              <List dense={dense}>
                {generate(
                  <ListItem
                    secondaryAction={
                      <div>
                        <IconButton edge="end" aria-label="delete">
                          <EditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                )}
              </List>
            </Demo> */}
            {/* Termin Muestra extraida de MUI para mostrar formate de lista de servicios */}
          </Grid>
          {/* <ul> */}
          <List dense="dense">
            {response.map((servicio) => (
              <ListItemButton
                key={servicio.idServicio}
                secondaryAction={
                  <div>
                    <IconButton edge="end" aria-label="delete">
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={servicio.nombreServicio}
                  secondary={secondary ? "Secondary text" : null}
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

              // <li>{servicio.nombreServicio}</li>
            ))}
          </List>
          {/* </ul> */}
        </TabPanel>
        <TabPanel value="2">
          <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
            Registro de servicios
          </Typography>
          <RegisterFormServicios></RegisterFormServicios>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default ServiciosForm;
