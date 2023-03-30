import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import { AuthContext, AUTH_FAILED, AUTH_LOADING, AUTH_SUCCESS } from '../../context/AuthContext';



const Signup = () => {

  const { user, dispatch } = useContext(AuthContext)

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: AUTH_LOADING
    })
    axios.post('http://localhost:8080/auth/register', {
      userName: username,
      fullName: fullName,
      email: email,
      password: password
    })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch({
          type: AUTH_SUCCESS,
          payload: response.data
        })
        navigate('/home', { state: response.data });
      })
      .catch((err) => {
        dispatch({
          type: AUTH_FAILED,
          payload: err?.response?.data?.message
        })

      })
  };

  return (
    user.isLoading ?
      <Box sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress />
      </Box>
      :
      <form
        style={{
          height: '100vh',
          width: '100vw',

          display: 'flex',

          alignItems: 'center',
          justifyContent: 'center'
        }}

        onSubmit={handleSubmit}>
        <Grid sx={{ width: '45%' }} container >
          <Grid item xs={12} md={6} p={1}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6} p={1}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6} p={1}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6} p={1}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Grid textAlign={"center"} item xs={12} p={1}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Sign Up
            </Button>
          </Grid>
          <Grid textAlign={"center"} item xs={12} p={1}>
            <Typography color={'primary'} variant="subtitle1">Already have an account?</Typography>
            <Link to={'/signin'}>Sign in</Link>
          </Grid>
          {
            user.err
            &&
            <Grid textAlign={"center"} item xs={12} p={1}>
              <Typography color={'error'} variant="subtitle1">{user.err}</Typography>
            </Grid>
          }
        </Grid>
      </form>
  );
};

export default Signup;
