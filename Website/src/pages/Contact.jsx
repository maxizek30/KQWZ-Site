import { Box, Container, Grid, Typography } from "@mui/material"
import ContactForm from "../components/ContactForm"

function Contact() {
  return (
    <>
    {/* Header Section */}
    <Box sx={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'grey',
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
            <Typography variant="h1" gutterBottom color="white">Contact Us!</Typography>
            <Typography variant="h5" color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    {/* ContactForm Section */}
    <Box sx={{
      backgroundColor: "secondary.main",
      py: 6
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
      py: 6
      }}
    >
      <Container>
        <Typography variant="h2">Direct Contact Information</Typography>
        <Typography variant="h5">
          If you prefer direct communication, here are our contact details:
          <ul>
            <li>Email
              <ul>
                <li>General Inquiries: Chris.KQWZ@weareoneamerica.org</li>
                <li>Partnership Inquiries: Director@highlinemuseum.org</li>
              </ul>
            </li>
            <li>Phone
              <ul>
                <li>Chris at KQWZ: (253) 293-1003</li>
                <li>Director at Highline Heritage Museum: (206) 402-4029</li>
              </ul>
            </li>
            <li>Physical Address:
              <ul>
                <li>1225 S Weller St Ste 430, Seattle, WA 98144</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Container>
    </Box>
    </>
  )
}

export default Contact