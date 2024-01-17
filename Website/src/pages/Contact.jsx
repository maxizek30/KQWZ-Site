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
                <CopyToClipboard text="2532931003" onCopy={handleCopy}>
                  <Box sx={{ cursor: 'pointer', textAlign: 'center' }}>
                    <LocalPhoneIcon sx={{ fontSize: "6rem"}}/>
                    <Typography variant="h5">(253) 293-1003</Typography>
                  </Box>
                </CopyToClipboard>   
              </Grid>
            </Tooltip>
            <Tooltip title="Copy Email">
              <Grid item xs={12} sm={10} md={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2
                  }}
              >
                <CopyToClipboard text="Chris.KQWZ@weareoneamerica.org" onCopy={handleCopy}>
                  <Box sx={{ cursor: 'pointer', textAlign: 'center' }}>
                    <EmailIcon sx={{ fontSize: "6rem" }}/>
                    <Typography variant="h5">Chris.KQWZ@weareoneamerica.org</Typography>
                  </Box>
                </CopyToClipboard>
              </Grid>
            </Tooltip>
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