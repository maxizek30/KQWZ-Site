import { Box, Grid, Typography, Link } from "@mui/material"
import BusinessIcon from '@mui/icons-material/Business';
import KqwzLogo from '../assets/KqwzLogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <>
        <Box component="footer" sx={{ 
            bgcolor: 'primary.light', 
            borderTop: "1px solid white",
            color: "white",
            }}
        >
            <Grid 
                container
                justifyContent="space-around"
                py={4}
                gap={6}
            >
                {/* Logo Section */}
                <Grid item xs={10} md={3}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        alignItems: {
                            xs: "center",
                            md: "flex-start"
                        }
                    }}
                >
                    <Link href='/' sx={{
                        width: "70%"
                        }}
                    >
                        <img src={KqwzLogo} alt="KQWZ Logo" style={{ width: "100%" }} />
                    </Link>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2
                        }}
                    >  
                        <Link href="/" color="inherit">Home</Link> |
                        <Link href="/stream" color="inherit">Stream</Link> |
                        <Link href="/about" color="inherit">About</Link> |
                        <Link href="/contact" color="inherit">Contact</Link>
                    </Box>
                    <Typography variant="h6" color="inherit">OneAmerica Voice © {new Date().getFullYear()}</Typography>
                </Grid>
                {/* info Section */}
                <Grid Item xs={10} md={"auto"}
                    sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: {
                        xs: "center",
                        md: "flex-start"
                    }
                    }}
                >
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2
                        }}
                    >
                        <BusinessIcon />
                        <Typography variant="h6">
                            1225 S Weller St Ste 430<br />
                            Seattle, WA, 98144
                        </Typography>
                    </Box>
                    <Link href="tel:206-723-2203">
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2
                            }}
                        >
                            <LocalPhoneIcon />
                            <Typography variant="h6">(206) 723-2203</Typography>
                        </Box>
                    </Link>
                    <Link href="mailto:test@example.com">
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2
                            }}
                        >
                            <EmailIcon />
                            <Typography variant="h6">Chris.KQWZ@weareoneamerica.org</Typography>
                        </Box>
                    </Link>
                </Grid>
                
                {/* About Section */}
                <Grid Item xs={10} md={3}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        alignItems: {
                            xs: "center",
                            md: "flex-start"
                        },
                        textAlign: {
                            xs: "center",
                            md: "left"
                        }
                    }}
                >

                    <Typography variant="h6" color="inherit">A low Power signal that magnifies the voices in the community</Typography>
                    <Link href="https://www.facebook.com/profile.php?id=61552098129072" color="inherit" target="_blank">
                        <FacebookIcon fontSize="large"/>
                    </Link>
                </Grid>                
            </Grid>
        </Box>
    </>
  )
}

export default Footer