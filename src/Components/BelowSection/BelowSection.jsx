import React from 'react';
import { Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import HtRImg from "../../assets/Images/HtR.png"

const BelowSection = () => {
  return (
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={HtRImg}
            alt="Benefits"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Additional Benefits
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Earn rewards for every successful referral. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom>
          How to Refer
        </Typography>
        <Typography variant="body1" gutterBottom>
          Share your referral link with friends and earn rewards when they sign up.
        </Typography>
        <Button variant="contained" color="primary">
          Get Referral Link
        </Button>
      </Grid>
    </Grid>
  );
};

export default BelowSection;
