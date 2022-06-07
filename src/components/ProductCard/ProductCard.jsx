import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import CartIcon from "@mui/icons-material/AddShoppingCart";

import { Link } from "react-router-dom";
import { getUserById } from "../../utils/users";
import { addProductToCart } from "../../utils/carts";
import { getCurrentUser } from "../../utils/auth";
export function ProductCard({
  userId = 1,
  id,
  name,
  image,
  description,
  price,
  quantity,
}) {
  const nameOfUser = getUserById(userId)?.name;

  return (
    <Card sx={{ maxWidth: 345, height: 1 }}>
      <Link to={"/products/" + id}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {nameOfUser?.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={nameOfUser}
        />
        <CardMedia component="img" image={image} alt="Paella dish" />
      </Link>
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" sx={{ mt: 3 }}>
          Precio: ${price}
        </Typography>
        <Typography variant="body2">Cantidad disponible: {quantity}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Agregar al carrito"
          onClick={() => addProductToCart(getCurrentUser().id, +id)}
        >
          <CartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
