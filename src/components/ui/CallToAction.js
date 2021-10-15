import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import ButtonArrow from "../ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
}));

export default function Calltoaction() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2">
              {" "}
              Take Advantage of the 21st Century{" "}
            </Typography>
            <Grid item>
              <Button variant="outlined" className={classes.learnButtonHero}>
                <span style={{ marginRight: 10 }}>Learn More</span>
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
    </Grid>
  );
}
