import { Box, Typography } from "@mui/material"

function PageNotFound() {
  return (
   <>
    <Box sx={{
        height: "70vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: '100%'
    }}>
        <Typography variant="h1" color="primary.main">404</Typography>
        <Typography variant="h6">
            THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.<br />
            YOU MAY HAVE MISTYPED THE ADDRESS OR THE PAGE MAY HAVE MOVED.
        </Typography>
        
    </Box>
   </>
  )
}

export default PageNotFound