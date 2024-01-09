import { Box, Container, Grid, Typography } from "@mui/material"
import HeadphoneImage from '../assets/headphones.jpg';
import RadioPlayer from "../components/RadioPlayer";

function Stream() {
  return (
    <>
      {/* Header Section */}
      <Box sx={{
        backgroundImage: `url(${HeadphoneImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "40vh",
        width: '100%', // Full width
        display: 'flex', // Use flexbox
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={6} sx={{display: "flex", flexDirection: "column", gap: 1}}>
              <Typography variant="h1" gutterBottom color="white">
                Listen!
              </Typography>
              <Typography variant="h5" color="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Radio Player Section */}
      <Box sx={{
        bgcolor: "primary.main",
        py: 6
        }}
      >
        <RadioPlayer />  
      </Box>
    </>
  )
}

export default Stream