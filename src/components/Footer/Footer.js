import React from "react";
import useStyles from "./Footer.style";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphoneOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Button } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { Grid, Typography, Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import FooterLogo from "../../images/codeslice-logo-light.png";

function Footer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container} spacing={3}>
      <Grid item xs={3}>
        <img src={FooterLogo} alt="Footer_logo"></img>
        <Typography className={classes.textContent} variant="body2">
          CodeSlice IT Solutions is an end-to-end IT solution provider,
          specialized in IT services and platform solutions.
        </Typography>
        <div className={classes.socialIcons}>
          <Link href="./" className={classes.socialIcon}>
            <FontAwesomeIcon icon={faFacebookF} style={{color:"#fff"}} />
          </Link>
          <Link href="./" className={classes.socialIcon}>
            <FontAwesomeIcon icon={faLinkedinIn} style={{color:"#fff"}} />
          </Link>
          <Link href="./" className={classes.socialIcon}>
            <FontAwesomeIcon icon={faInstagram} style={{color:"#fff"}} />
          </Link>
        </div>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.footerHeading} variant="h5">
          Quick Links
        </Typography>
        <List>
          <ListItem>
            <ArrowRightIcon className={classes.iconColor} />
            <ListItemText
              primary="Home"
              className={classes.textContent}
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ArrowRightIcon className={classes.iconColor} />

            <ListItemText
              primary="About"
              className={classes.textContent}
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ArrowRightIcon className={classes.iconColor} />

            <ListItemText
              primary="Service"
              className={classes.textContent}
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ArrowRightIcon className={classes.iconColor} />

            <ListItemText
              primary="Blog"
              className={classes.textContent}
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ArrowRightIcon className={classes.iconColor} />

            <ListItemText
              primary="Contact"
              className={classes.textContent}
            ></ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.footerHeading} variant="h5">
          NEWSLETTER
        </Typography>
        <Typography variant="body2" className={classes.footerContent}>
          Subscribe to get the latest news, update and offer information.
        </Typography>
        <input
          type="text"
          placeholder="Email"
          className={classes.input}
        ></input>
        <div className={classes.footerContent}>
          <Button variant="contained">Subscribe</Button>
        </div>
      </Grid>
      <Grid item xs={3}>
        <Typography className={classes.footerHeading} variant="h5">
          Contact Us
        </Typography>
        <div className={classes.footerContent}>
          <Typography className={classes.textContent}>
            <PhoneIphoneIcon />
          </Typography>
          <Typography className={classes.textContent}>
            +91 - 7411417471
          </Typography>
          <Typography className={classes.textContent}>
            info@codeslice.tech
          </Typography>
        </div>
        <Typography className={classes.footerHeading} variant="body1">
          CEOL - Incubation Centre Mangalore
        </Typography>
        <Typography className={classes.textContent} variant="body2">
          2nd Floor, City Corporation Commercial
        </Typography>
        <Typography className={classes.textContent} variant="body2">
          Complex, Mallikatte, Kadri, Mangalore,
        </Typography>
        <Typography className={classes.textContent} variant="body2">
          Karnataka 575002
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
