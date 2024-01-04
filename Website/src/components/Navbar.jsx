import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>OneAmericaVoice</Typography>
          <Button color="inherit" component={Link} to="/stream">Stream</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar