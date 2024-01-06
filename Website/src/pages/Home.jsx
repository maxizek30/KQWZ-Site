import { Grid, Paper, Typography, Button } from "@mui/material"
import HeroImage from '../assets/backgroundImage.jpg'

function Home() {
  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
        }}
      >
        <Grid
          container
          alignItems="center"
          sx={{ height: '100%' }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h2" gutterBottom>
              Welcome to Our Website
            </Typography>
            <Typography variant="h5" gutterBottom>
              Explore our amazing products and services.
            </Typography>
            <Button variant="contained" color="primary" size="large">
            Learn More
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default Home