import { TextField, Button, Box, Grid, Typography, Paper } from '@mui/material';

function ContactForm() {
  return (
    <Paper sx={{
        padding: 2 
    }}>
        <Box
        sx={{ mt: 3 }}
        textAlign={"left"}
        >
            <Typography variant="h6">Contact Us</Typography>
            <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
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
  );
}

export default ContactForm;
