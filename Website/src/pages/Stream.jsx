import { useState } from "react";
import { Box, Container, Grid, ImageList, ImageListItem, Typography, Modal } from "@mui/material"
import HeadphoneImage from '../assets/headphones.jpg';
import RadioPlayer from "../components/RadioPlayer";
import flyers from "../flyers.js"
import ImageGallery from "../components/ImageGallery.jsx";

function Stream() {
  const [open, setOpen] = useState(false);
  const [SelectedImg, setSelectedImg] = useState('');

  const handleOpen = (imgSrc) => {
    setSelectedImg(imgSrc);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  
  return (
    <>
      {/* Hero Section */}
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
      <ImageGallery title="Our Content" images={flyers} />
    </>
  )
}

export default Stream