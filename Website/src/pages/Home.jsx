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
        height: '80vh', 
        width: '100%', 
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center', 
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
            <Typography variant="h5" color="black">At OneAmerica Voice - KQWZ, we are more than just a radio station; we are a community-driven platform dedicated to giving a voice to the diverse cultures and stories of South King County. Our commitment lies in weaving a tapestry of local narratives and perspectives, fostering understanding and unity through the power of broadcasting.</Typography>
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
            <Typography variant="h5" color="white">Your voice is crucial to the chorus of our community. Reach out to OneAmerica Voice - KQWZ for inquiries, feedback, or to share your story, and let's make South King County's narrative stronger together.</Typography>
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
