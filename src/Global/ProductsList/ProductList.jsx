import Styles from "./ProductList.module.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Like from "../Like/Like.component";
import RatingComponent from "../Rating/Rating";
import Cart from "../Cart/Cart";
const ProductList = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.pngall.com/wp-content/uploads/4/Soap-PNG-Free-Image.png"
        className={Styles.CardMedia}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className={Styles.actionContainer}>
        <Like />
        <Cart />
        <RatingComponent />
      </CardActions>
    </Card>
  );
};

export default ProductList;
