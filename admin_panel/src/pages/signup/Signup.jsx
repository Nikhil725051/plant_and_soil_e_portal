import { Button, Grid, TextField } from '@mui/material'
import { useState } from 'react';



const Signup = () => {

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
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
      </Grid>
    </form>
  );
};

export default Signup;
