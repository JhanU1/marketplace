import * as React from "react";
import { Grid } from "@mui/material";
import List from "@mui/material/List";
import { getProductsByUserId, getSellerUsers } from "../../utils/master.js";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import  Navbar  from "../../components/Navbar";


const Page = () => {
  const navigate = useNavigate();
  const colorBgLogin = grey[300];
  const sellUsers = getSellerUsers();
  console.log(sellUsers);
  const [users, setValues] = React.useState(sellUsers);

  return (
    <Box>
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
          sx={{
            width: "500px",
            boxShadow: "3",
            pb: 2,
          }}
        >
          <Box
            align="center"
            sx={{ bgcolor: colorBgLogin, py: 0.5, color: "text.secondary" }}
          >
            <h1 align="center">MarketPlace Vendedores</h1>
          </Box>
          {users.map((user, index) => {
            console.log("User: ", user);
            const products = getProductsByUserId(user.id);
            return (
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem onClick={()=>navigate(`/products/user/${user.id}`)}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {user.name.charAt(0).toUpperCase()}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.name}
                    secundary={`Vende ${products.length} productos `}
                  />
                </ListItem>
              </List>
            );
          })}
        </Box>
      </Grid>
    </Grid>
    </Box>
    
  );
};

export default Page;
