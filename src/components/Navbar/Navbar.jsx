import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { getCurrentUser } from "../../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ProductSearch } from "../ProductSearch/ProductSearch";
import {logout} from "../../utils/auth";

export default function Navbar() {
  const auth = getCurrentUser();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "gray" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/products">
              Productos
            </Link>
          </Typography>
          {!!auth && (
            <div>
              <Button
                variant="contained"
                onClick={() => navigate("/products/new")}
              >
                Crear Producto
              </Button>
              <IconButton
                size="large"
                aria-label="shopping cart"
                aria-haspopup="true"
                onClick={() => navigate("/cart")}
                color="inherit"
              >
                <ShoppingCartIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {auth.type==="seller" && (<MenuItem onClick={() => navigate(`/products/user/${auth.id}`)}>Mis Productos</MenuItem>) }
                {auth.type==="admin" &&  (<MenuItem onClick={() => navigate("/master")}>Maestro de Productos</MenuItem>)}
                <MenuItem onClick={handleLogout}>Cerrar Sesi??n</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
