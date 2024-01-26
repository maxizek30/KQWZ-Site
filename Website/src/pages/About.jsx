import { Box, Container, Grid, Paper, Typography } from "@mui/material"
import Logo from '../assets/HighlineHeritageLogo.png'
import Map from '../assets/map.png'
import StudioImage from "../assets/StudioImage.jpg"
import AboutImage from "../assets/StudioDroneShot.jpg"



function About() {
  return (
    <>
      {/* Hero Section */}
      <Box sx={{
          backgroundImage: `url(${AboutImage})`,
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
              <Typography variant="h1" gutterBottom color="white">About Us!</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Mission Section */}
      <Box sx={{
        width: "100%",
        bgcolor: "primary.main"
        }}
      >
        <Container>
          <Grid container
          py={{ xs: 2, sm: 4, md: 10, lg: 24 }}
          direction="row"
          gap={2}
          justifyContent="space-between"
          >
            <Grid item xs={12} s={10} md={4}
              sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: "flex-start",
              gap: 2,
              justifyContent: "center",
              }}
            >
              <Typography variant="h2" color="white">Our Mission!</Typography>
              <Typography variant="h5" color="white">
                OneAmerica Radio, through KQWZ, addresses the specific needs of these communities by providing culturally relevant and in-language programming. We understand that the pulse of South King County lies in its diversity and cultural richness, which is why our content is tailored to reflect these unique characteristics.
              </Typography>
            </Grid>
            <Grid item xs={12} s={10} md={7}>
              <img src={StudioImage} alt="Description" style={{ width: '100%', height: '100%' }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Partnership Section */}
      <Container>
        <Grid container
        direction="row-reverse"
        gap={2}
        justifyContent="space-between"
        py={{ xs: 2, sm: 4, md: 10, lg: 20 }}
        >
          <Grid item xs={12} s={10} md={4}
            sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: "center",
            }}
          >
            <Typography variant="h2">Partnership</Typography>
            <Typography variant="h5">
              In a groundbreaking collaboration with the Highline Heritage Museum, OneAmerica Voice is dedicated to:
              <ul>
                <li>
                  Celebrating Cultural Heritage: Broadcasting programs that highlight the cultural tapestry of our communities and the significant work of local nonprofits.
                </li>
                <li>
                  Empowering Through Education: Featuring content from local schools and other museums, offering insightful and educational perspectives.
                </li>
                <li>
                  Fostering Community Engagement: Hosting and covering community forums and events that encourage dialogue and collective action for a better future.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} s={10} md={7} sx={{ display: "flex", alignItems: "center"}}>
            <img src={Logo} alt="Description" style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </Container>
      {/* Our Programs Section */}
      <Box sx={{
        width: "100%",
        bgcolor: "secondary.main"
        }}
      >
        <Container sx={{
          py: { xs: 2, sm: 4, md: 10, lg: 24 }
        }}
        >
          <Paper
            elevation={24}
            sx={{
            color: "black",
            padding: 2,
          }}>
            <Typography variant="h2">Our Programs</Typography>
            <Typography variant="h5">
              Our programming spans a wide array of topics, including:
              <ul>
                <li>Upcoming community events and forums</li>
                <li>Know Your Rights training sessions</li>
                <li>Music shows celebrating diverse genres</li>
                <li>Engaging talk shows</li>
                <li>And much more - all delivered in various languages to cater to our diverse audience.</li>
              </ul>
            </Typography>
          </Paper>
        </Container>
      </Box>
      {/* Commitment Section*/}
      <Box sx={{
        width: "100%",
        bgcolor: "tertiary.main"
        }}
      >
        <Container>
          <Grid container
          py={{ xs: 2, sm: 4, md: 10, lg: 24 }}
          direction="row"
          gap={2}
          justifyContent="space-between"
          >
            <Grid item xs={12} s={10} md={4}
              sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: "flex-start",
              gap: 2,
              justifyContent: "center",
              }}
            >
              <Typography variant="h2" color="white">Commitment</Typography>
              <Typography variant="h5" color="white">
                We are more than a radio station; we are a low power signal that amplifies the voices of our community. We are committed to providing vital information on community services, assisting residents, especially those new to the area or with limited English language skills.
              </Typography>
            </Grid>
            <Grid item xs={12} s={10} md={7}>
              <img src={Map} alt="Description" style={{ width: '100%', height: '100%' }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default About