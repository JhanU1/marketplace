import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {grey} from "@mui/material/colors";

const Page = () => {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

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

  const colorBgLogin= grey[300];

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
            sx={{ bgcolor: colorBgLogin, py:0.5, color:"text.secondary" }}
          >
            <h1 align="center">MarketPlace Login</h1>
            
          </Box>
          <Box sx={{ mx: 9 }}>
            <Box>
              <FormControl fullWidth sx={{ my:4 }}>
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

            <FormControl sx={{ px: 0, mb: 4, width:"100%" }} variant="outlined">
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
              <Button href="#text-buttons" variant="contained">
                Iniciar sesión  
              </Button>
            </div>

            <Box alignItems="flex-center" sx={{ color: "primary.main", py: 3 }}>
              Crear una nueva cuenta 
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Page;
