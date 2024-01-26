import { useState } from "react";
import { Box, Container, Grid, ImageList, ImageListItem, Typography, Modal } from "@mui/material"
import HeadphoneImage from '../assets/headphones.jpg';
import RadioPlayer from "../components/RadioPlayer";
import flyers from "../flyers.js"

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
      <Container>
      <Box py={{ xs: 2, sm: 4, md: 10, lg: 20 }}>
        <Typography variant="h2" py={4} textAlign={"center"} sx={{color: "tertiary.main"}}>Flyers</Typography>
        <ImageList 
        gap={12}
        sx={{
          gridTemplateColumns: 
          `repeat(auto-fill, minmax(280px, 1fr))!important`
          }}
        >
          {flyers.map((item) => (
            <ImageListItem key={(item.location)} onClick={() => handleOpen(item.location)} sx={{cursor: "pointer"}}>
              <img 
                src={item.location}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      </Container>
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
          boxShadow: 24,
          outline: 'none',
          maxWidth: '90%',
          maxHeight: '90%',
          overflow: 'auto'
          }}
        >
          <img src={SelectedImg} style={{width: "100%"}} />
        </Box>
      </Modal>
    </>
  )
}

export default Stream