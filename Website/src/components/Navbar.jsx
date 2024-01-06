import { AppBar, Box, Button, Toolbar, Divider, List, ListItem, ListItemButton, ListItemText, CssBaseline, IconButton, Drawer} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation} from "react-router-dom"
import logoUrl from '../assets/logo.jpg'
import { useState } from "react";


function Navbar() {
  const links = [
    { path: "/", title: "Home" },
    { path: "/stream", title: "Stream" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" }
  ];

  //color
  const location = useLocation(); // Hook to get the current location
  const isActive = (path) => location.pathname === path;

  //drawer  
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {links.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton component={Link} to={link.path}>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
     <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: 'white' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1}}>
            <Link component={Link} to="/">
              <img src={logoUrl} alt="Logo" style={{ height: 50 }}/> 
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
          </Box>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="top"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none'},
          '& .MuiDrawer-paper': { boxSizing: 'border-box' },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar