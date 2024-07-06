import React, { useState } from 'react';
import { Button, Container, Typography, Modal, Box, TextField, Grid, Paper, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';
import RaEImg from './assets/Images/ReE.jpg'
import BelowSection from './Components/BelowSection/BelowSection';
const App = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/referrals', formData);
      console.log('Referral submitted:', response.data);
      handleClose();
    } catch (error) {
      console.error('Error submitting referral:', error);
    }
  };

  return (
    <Container style={{ minHeight: '100vh', padding: '2rem' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
              Refer & Earn
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Refer Now
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h5" gutterBottom>
              How It Works
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at lacinia enim.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Sed dictum tellus vel eros vestibulum, in pharetra tellus congue.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={RaEImg}
              alt="Refer & Earn"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Benefits
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Earn rewards for every successful referral. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* BelowSection Component */}
        <Grid item xs={12}>
          <BelowSection />
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ width: 400, bgcolor: 'background.paper', p: 3, margin: 'auto' }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Referral Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="referrerName"
              label="Your Name"
              fullWidth
              margin="normal"
              value={formData.referrerName}
              onChange={handleChange}
              required
            />
            <TextField
              name="referrerEmail"
              label="Your Email"
              type="email"
              fullWidth
              margin="normal"
              value={formData.referrerEmail}
              onChange={handleChange}
              required
            />
            <TextField
              name="refereeName"
              label="Friend's Name"
              fullWidth
              margin="normal"
              value={formData.refereeName}
              onChange={handleChange}
              required
            />
            <TextField
              name="refereeEmail"
              label="Friend's Email"
              type="email"
              fullWidth
              margin="normal"
              value={formData.refereeEmail}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
};

export default App;