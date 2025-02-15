import React from "react";
import { Typography, Container, Box, Grid } from "@material-ui/core";
import useStyles from "./style";
import { Link } from "@mui/material";
import { LinkedIn, YouTube } from "@material-ui/icons";

import {
  EmailOutlined,
  FacebookOutlined,
  Instagram,
  LocationOnOutlined,
  Phone,
} from "@mui/icons-material";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
  <Container>
    <Grid container sx={{ margin: "20px 0" }}>
      <Grid item xs={12} md={4} display="flex">
        <Box
          className={classes.container}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h3" style={{ color: "black", textAlign: "center" }}>
            Health Hive
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", mt: "10px" }}>
            <FacebookOutlined />
            <Instagram />
            <LinkedIn />
            <YouTube />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={8}>
        <Grid container>
          <Grid item xs={12} md={4} className={classes.footerSec}>
            <Typography variant="h4" style={{ margin: "20px" }}>
              Product
            </Typography>
            <Box className={classes.box}>
              <Typography display="block">Features</Typography>
              <Typography display="block">Pricing</Typography>
              <Typography display="block">Reviews</Typography>
              <Typography display="block">Updates</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className={classes.footerSec}>
            <Typography variant="h4" style={{ margin: "20px" }}>
              Features
            </Typography>
            <Link sx={{ textDecoration: "none" }} href="/">
              <Typography className={classes.link}>Personalized Meal</Typography>
            </Link>
            <Link sx={{ textDecoration: "none" }} href="/chatBot">
              <Typography className={classes.link}>AI ChatBot</Typography>
            </Link>
            <Link sx={{ textDecoration: "none" }} href="/recipe">
              <Typography className={classes.link}>Recipe Managment</Typography>
            </Link>
            <Link sx={{ textDecoration: "none" }} href="/contact">
              <Typography className={classes.link}>Contact Us</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={4} className={classes.footerSec}>
            <Typography variant="h4" style={{ margin: "20px" }}>
              Contact Us
            </Typography>
            <Box className={classes.box}>
              <Typography variant="subtitle1" display="block">
                <EmailOutlined /> developer@health-hive.com
              </Typography>

              <Typography variant="subtitle1" display="block">
                <Phone /> +91 7632858301
              </Typography>

              <Typography variant="subtitle1" display="block">
                <LocationOnOutlined /> Chandigarh University, Mohali
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <hr />
    <div style={{ textAlign: "center", margin: "5px" }}>
      <Typography>© HealthHive</Typography>
    </div>
  </Container>
</footer>

  );
};

export default Footer;
