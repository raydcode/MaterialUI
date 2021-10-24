
import React from 'react';
import Lottie from 'react-lottie';
import { Grid } from '@material-ui/core';
import notFoundAnimation from '../animations/notfoundAnimation/data.json';

export default function NotFound() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: notFoundAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

    return (
      <Grid container direction justify="center" align="center" style={{height:"100vh"}}>
           <Grid item >
               <Lottie options={defaultOptions} width="100%" height="100%"></Lottie>
           </Grid>
      </Grid>
    )
}

