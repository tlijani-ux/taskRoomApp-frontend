import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';


function SignInSide() {

  const navigate = useNavigate();

  const [FormData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...FormData,
      [name]: value
    })
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/users/signin", {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify(FormData)
      })
      const result = await response.json();
      localStorage.setItem("token",result.token)
      console.log(result);
      navigate('/')
    } catch (error) {
      console.log(error);
    } finally {

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      })
    }
  };



  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(../images/19321.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'secondary.main',
                borderRadius: '50%',
                width: 80,
                height: 80,
                overflow: 'hidden',
                marginBottom: 1,
              }}
            >
              <img src="/images/taskroomicon.png" alt="Custom Icon" className='SignImage' />
            </Box>
            <Typography component="h1" variant="h5">
              <strong><span style={{ color: "#384454" }}>Sign in</span></strong>
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={FormData.email}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={FormData.password}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2"> {/* Corrected link */}
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;
