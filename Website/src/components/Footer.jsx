import { Container,Box, Grid, Typography, Link } from "@mui/material"
import KqwzLogo from '../assets/KqwzLogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <>
        <Box component="footer" sx={{ 
            bgcolor: 'primary.light', 
            borderTop: "1px solid white",
            color: "white",
            }}
        >
            <Container>
                <Grid 
                    container
                    justifyContent={"center"}
                    py={4}
                >
                    {/* Logo Section */}
                    <Grid item xs={10} sm={10} md={10} lg={2}
                        sx={{

                        }}
                    >
                        <Link href='/'>
                            <img src={KqwzLogo} alt="KQWZ Logo" style={{ width: "100%" }} />
                        </Link>
                    </Grid>
                    {/* Header Section */}
                    <Grid Item xs={10} sm={10} md={5} lg={3}
                        sx={{
                        textAlign: "center",
                        }}
                    >
                        <Typography variant="h6">
                        1225 S Weller St Ste 430
                        <br/>
                        Seattle, WA, 98144
                        <br/>
                        <Link href="tel:253-293-1003" color="primary.dark">(253) 293-1003</Link>
                        <br/>
                        <Link href="mailto:test@example.com" color="primary.dark">Chris.KQWZ@weareoneamerica.org</Link>
                        </Typography>
                    </Grid>
                    <Grid Item xs={3} sm={3} md={3} lg={2}
                        sx={{
                        textAlign: "center",
                        }}
                    >
                        <Typography variant="h6" color="inherit">Sitemap</Typography>
                        <Link href="/" color="inherit">Home</Link><br/>
                        <Link href="/stream" color="inherit">Stream</Link><br/>
                        <Link href="/about" color="inherit">About</Link><br/>
                        <Link href="/contact" color="inherit">Contact</Link>
                    </Grid>
                     {/* Facebook Link */}
                     <Grid Item xs={3} sm={3} md={3} lg={2}
                        sx={{
                        textAlign: "center",
                        }}
                    >
                        <Typography variant="h6" color="inherit">Follow Us</Typography>
                        <Link href="https://www.facebook.com/profile.php?id=61552098129072" color="inherit" target="_blank" sx={{display: "flex", justifyContent: "center"}}>
                            <FacebookIcon /> Facebook
                        </Link>
                    </Grid>
                    {/* Copyright Notice */}
                    <Grid Item xs={10} sm={3} md={3} lg={2}
                        sx={{
                        textAlign: "center",
                        }}
                    >
                        <Typography variant="h6" color="inherit">© {new Date().getFullYear()} One America Voice</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
  )
}

export default Footer