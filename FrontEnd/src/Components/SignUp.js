import React from 'react';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from "react";
import { Navigate } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [formdata, setFormdata] = useState({ name: "", email: "", password: "" })
  const [Errors, setEroros] = useState({ ErrEmail: "", ErrPassword: '' ,ErrName:""});
  const [Error, setError] = useState(false);
  const [Error2,setError2]=useState(false) ;
  const[data,setData]=useState({}) ;
  const[isLogin,setIsLogin]=useState(false) ;
  const sendForm = async (event) => {
    event.preventDefault();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!regex.test(formdata.email)) {
        setError(true);
        setEroros({ ...Errors, ErrEmail: "email not valide" })
      }
      else {
        setError(false)
        let headersList = {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Content-Type": "application/json"
         }

         let bodyContent = JSON.stringify({
           "email": formdata.email,
           "password": formdata.password,
           "name":formdata.name
         });

         let response = await fetch("http://localhost:5000/register", { 
           method: "POST",
           body: bodyContent,
           headers: headersList
         });

         let data = await response.json();
         console.log(data) ;
        if(data.status==400)
        {
          setData(data)
          setError2(true) ;
          setIsLogin(false)
        }
        else
        {
          setData(data) ;
          setError2(false) ;
          setIsLogin(true) ;
        }
      }    
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {Error2 && <div className='mt-2 font-bold text-red-500'>{data.message}</div> }
        <form onSubmit={sendForm} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => { setFormdata({ ...formdata, name: e.target.value }) }}
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
              />
              {/* {Error && <div className="px-2 mb-2 font-bold text-red-500">{Errors.ErrName}</div>} */}

            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => { setFormdata({ ...formdata, email: e.target.value }) }}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              {Error && <div className="px-2 mb-2 font-bold text-red-500">{Errors.ErrEmail}</div>}

            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => { setFormdata({ ...formdata, password: e.target.value }) }}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* {Error && <div className="px-2 mb-2 font-bold text-red-500">{Errors.ErrPassword}</div>} */}

            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
            {isLogin && <Navigate to={"/"}></Navigate>}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <div className='text-blue-600 '>
                <Link to={"/"} >
                  Already have an account? Sign in
                </Link>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}




// {"_id":"632256caa5a038c7c7f42073","name":"Hamroune amazigh","email":"amazighham2002@gmail.com","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjI1NmNhYTVhMDM4YzdjN2Y0MjA3MyIsImlhdCI6MTY2MzE5NDgyNiwiZXhwIjoxNjY1Nzg2ODI2fQ.Qyhwj5bDlQneRd70mqRWhOpvc8wMmIcyctbi5aoF5Uc"}