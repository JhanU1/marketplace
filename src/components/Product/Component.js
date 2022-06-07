import * as React from "react";
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

export default function Product({
  userName,
  description,
  image,
  name,
  price,
  quantity,
  date,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {userName.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={userName}
        subheader={date.toString()}
      />
      <CardMedia component="img"  image={image} alt="Paella dish" />
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
        <IconButton aria-label="Agregar al carrito">
          <CartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
