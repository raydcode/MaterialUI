import React from "react";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import ButtonArrow from "../ui/ButtonArrow";

import background from "../../assets/background.jpg";
import mobilebackground from "../../assets/mobileBackground.jpg";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "60em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobilebackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.black,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

export default function Calltoaction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const { setValue } = props;

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSm ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSm ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSm ? 0 : "5em",
          textAlign: matchesSm ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5em" }}>
              {" "}
              Take Advantage of the 21st Century{" "}
            </Typography>
            <Grid container item justify={matchesSm ? "center" : undefined}>
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButtonHero}
                onClick={() => setValue(2)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.red}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          variant="contained"
          className={classes.estimateButton}
          onClick={() => setValue(5)}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
