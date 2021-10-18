import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";

import ButtonArrow from "./ui/ButtonArrow";
import CustomSoftwareIcon from "./icons/CustomSoftwareIcon";
import MobileIcon from "./icons/MobileIcon";
import WebsiteIcon from "./icons/WebsiteIcon";

const useStyles = makeStyles((theme) => ({
  servicesContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.black,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  const { setValue, setSelectedIndex } = props;

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSm ? 0 : "5em",
          marginTop: matchesSm ? "1em" : "2em",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align={matchesSm ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>

      {/* iOs / Android App Development*/}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSm ? "center" : "flex-end"}
          className={classes.servicesContainer}
          style={{ marginTop: matchesSm ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSm ? "center" : undefined,
              width: matchesSm ? undefined : "35em",
            }}
          >
            <Typography variant="h4">iOS/Andriod App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.{" "}
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSm ? null : <br />} with either mobile platform
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.red}
              />
            </Button>
          </Grid>

          <Grid item style={{ marginRight: matchesSm ? 0 : "5em" }}>
            <MobileIcon
              className={classes.icon}
              fill={theme.palette.primary.main}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Custom software Development */}

      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSm ? "center" : undefined}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSm ? 0 : "5em",
              textAlign: matchesSm ? "center" : undefined,
              //   width: matchesSm ? undefined : "35em"
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.{" "}
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.red}
              />
            </Button>
          </Grid>

          <Grid item>
            <CustomSoftwareIcon
              className={classes.icon}
              main={theme.palette.primary.main}
              light={theme.palette.primary.light}
              dark={theme.palette.primary.dark}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Website Development */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSm ? "center" : "flex-end"}
          className={classes.servicesContainer}
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSm ? "center" : undefined,
              width: matchesSm ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.{" "}
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(2);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.red}
              />
            </Button>
          </Grid>

          <Grid item style={{ marginRight: matchesSm ? 0 : "5em" }}>
            <WebsiteIcon
              className={classes.icon}
              fill={theme.palette.common.red}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
