import { Grid, Typography, Button, Box, Container } from "@mui/material";
import MicImage from '../assets/microphone.jpg'
import OnAirImage from '../assets/OnAir.png'
import ContactUsImage from '../assets/ContactUs.jpg'

function Home() {
  return (
    <>
    {/* Hero Section */}
    <Box
      sx={{
        backgroundImage: `url(${MicImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh', // Full viewport height
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
              A low Power signal that magnifies the voices in the community
            </Typography>
            <Typography variant="h5" color="white">
              Bringing South King County's diverse voices to the forefront, our low power signal is a beacon of community connection and cultural richness.
            </Typography>
            <Box display="flex" gap={2}>
              <Button href="/about" variant="contained" color="inherit" size="large">
                Learn More
              </Button>
              <Button href= "/stream" variant="contained" color="tertiary" size="large">
                Listen!
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    {/* Who We Are Section */}
    <Box 
      sx={{
      width: "100%", 
      bgcolor: "white",
      }}
    >
      <Container>
        <Grid container
          py={{ xs: 2, sm: 4, md: 10, lg: 24 }}
          direction={"row-reverse"}
          sx={{
            justifyContent: "space-between",
            gap: 2
          }}
        >
          <Grid item xs={12} s={10} md={4}
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "flex-start",
            gap: 4,
            justifyContent: "center",
          }}>
            <Typography variant="h2" color="black">Who We Are</Typography>
            <Typography variant="h5" color="black">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</Typography>
            <Button href="/about" variant="contained" color="secondary" size="large">Learn More</Button>
          </Grid>
          <Grid item xs={12} s={10} md={7}>
            <img src={OnAirImage} alt="Description" style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
    {/* Contact Us Section */}
    <Box 
        sx={{
        width: "100%", 
        bgcolor: "tertiary.main",
      }}
    >
      <Container>
        <Grid container
        py={{ xs: 2, sm: 4, md: 10, lg: 24 }}
        sx={{
          justifyContent: "space-between",
          direction: "row",
          gap: 2
          }}
        >
          <Grid item xs={12} s={10} md={4}
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "flex-start",
            gap: 4,
            justifyContent: "center",
          }}>
            <Typography variant="h2" color="white">Contact Us!</Typography>
            <Typography variant="h5" color="white">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</Typography>
            <Button href="/contact" variant="contained" color="secondary" size="large">Contact Us!</Button>
          </Grid>
          <Grid item xs={12} s={10} md={7}>
            <img src={ContactUsImage} alt="Description" style={{ width: '100%', height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  );
}

export default Home;
