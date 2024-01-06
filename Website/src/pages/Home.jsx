import { Grid, Typography, Button, Box, Container } from "@mui/material";
import HeroImage from '../assets/backgroundImage.jpg';

function Home() {
  return (
    <>
    <Box
      sx={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh', // Full viewport height
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
            <Box display="flex" gap={2}>
              <Button variant="contained" color="inherit" size="large">
                Learn More
              </Button>
              <Button variant="contained" color="tertiary" size="large" sx={{ color: "black" }}>
                Listen!
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Container>
      <Box>
        <Typography variant="h2">Who We Are</Typography>
        <Typography variant="h5">The bulk of all patents are crap. Spending time reading them is stupid. It's up to the patent owner to do so, and to enforce them. (Linus Torvalds) Java is, in many ways, C++–. (Michael Feldman) If debugging is the process of removing bugs, then programming must be the process of putting them in. (Edsger W. Dijkstra) I think there's a world market for about 5 computers. (Thomas J. Watson, Chairman of the Board, IBM, circa 1948)</Typography>
        <Button variant="contained" color="secondary" size="medium">
                Learn More
        </Button>
      </Box>
    </Container>
    </>
  );
}

export default Home;
