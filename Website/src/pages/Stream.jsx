import { useState } from "react";
import { Box, Container, Grid, Typography, Modal } from "@mui/material"
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
            <Grid item xs={12} sm={8} md={6}>
              <Typography variant="h1" gutterBottom color="white">
                Listen!
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
      {/* Marquee Section */}
      <Box 
        py={{ xs: 2, sm: 4, md: 10, lg: 24 }}
        sx={{
        py: 6,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "secondary.main",
        overflow: "hidden",
        gap: 2,
      }}>
        <Typography variant="h1" color={"white"} sx={{ textAlign: "center" }}>Our Content</Typography>
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
                  cursor: "pointer"
                }}
                onClick={() => handleOpen(item.location)}
                loading="lazy"
              />
            </Box>
          ))}
        </Marquee>
       
    </Box>
     {/* Image Modal */}
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%', 
            maxWidth: '600px', 
            overflow: 'hidden',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
          }}
        >
          <img 
            src={SelectedImg} 
            style={{
              width: "100%",
              height: 'auto',
              display: 'block'
            }} 
          />
        </Box>
      </Modal>
    </>
  )
}

export default Stream