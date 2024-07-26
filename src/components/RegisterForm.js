import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); //hook para navegar entre rutas
  const role = "user";

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/users", {
        username,
        password,
        role,
      });
      alert("Usuario registrado con éxito");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert(`Error al registrar usuario ${username}`);
    }
  };

  return (
    <Box component="form" sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Nombre de usuario"
        name="username"
        autoComplete="username"
        autoFocus
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        type="password"
        id="password"
        label="Password"
        name="password"
        autoComplete="password"
        autoFocus
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleRegister}
      >
        Crear nuevo usuario
      </Button>
      <Typography>
        Ya tienes cuenta? accede aqui: <a href="/login">aqui</a>
      </Typography>
    </Box>
  );
};

export default RegisterForm;
