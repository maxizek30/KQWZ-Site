import { AppBar, Box, Button, Toolbar } from "@mui/material"
import { Link, useLocation} from "react-router-dom"
import logoUrl from '../assets/logo.jpg'


function Navbar() {
  const location = useLocation(); // Hook to get the current location


  const links = [
    { path: "/", title: "Home" },
    { path: "/stream", title: "Stream" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" }
  ];
  const isActive = (path) => location.pathname === path;


  return (
    <>
      <AppBar component="nav" sx={{ bgcolor: 'white' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1}}>
            <Link component={Link} to="/">
              <img src={logoUrl} alt="Logo" style={{ height: 50 }}/> 
            </Link>
          </Box>
          {links.map((link, index) => (
            <Button 
              key={index} 
              component={Link} 
              to={link.path} 
              sx={{
                width: "120px",
                '&:hover': {
                  backgroundColor: 'transparent'
                },
                color: isActive(link.path) ? 'secondary.main' : 'primary.main' // Change color if active
              }}>
              {link.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar