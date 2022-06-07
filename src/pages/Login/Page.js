import * as React from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Grid,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
  Box,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { login } from "../../utils/auth.js";
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const navigate = useNavigate();

  const actionButton = () => {
    const response = login(values.username, values.password);
    if (response) {
      navigate("/products");
    } else {
      alert("Usuario o contraseña incorrectos");
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
            <h1 align="center">MarketPlace Login</h1>
          </Box>
          <Box sx={{ mx: 9 }}>
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
            <div>
              <Button
                variant="contained"
                onClick={actionButton}
              >
                Iniciar sesión
              </Button>
            </div>

            <Button
              variant="contained"
              onClick={() => navigate("/register")}
              sx={{
                mt: 4,
              }}
            >
              Crear una nueva cuenta
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Page;
