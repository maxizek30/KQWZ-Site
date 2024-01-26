import { Box, Container, Grid, ImageList, ImageListItem, Typography } from "@mui/material"
import HeadphoneImage from '../assets/headphones.jpg';
import RadioPlayer from "../components/RadioPlayer";
import flyers from "../flyers.js"

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
              <Typography variant="h5" color="white">Tune in to OneAmerica Voice - KQWZ and experience a world of stories, music, and conversations that celebrate our rich cultural tapestry."</Typography>
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
      {/* Flyer Section */}
      <Box py={{ xs: 2, sm: 4, md: 10, lg: 20 }}>
        <Typography variant="h1" color="secondary">Flyers</Typography>
        <ImageList cols={4} gap={12}>
          {flyers.map((item) => (
            <ImageListItem key={(item.location)}>
              <img 
                src={item.location}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  )
}

export default Stream