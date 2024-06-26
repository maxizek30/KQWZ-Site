import { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, Snackbar, Tooltip, Button, Paper, TextField} from "@mui/material"
import ContactImage from "../assets/ContactUs.jpg"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BusinessIcon from '@mui/icons-material/Business';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Contact() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

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
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} 
    />
    {/* Hero Section */}
    <Box sx={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'grey',
      backgroundImage: `url(${ContactImage})`,
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
            <Typography variant="h1" gutterBottom color="white">Contact Us!</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    {/* ContactForm Section */}
    <Box
        py={{ xs: 8, sm: 10, md: 16, lg: 24 }}
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
          <Paper sx={{
            padding: 2 
          }}>
            <Box
            sx={{ mt: 3 }}
            textAlign={"left"}
            >
                <Typography variant="h6">Contact Us</Typography>
                {success && (
                  <p style={{ color: "green" }}>Thanks for your message! </p>
                )}
                <form 
                    name="contact" 
                    method="POST" 
                    action="https://kqwzradio.org//contact/?success=true" 
                    data-netlify="true"
                    netlify
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            label="First Name"
                            name="firstName"
                            autoComplete="given-name"
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Message"
                            name="message"
                            multiline
                            rows={4}
                        />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Send
                    </Button>
                </form>
            </Box>
        </Paper>
      </Container>
    </Box>
    {/* Information Section */}
    <Box sx={{
      backgroundColor: "tertiary.main",
      color: "white",
      }}
    >
      <Container>
        <Box
            py={{ xs: 8, sm: 10, md: 16, lg: 24 }}
            sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'center',
            gap: 6
            }}
        >
          <Typography variant="h2" sx={{textAlign: "center"}}>Direct Contact Information</Typography>
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