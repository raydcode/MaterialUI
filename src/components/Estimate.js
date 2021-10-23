import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  useMediaQuery,
  IconButton,
  Hidden,
  Button,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
  TextField,
} from '@material-ui/core';
import { cloneDeep } from 'lodash';

import ForwardArrow from './icons/ForwardArrow';
import BackArrow from './icons/BackArrow';
import Check from './icons/Check';
import SendIcon from '@material-ui/icons/Send';
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg';
import backArrowDisabled from '../assets/backArrowDisabled.svg';

import estimateAnimation from '../animations/estimateAnimation/data.json';

import {
  defaultQuestions,
  softwareQuestions,
  websiteQuestions,
} from '../utils';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '12em',
    height: '10em',
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.black,
    height: 50,
    width: 225,
    fontSize: '1.25rem',
    marginTop: '5em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.black}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  specialText: {
    fontFamily: 'Raleway',
    fontWeight: 700,
    fontSize: '1.5rem',
    color: theme.palette.common.black,
  },
}));

export default function Estimate(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const { setValue } = props;

  const [questions, setQuestions] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  const [total, setTotal] = useState(0);

  const [service, setService] = useState([]);

  const [platforms, setPlatforms] = useState([]);

  const [features, setFeatures] = useState([]);

  const [customFeatures, setCustomFeatures] = useState('');

  const [category, setCategory] = useState('');

  const [users, setUsers] = useState('');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0]?.id === 1) {
      return true;
    } else {
      return false;
    }
  };

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0]?.id === questions[questions.length - 1]?.id) {
      return true;
    } else {
      return false;
    }
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];
    const previousSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    switch (currentlyActive[0].subtitle) {
      case 'Select one.':
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;

      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case 'Custom Software Development':
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        break;
      case 'iOs/Android Development':
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        break;
      case 'Website Development':
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        break;
      default:
        setQuestions(newQuestions);
        break;
    }
  };

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper('Please Enter Vaild Email');
        } else {
          setEmailHelper('');
        }
        break;

      case 'phone':
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper('Please Enter Vaild Phone Number');
        } else {
          setPhoneHelper('');
        }
        break;

      default:
        break;
    }
  };

  const getTotal = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.map((options) => options.map((option) => (cost += option.cost)));

    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === 'How many users do you expect?'
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0]?.cost;
      cost -= userCost;
      cost *= userCost;
    }
    console.log(cost);
    setTotal(cost);
  };

  const getPlatforms = () => {
    let newPlatforms = [];
    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === 'Which platforms do you need supported?'
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .map((option) => newPlatforms.push(option.title));

      setPlatforms(newPlatforms);
    }
  };

  const getFeatures = () => {
    let newFeatures = [];
    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === 'Which features do you expect to use?'
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) =>
          option.map((newFeature) => newFeatures.push(newFeature.title))
        );

      setFeatures(newFeatures);
    }
  };

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg>
        <Grid item style={{ marginTop: '2em', marginLeft: '5em' }}>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: '10em', maxWidth: '50em', marginTop: '7.5em' }}
        >
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{ marginRight: '1em', marginBottom: '25em' }}
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <>
              <Grid item key={index}>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: 500,
                    fontSize: '2.25rem',
                    marginTop: '5em',
                    lineHeight: 1.25,
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: '2.5em' }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>

              <Grid item container>
                {question.options.map((option, index) => (
                  <Grid
                    item
                    container
                    direction="column"
                    key={index}
                    md
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                    style={{
                      display: 'grid',
                      textTransform: 'none',
                      borderRadius: 0,
                      backgroundColor: option.selected
                        ? theme.palette.common.black
                        : null,
                    }}
                  >
                    <Grid item style={{ maxWidth: '14em' }}>
                      <Typography variant="h6" align="center">
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </>
          ))}

        <Grid
          item
          container
          justify="space-between"
          style={{ width: '15em', marginTop: '3em' }}
        >
          <Grid item>
            <IconButton
              disabled={navigationPreviousDisabled()}
              onClick={previousQuestion}
            >
              {navigationPreviousDisabled() ? (
                <img src={backArrowDisabled} alt="disabled back arrow" />
              ) : (
                <BackArrow fill={theme.palette.primary.light} />
              )}
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={navigationNextDisabled()}
              onClick={nextQuestion}
            >
              {navigationNextDisabled() ? (
                <img src={forwardArrowDisabled} alt="disabled back arrow" />
              ) : (
                <ForwardArrow fill={theme.palette.primary.light} />
              )}
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              setDialogOpen(true);
              getTotal();
              getPlatforms();
              getFeatures();
            }}
          >
            {' '}
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        style={{ marginTop: '5em' }}
      >
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h2" align="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container>
            <Grid item container direction="column" md={7}>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
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
              <Grid item style={{ marginBottom: '0.5em' }}>
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
              <Grid item style={{ maxWidth: matchesXS ? '100%' : '20em' }}>
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
              <Grid item>
                <Typography variant="body1" paragraph>
                  We can create this digital solution for an estimated{' '}
                  <span className={classes.specialText}>
                    ${total.toFixed(2)}
                  </span>
                </Typography>
                <Typography variant="body1" paragraph>
                  Fill out your name , phone number ,email , place your request
                  , and we'll get back to you with details moving forward and a
                  final price.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" md={5}>
              <Grid item>
                <Grid container direction="column">
                  <Grid item container alignItems="center">
                    <Grid item>
                      <Check fill={theme.palette.primary.light} />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        You want {service}
                        {platforms.length > 0
                          ? ` for ${
                              //if only web application is selected...
                              platforms.indexOf('Web Application') > -1 &&
                              platforms.length === 1
                                ? //then finish sentence here
                                  'a Web Application.'
                                : //otherwise, if web application and another platform is selected...
                                platforms.indexOf('Web Application') > -1 &&
                                  platforms.length === 2
                                ? //then finish the sentence here
                                  `a Web Application and an ${platforms[1]}.`
                                : //otherwise, if only one platform is selected which isn't web application...
                                platforms.length === 1
                                ? //then finish the sentence here
                                  `an ${platforms[0]}`
                                : //otherwise, if other two options are selected...
                                platforms.length === 2
                                ? //then finish the sentence here
                                  'an iOS Application and an Android Application.'
                                : //otherwise if all three are selected...
                                platforms.length === 3
                                ? //then finish the sentence here
                                  'a Web Application, an iOS Application, and an Android Application.'
                                : null
                            }`
                          : null}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/*  */}
                  <Grid item container alignItems="center">
                    <Grid item>
                      <Check fill={theme.palette.primary.light} />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                      {"with "}
                        {/* if we have features... */}
                        {features.length > 0
                          ? //...and there's only 1...
                            features.length === 1
                              ? //then end the sentence here
                              `${features[0]}.`
                              : //otherwise, if there are two features...
                            features.length === 2
                              ? //...then end the sentence here
                              `${features[0]} and ${features[1]}.`
                              : //otherwise, if there are three or more features...
                              features
                            //filter out the very last feature...
                            .filter(
                              (feature, index) =>
                              index !== features.length - 1
                            )
                            //and for those features return their name...
                            .map((feature, index) => (
                              <span key={index}>{`${feature}, `}</span>
                            ))
                          : null}
                        {features.length > 2
                            ? //...and then finally add the last feature with 'and' in front of it
                            ` and ${features[features.length - 1]}.`
                            : null}
                      </Typography>
                    </Grid>
                  </Grid>
                  {/*  */}
                  <Grid item container alignItems="center">
                    <Grid item>
                      <Check fill={theme.palette.primary.light} />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        Third options check
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.estimateButton}
                  endIcon={<SendIcon />}
                >
                  Place Request
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
