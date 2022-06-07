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

export function ProductCard({
  owner = "Owner",
  id,
  title,
  thumbnail,
  price,
  description,
  stock,
}) {
  return (
    <Card sx={{ maxWidth: 345, height: 1 }}>
      <Link to={"/products/" + id}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {owner?.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={owner}
          // subheader={date.toString()}
        />
        <CardMedia component="img" image={thumbnail} alt="Paella dish" />
      </Link>
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" sx={{ mt: 3 }}>
          Precio: ${price}
        </Typography>
        <Typography variant="body2">Cantidad disponible: {stock}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Agregar al carrito">
          <CartIcon />
        </IconButton>
      </CardActions>
    </Card>

    // <li className={styles.productCard}>
    //   <Link to={"/products/" + product.id}>
    //     <img
    //       className={styles.productImage}
    //       width={230}
    //       height={200}
    //       src={product.thumbnail}
    //       alt={product.title}
    //     ></img>
    //     <hr></hr>
    //     <div className={styles.productDetails}>
    //       <div>{"$" + product.price}</div>
    //       <div>{"Rating: " + product.rating}</div>
    //     </div>
    //   </Link>
    // </li>
  );
}
