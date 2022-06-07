import * as React from "react";
import {
  Grid,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
  TextField,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Navbar from "../Navbar";
import { editProduct } from "../../utils/products";
import { getCurrentUser } from "../../utils/auth";
import { getProductById } from "../../utils/master";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  const { productId } = useParams();
  console.log(productId);
  const { userId, name, image, description, price, quantity } =
    getProductById(productId);
  const [values, setValues] = React.useState({
    description,
    image,
    name,
    price,
    quantity,
    userId,
  });
  console.log(values);
  const colorBgLogin = grey[300];
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const actionButton = () => {
    // check if all fields are filled
    if (
      values.name &&
      values.description &&
      values.image &&
      values.price &&
      values.quantity
    ) {
      console.log("AAAAAA");
      console.log(editProduct(productId, values));
      alert("Product updated");
      navigate("/products/user/" + userId);
    } else {
      alert("Please fill all fields");
    }
  };
  return (
    <>
      <Navbar />
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
              <h1 align="center">Info Producto</h1>
            </Box>
            <Box sx={{ mx: 9 }}>
              <Box>
                <FormControl required fullWidth sx={{ my: 4 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Nombre
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-username"
                    value={values.name}
                    onChange={handleChange("name")}
                    label="Nombre"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl required fullWidth sx={{ mb: 4 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Link Imagen
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-username"
                    value={values.image}
                    onChange={handleChange("image")}
                    label="Link Imagen"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl required fullWidth sx={{ mb: 4 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Descripción
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-username"
                    value={values.description}
                    onChange={handleChange("description")}
                    label="Descripción"
                  />
                </FormControl>
              </Box>
              <Box>
                <TextField
                  id="outlined-number"
                  label="Cantidad Disponible"
                  type="number"
                  value={values.quantity}
                  onChange={handleChange("quantity")}
                />
              </Box>
              <Box sx={{ my: 3 }}>
                <TextField
                  id="outlined-number"
                  label="Precio Por unidad"
                  type="number"
                  value={values.price}
                  onChange={handleChange("price")}
                />
              </Box>
              <div>
                <Button variant="contained" onClick={actionButton}>
                  Guardar
                </Button>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
