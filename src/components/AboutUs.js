import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery, Hidden } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import history from "../assets/history.svg";
import Calltoaction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  rowConatiner: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

export default function AboutUs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const { setValue } = props;

  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowConatiner}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowConatiner}
        style={{ marginTop: "3em" }}
      >
        <Typography variant="h4" className={classes.missionStatement}>
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. <b>Quart Ciphers</b> will use
          that principle to provide fast, modern, inexpensive, and aesthetic
          software to the Individual or Organization.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowConatiner}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-around"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          {" "}
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We’re the new kid on the block.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Founded in 2021, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                inﬁnite worlds of possibility. Things that have always been done
                by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container lg justify="center">
            <img
              src={history}
              alt="History"
              style={{ maxHeight: matchesMD ? 200 : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowConatiner}
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            {/* intro */}
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body1" paragraph align="center">
            {/* details */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt="logo"
            src={"https://picsum.photos/200/300?random=1"}
            className={classes.avatar}
          />
        </Grid>

        <Grid item container justify={matchesMD ? "center" : undefined}>
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" paragraph align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                numquam minus illo laudantium nostrum, doloribus dolorem sunt at
                dolore, labore temporibus, architecto vero eligendi itaque dicta
                et quisquam eos ipsa.
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                numquam minus illo laudantium nostrum, doloribus dolorem sunt at
                dolore, labore temporibus, architecto vero eligendi itaque dicta
                et quisquam eos ipsa.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD ? "2.5em" : 0 }}
          >
            <Grid item>
              <img
                src="https://picsum.photos/200/300?random=2"
                alt="random"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                Lorem ipsum dolort amettatib earum alias.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" paragraph align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                numquam minus illo laudantium nostrum, doloribus dolorem sunt at
                dolore, labore temporibus, architecto vero eligendi itaque dicta
                et quisquam eos ipsa.
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
                numquam minus illo laudantium nostrum, doloribus dolorem sunt at
                dolore, labore temporibus, architecto vero eligendi itaque dicta
                et quisquam eos ipsa.
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid item>
              <img
                src="https://picsum.photos/200/300?random=3"
                alt="random"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                Lorem ipsum dolort amettatib earum alias.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Calltoaction setValue={setValue} />
      </Grid>
    </Grid>
  );
}
