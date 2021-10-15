import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.red,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainConatiner: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { setValue, setSelectedIndex } = props;

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container className={classes.mainConatiner} justify="center">
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(0)}
                to="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                to="/services"
                className={classes.link}
              >
                Services
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                to="/customsoftware"
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                to="/mobileapps"
                className={classes.link}
              >
                iOS /Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                to="/websites"
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(2);
                  setSelectedIndex(0);
                }}
                to="/revolution"
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(2);
                  setSelectedIndex(1);
                }}
                to="/vision"
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(2);
                  setSelectedIndex(2);
                }}
                to="/technology"
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(2);
                  setSelectedIndex(3);
                }}
                to="/process"
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(3);
                  setSelectedIndex(0);
                }}
                to="/about"
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(3);
                  setSelectedIndex(1);
                }}
                to="/history"
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(3);
                  setSelectedIndex(2);
                }}
                to="/team"
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(4)}
                to="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img src={footerAdornment} alt="Footer" className={classes.adornment} />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="instagram" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
