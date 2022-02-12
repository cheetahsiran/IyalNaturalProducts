import Styles from "./Home.module.scss";
import Banner from "../../Components/Banner/Banner";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import ProductList from "../../Global/ProductsList/ProductList";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState(2);
  const handleChange = (event, newValue) => {
        setValue(newValue);
  };
  return (
    <div className={Styles.HomeWrapper}>
      <div className={Styles.TabGroup}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Soap Products" />
          <Tab label="Shampoo" />
          <Tab label="Other Products" />
        </Tabs>
      </div>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <ProductList />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
