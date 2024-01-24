import { useState } from "react";
import { Box, Container, Grid, Typography, Snackbar, Tooltip} from "@mui/material"
import ContactForm from "../components/ContactForm"
import ContactImage from "../assets/ContactUs.jpg"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BusinessIcon from '@mui/icons-material/Business';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Contact() {
  const [open, setOpen] = useState(false);
  const handleCopy = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
    <Snackbar 
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      message="Copied!"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // Position of the Snackbar
    />
    {/* Header Section */}
    <Box sx={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'grey',
      backgroundImage: `url(${ContactImage})`,
      height: "40vh",
      width: '100%', // Full width
      display: 'flex', // Use flexbox
      alignItems: 'center', // Center vertically
      justifyContent: 'center', // Center horizontally
      }}
    >
      <Container>
        <Grid container spacing={2}
>
          <Grid item xs={12} sm={8} md={6} sx={{display: "flex", flexDirection: "column", gap: 1}}>
            <Typography variant="h1" gutterBottom color="white">Contact Us!</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    {/* ContactForm Section */}
    <Box 
    py={{ xs: 2, sm: 4, md: 10, lg: 20 }}
    sx={{
      backgroundColor: "secondary.main",
      }}
    >
      <Container sx={{
        textAlign: 'center',
        display: "flex",
        flexDirection: "column",
        gap: 4,
        }}
      >
        <Box>
          <Typography variant="h2" color="white">Contact From</Typography>
          <Typography variant="h5" color="white"> Feel free to use the form below to send us a message directly:</Typography>
        </Box>
        <ContactForm />
      </Container>
    </Box>
    {/* Infromation Section */}
    <Box sx={{
      backgroundColor: "tertiary.main",
      color: "white",
      }}
    >
      <Container>
        <Box
          py={{ xs: 2, sm: 4, md: 10, lg: 24 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'center',
            gap: 6
          }}
        >
          <Typography variant="h2">Direct Contact Information</Typography>
          <Grid 
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            rowSpacing={4}

          >
            <Tooltip title="Copy Phone Number">
              <Grid item xs={12} s={10} md={4} 
                sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2
                }}
              >    
                <CopyToClipboard text="2064024029" onCopy={handleCopy}>
                  <Box sx={{ cursor: 'pointer', textAlign: 'center' }}>
                    <LocalPhoneIcon sx={{ fontSize: "6rem"}}/>
                    <Typography variant="h5">(206) 402-4029</Typography>
                  </Box>
                </CopyToClipboard>   
              </Grid>
            </Tooltip>
            <Grid item xs={12} sm={10} md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2
                }}
            >
              
              <Box sx={{ textAlign: 'center' }}>
                <EmailIcon sx={{ fontSize: "6rem" }}/>
                <CopyToClipboard text="Chris.KQWZ@weareoneamerica.org" onCopy={handleCopy}>
                  <Tooltip title="Copy Email">
                    <Typography variant="h5"  sx={{ cursor: "pointer" }}>Chris.KQWZ@weareoneamerica.org</Typography>
                  </Tooltip>
                </CopyToClipboard>
                or
                <CopyToClipboard text="director@highlinemuseum.org" onCopy={handleCopy}>
                  <Tooltip title="Copy Email">
                    <Typography variant="h5" sx={{ cursor: "pointer" }}>director@highlinemuseum.org</Typography>
                  </Tooltip>
                </CopyToClipboard>
                or
                <CopyToClipboard text="Magaly@weareoneamerica.org" onCopy={handleCopy}>
                  <Tooltip title="Copy Email">
                    <Typography variant="h5"  sx={{ cursor: "pointer" }}>Magaly@weareoneamerica.org</Typography>
                  </Tooltip>
                </CopyToClipboard>
              </Box>
            </Grid>
            <Tooltip title="Copy Adress">
              <Grid item xs={12} s={10} md={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2
                  }}
              >
                <CopyToClipboard text="819 SW 152nd S Burien, WA 98166" onCopy={handleCopy}>
                  <Box sx={{ cursor: 'pointer', textAlign: 'center' }}>
                    <BusinessIcon sx={{ fontSize: "6rem"}}/>
                    <Typography variant="h5">819 SW 152nd St<br/>Burien, WA 98166</Typography>
                  </Box>
                </CopyToClipboard>
              </Grid>
            </Tooltip>
          </Grid>
        </Box>
      </Container>
    </Box>
    </>
  )
}

export default Contact