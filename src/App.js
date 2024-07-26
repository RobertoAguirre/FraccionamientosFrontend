import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Appbar from "./components/AppBar";
import Sidebar from "./components/SideBar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import FraccPage from "./pages/FraccPage";
import MapComponent from "./components/MapComponent";
import ProtectedRoute from "./components/ProtectedRoute";
import FlexboxDemo from "./components/FlexboxDemo";
import GridComponent from "./components/GridComponent";
import Dashboard from "./components/Dashboard";
import ServiciosPage from "./pages/ServiciosPage";
import ItemList from './components/Tabs';
import { Container, Typography } from '@mui/material';
import TabHous from './components/TabHous';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <Box sx={{}}>
      <CssBaseline />
      {!isAuthPage && (
        <>
          <Appbar handleDrawerToggle={handleDrawerToggle} />
          <Sidebar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </>
      )}
      <Box
        component="main"
        sx={
          {
            // flexGrow: 1,
            // p: 3,
            // width: { sm: isAuthPage ? "100%" : `calc(100% - ${drawerWidth}px)` },
            // mt: !isAuthPage ? 8 : 0,
          }
        }
      >
        {!isAuthPage && <Toolbar />}
        {children}
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <RegisterPage />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/fraccRegister"
          element={
            <Layout>
              <FraccPage />
            </Layout>
          }
        />
        <Route
          path="/map"
          element={
            <Layout>
              <ProtectedRoute element={MapComponent} />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
              <Container>
                <Layout>TabHous</Layout>
      <Typography variant="h4" gutterBottom>
        Lista de casas
      </Typography>
      <ItemList />
    </Container>
            </Layout>
          }
        />
         <Route
          path="/taps"
          element={
            <Layout>
              <TabHous />
            </Layout>
          }
        />
        <Route
          path="/grid"
          element={
            <Layout>
              <GridComponent />
            </Layout>
          }
        />
        <Route
          path="/flexboxdemo"
          element={
            <Layout>
              <FlexboxDemo />
            </Layout>
          }
        />
        <Route
          path="/Servicios"
          element={
            <Layout>
              <ServiciosPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
