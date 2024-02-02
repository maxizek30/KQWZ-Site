import { useState } from "react";
import { Box, Container, ImageList, ImageListItem, Typography, Modal } from "@mui/material"


function ImageGallery(props) {
    const [open, setOpen] = useState(false);
    const [SelectedImg, setSelectedImg] = useState('');
    const images = props.images;

    const handleOpen = (imgSrc) => {
        setSelectedImg(imgSrc);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);
  return (
   <>
    {/* Gallery Section */}
    <Container>
      <Box py={{ xs: 2, sm: 4, md: 10, lg: 20 }}>
        <Typography variant="h2" py={4} textAlign={"center"} sx={{color: "tertiary.main"}}>{props.title}</Typography>
        <ImageList 
        gap={12}
        sx={{
          gridTemplateColumns: 
          `repeat(auto-fill, minmax(280px, 1fr))!important`
          }}
        >
          {images.map((item) => (
            <ImageListItem key={(item.location)} onClick={() => handleOpen(item.location)} sx={{cursor: "pointer"}}>
              <img 
                src={item.location}
                alt={item.alt}
                loading="lazy"
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

export default ImageGallery