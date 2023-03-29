import React from "react";
import useStyles from "./Services.style";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faCode,
  faMobileAlt,
  faPaintBrush,
  faSearch,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundImage:
    "linear-gradient(to right, #45c1e2 30%, #68e0ce 100%)",
  color: "white",
  padding: theme.spacing(3),
}));

function Services() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2>Our Services</h2>
      <p>
        We're providing valuable IT services to our clients with good quality
        outcome.
      </p>
      <Grid container xs={12} spacing={2}>
        <Grid item lg={4} sm={6} xs={12}  className={classes.cardText}>
          <Item>
            <span>
              <FontAwesomeIcon icon={faCode} />
            </span>
            <h4>Web Development</h4>
          </Item>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}  className={classes.cardText}>
          <Item>
            <span>
              <FontAwesomeIcon icon={faMobileAlt} />
            </span>
            <h4>Mobile App Development</h4>
          </Item>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}  className={classes.cardText}>
          <Item>
            <span>
              <FontAwesomeIcon icon={faServer} />
            </span>
            <h4>Web Hosting</h4>
          </Item>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}  className={classes.cardText}>
          <Item>
            <span>
              <FontAwesomeIcon icon={faBullhorn} />
            </span>
            <h4>Digital Marketing</h4>
          </Item>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}  className={classes.cardText}>
          <Item>
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <h4>SEO</h4>
          </Item>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}  className={classes.cardText}>
          <Item>
            <span>
              <FontAwesomeIcon icon={faPaintBrush} />
            </span>
            <h4>Grapic Design</h4>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
