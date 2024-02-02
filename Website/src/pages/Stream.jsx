import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material"
import HeadphoneImage from '../assets/headphones.jpg';
import RadioPlayer from "../components/RadioPlayer";
import flyers from "../flyers.js"
import Marquee from "react-fast-marquee";

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
      {/* Marquee Section */}
      <Box sx={{
        py: 6,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "secondary.main",
        overflow: "hidden",
        gap: 2,
      }}>
        <Typography variant="h1" color={"tertiary.main"} sx={{ textAlign: "center" }}>Our Content</Typography>
        <Marquee style={{width: "90%"}} speed={30}>
          {flyers.map((item, index) => (
            <Box key={index} sx={{
              marginLeft: '10px', 
              marginRight: '10px', 
              }}
            >
              <img
                src={item.location}
                alt={item.alt}
                style={{
                  height: "40vh",
                  width: "auto", 
                }}
                loading="lazy"
              />
            </Box>
          ))}
        </Marquee>
    </Box>
    </>
  )
}

export default Stream