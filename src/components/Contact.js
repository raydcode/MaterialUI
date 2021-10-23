import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  useMediaQuery,
  Button,
  TextField,
} from "@material-ui/core";

import {
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";

import background from "../assets/background.jpg";
import mobilebackground from "../assets/mobileBackground.jpg";
import Phone from "./icons/Phone";
import Email from "./icons/Email";
import SendIcon from "@material-ui/icons/Send";
import ButtonArrow from "./ui/ButtonArrow";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobilebackground})`,
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
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.black}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 220,
    backgroundColor: theme.palette.common.black,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const { setValue } = props;

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Please Enter Vaild Email");
        } else {
          setEmailHelper("");
        }
        break;

      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Please Enter Vaild Phone Number");
        } else {
          setPhoneHelper("");
        }
        break;

      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .get('https://us-central1-qc-landingpage.cloudfunctions.net/sendMail', {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message Sent Successfully",
          backgroundColor: "#4BB543",
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong,please try again",
          backgroundColor: "#FF3232",
        });
      });
  };

  const buttonContent = ( <>
             
               Send message

                 </>);

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSm ? "1em" : matchesMD ? "5em" : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                style={{ lineHeight: 1 }}
                align={matchesMD ? "center" : undefined}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.red }}
                align={matchesMD ? "center" : undefined}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <Phone
                  fill={theme.palette.primary.light}
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.red, fontSize: "1rem" }}
                >
                  <a
                    href="tel:8489824496"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (+91)-8489824496
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <Email
                  fill={theme.palette.primary.light}
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.red, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:ping@quartciphers.in"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    ping@quartciphers.in
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Name"
                    id="name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Email"
                    id="email"
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    fullWidth
                    value={email}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Phone"
                    id="phone"
                    error={phoneHelper.length !== 0}
                    helperText={phoneHelper}
                    fullWidth
                    value={phone}
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                className={classes.message}
                InputProps={{ disableUnderline: true }}
                id="message"
                multiline
                fullWidth
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                variant="contained"
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  email.length === 0
                }
                className={classes.sendButton}
                endIcon={<SendIcon style={{ marginLeft: "1em" }} />}
                onClick={() => setOpen(true)}
              >
                {buttonContent}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "1.5em",
            paddingBottom: matchesXS ? "1em" : "1.5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSm
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
            paddingRight: matchesXS
              ? 0
              : matchesSm
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                id="email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Phone"
                id="phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>

            <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
              <TextField
                className={classes.message}
                InputProps={{ disableUnderline: true }}
                id="message"
                multiline
                fullWidth
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              direction={matchesSm ? "column" : "row"}
              style={{ marginTop: "2em" }}
              alignItems="center"
            >
              <Grid
                item
                style={{
                  marginRight: matchesMD ? 0 : "2em",
                  marginBottom: matchesMD ? "1em" : 0,
                }}
              >
                <Button
                  style={{ fontWeight: 300 }}
                  color="primary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0 ||
                    email.length === 0
                  }
                  className={classes.sendButton}
                  endIcon={
                    loading ? (
                      <> </>
                    ) : (
                      <SendIcon style={{ marginLeft: "1em" }} />
                    )
                  }
                  onClick={onConfirm}
                >
                  {loading ? (
                    <CircularProgress size={30} color="primary" />
                  ) : (
                    buttonContent
                  )}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      <Grid
        item
        container
        className={classes.background}
        direction={matchesMD ? "column" : "row"}
        lg={8}
        xl={9}
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontSize: "1.5em" }}
                align={matchesMD ? "center" : undefined}
              >
                {" "}
                Take Advantage of the 21st Century{" "}
              </Typography>
              <Grid container item justify={matchesMD ? "center" : undefined}>
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
    </Grid>
  );
}
