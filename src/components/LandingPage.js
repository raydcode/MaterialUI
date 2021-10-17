import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import animationData from "../animations/landinganimation/data";
import { Grid, Button, Typography, Card, CardContent } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";

import ButtonArrow from "./ui/ButtonArrow";
import Calltoaction from "./ui/CallToAction";

import CustomSoftwareIcon from "./icons/CustomSoftwareIcon";
import MobileIcon from "./icons/MobileIcon";
import WebsiteIcon from "./icons/WebsiteIcon";
import reapeatingBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.black,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
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
  mainConatiner: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
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
  servicesContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${reapeatingBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em ",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  const { setValue, setSelectedIndex } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Grid container direction="column" className={classes.mainConatiner}>
        {/* Hero Block */}
        <Grid item>
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography align="center" variant="h2">
                Bringing High End Technology <br /> to all kind of business
              </Typography>
              <Grid
                container
                justify="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    component={Link}
                    to="/estimate"
                    className={classes.estimateButton}
                    variant="contained"
                    onClick={() => {
                      setValue(5);
                      setSelectedIndex();
                    }}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                    className={classes.learnButtonHero}
                    onClick={() => setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.red}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        {/* Custom Software Block */}
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

        {/* iOs / Android App Development*/}
        <Grid item>
          <Grid
            container
            direction="row"
            justify={matchesSm ? "center" : "flex-end"}
            className={classes.servicesContainer}
          >
            <Grid
              item
              style={{
                textAlign: matchesSm ? "center" : undefined,
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
        {/* Website Development */}
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

            <Grid item>
              <WebsiteIcon
                className={classes.icon}
                fill={theme.palette.common.red}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Revolution */}
        <Grid item>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ height: "100em", marginTop: "12em" }}
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visinoary insights coupled with cutting-edge technology is
                      a recipe for revolution.
                    </Typography>
                    <Button
                      component={Link}
                      to="/revolution"
                      variant="outlined"
                      className={classes.learnButtonHero}
                      onClick={() => setValue(2)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.red}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>
        {/* Information  */}
        <Grid item>
          <Grid
            container
            style={{ height: "80em" }}
            direction="row"
            alignItems="center"
          >
            <Grid
              item
              container
              style={{
                position: "absolute",
                textAlign: matchesXs ? "center" : "inherit",
              }}
              direction={matchesXs ? "column" : "row"}
            >
              <Grid
                item
                style={{
                  marginLeft: matchesXs ? 0 : matchesSm ? "2em" : "5em",
                }}
                sm
              >
                <Grid container style={{ marginBottom: matchesXs ? "10em":0}}direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/about"
                      variant="outlined"
                      className={classes.learnButtonHero}
                      style={{ color: "white", borderColor: "white" }}
                      onClick={() => setValue(3)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                style={{
                  marginRight: matchesXs ? 0 : matchesSm ? "2em" : "5em",
                  textAlign: matchesXs ? "center" : "right",
                  marginTop: matchesXs ? "8em" : 0,
                }}
                sm
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Say hello!{" "}
                    <span role="img" aria-label="waving hand">
                      👋
                    </span>
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      className={classes.learnButtonHero}
                      style={{ color: "white", borderColor: "white" }}
                      onClick={() => setValue(4)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <div className={classes.infoBackground} />
          </Grid>
        </Grid>
        {/*  Call to Action*/}
        <Grid item>
          <Calltoaction setValue={setValue} />
        </Grid>
      </Grid>
    </>
  );
}
