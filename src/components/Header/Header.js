import React from "react";
import useStyles from "./style";
import Logo from "../../images/codeslice-logo.png";
import Grid from "@mui/material/Grid";


function Header() {
  const classes = useStyles()
  console.log("class",classes);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={1}>
        <img src={Logo} alt="logo"></img>
      </Grid>
      <Grid item xs={11} className={classes.li}>
        <ul className={classes.ul}>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./">About</a>
          </li>
          <li>
            <a href="./">Service</a>
          </li>
          <li>
            <a href="./">portfolio</a>
          </li>
          <li>
            <a href="./">Products</a>
          </li>
          <li>
            <a href="./">Contact</a>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Header;
