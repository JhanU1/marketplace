import * as React from "react";
import {
  TextField,
  MenuItem,
  Grid,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { grey } from "@mui/material/colors";
import { register } from "../../utils/auth";

const Page = () => {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    conPassword: "",
    name: "",
    showPassword: false,
    type: "buyer",
  });

  const userTypes = [
    { value: "buyer", label: "Comprador" },
    { value: "seller", label: "Vendedor" },
  ];

  const actionButton = () => {
    const response = register(
      values.name,
      values.username,
      values.password,
      values.conPassword
    );
    if (response) {
      alert("Usuario registrado");
    } else {
      alert("Error al registrar usuario");
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const colorBgLogin = grey[300];

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Box
          component="form"
          sx={{
            width: "500px",
            boxShadow: "3",
            pb: 2,
          }}
          noValidate
          autoComplete="off"
          alignItems="flex-center"
        >
          <Box
            align="center"
            sx={{ bgcolor: colorBgLogin, py: 0.5, color: "text.secondary" }}
          >
            <h1 align="center">MarketPlace Registro</h1>
          </Box>
          <Box sx={{ mx: 9 }}>
            <Box>
              <FormControl fullWidth sx={{ mt: 4 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Nombre completo
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-username"
                  value={values.name}
                  onChange={handleChange("name")}
                  label="Nombre de Usuario"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl fullWidth sx={{ my: 4 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Usuario
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-username"
                  value={values.username}
                  onChange={handleChange("username")}
                  label="Usuario"
                />
              </FormControl>
            </Box>

            <FormControl
              sx={{ px: 0, mb: 4, width: "100%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Contraseña
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Contraseña"
              />
            </FormControl>
            <FormControl
              sx={{ px: 0, mb: 4, width: "100%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Confirmar Contraseña
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.conPassword}
                onChange={handleChange("conPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirmar Contraseña"
              />
            </FormControl>
            <Box sx={{ mb: 3 }}>
              <TextField
                id="standard-select-currency"
                select
                label="Tipo de Usuario"
                value={values.type}
                onChange={handleChange("type")}
                helperText="Selecciona el tipo de usuario"
                variant="standard"
              >
                {userTypes.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <div>
              <Button
                href="#text-buttons"
                variant="contained"
                onClick={actionButton}
              >
                Registrarse
              </Button>
            </div>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                color: "primary.main",
                py: 3,
              }}
            >
              <Button>Ya tengo una cuenta</Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Page;
