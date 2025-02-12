import React, { useState } from 'react';
import { Button, Container, Card, CardContent, Typography, TextField, Alert, Grid, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Rdux-Toolkit/Slice/authslice';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const isLoggedIn = useSelector((state) => state.test.isLoggedIn); 

  const onSubmit = (data) => {
    const { email, password } = data;
    if (!email || !password) {
      setErrorMessage('Please fill in both email and password.');
      return;
    }
    dispatch(login());
    navigate("/");  
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100vw' }}>
      <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Card sx={{ boxShadow: 4, borderRadius: 8, width: '100%', maxWidth: 400 }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Please Login
            </Typography>
            {errorMessage && <Alert severity="error" sx={{ marginBottom: 2 }}>{errorMessage}</Alert>}
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Enter a valid email address',
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Email"
                        variant="outlined"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters long',
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : ''}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{
                      backgroundColor: '#1976d2',
                      '&:hover': { backgroundColor: '#1565c0' },
                    }}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    onClick={handleSignUp}
                    fullWidth
                    sx={{
                      marginTop: 2,
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': { borderColor: '#1565c0', color: '#1565c0' },
                    }}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {isLoggedIn && <Typography variant="body1" align="center" color="success.main" sx={{ marginTop: 2 }}>You are logged in!</Typography>}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};