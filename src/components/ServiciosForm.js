import React, { useState } from "react";
import axios from "axios";

import { TextField, Button, Box, Typography, Tabs, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { useNavigate } from "react-router-dom";

const ServiciosForm = () => {
  const [tabValue, setTabValue] = useState("1");
  const [response, setResponse] = useState([]);
  const [nombreServicio, setNombreServicio] = useState("");
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

      alert("Lista de usuarios encontrada con éxito" + response.data);
      //   navigate("/login");
    } catch (err) {
      console.log(err);
      alert(`Error al visualizar lista de servicios`);
    }
  };

  return (
    <Box component="form" sx={{ mt: 1 }}>
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
          <ul>
            {response.map((servicio) => (
              <li>{servicio.nombreServicio}</li>
            ))}
            ;<li>Servicio 1 </li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
          </ul>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default ServiciosForm;
