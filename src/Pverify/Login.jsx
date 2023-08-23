import React from 'react'
import Header from './Header'
import TextField  from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Button, Grid, MenuItem, Stack } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Row } from 'antd';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./Sidebar.css";
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//     inputField: {
//       height: '40px', 
//     },
//   });

const inputStyle = {
 
    width: '300px', 
    backgroundColor: 'white',
    // margin:'auto', // Adjust the width as needed
//     justifyContent:"center"
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    minHeight: '50vh',
    width: "80%",
    margin: 'auto',
    marginTop:"5%",
    
    // marginTop:"10%",
   backgroundColor: "#F9FAFC"
  };
  const stackStyle={
    display:"flex",
    // justifyContent:"space-between"
    gap:"5px",
    margin:"auto",
    marginTop:"2%"
  }
  const stackStyleTop={
    display:"flex",
    // justifyContent:"space-between"
    gap:"5px",
    margin:"auto",
    marginTop:"5%",
    // marginBottom:"5px"
  }
const stackStyledrop={

    display:"flex",
    // justifyContent:"space-between"
    gap:"5px",
    margin:"auto",
    marginTop:"2%"
  }

const Login = () => {
    // const classes = useStyles();
 
    return (
        <div>
            <Header />
            
            <div className="containerlogin" style={containerStyle} >
            
                <Grid className='logingrid' >
                <Stack direction="row" spacing={1}  style={stackStyleTop} className='top'  >
                    <TextField sx={{ width: '100%' }}
                    style={inputStyle}
                    // className={classes.inputField}
                        label="Email"
                        id="email"
                        variant="outlined"
                        size="small"
                        placeholder="Enter your email"
                    />
                    <TextField sx={{ width: '100%' }}
                     style={inputStyle}
                    // className={classes.inputField}
                        label="NPI ID"
                        id="npi"
                        variant="outlined"
                        size="small"
                        placeholder="Enter your NPI ID"
                    />
                </Stack>


                <Stack direction="row" spacing={1} style={stackStyle}>
      <TextField
       style={inputStyle}
    //   className={classes.inputField}
        label="First Name"
        id="first name"
        variant="outlined"
        size="small"
        placeholder="Enter your First Name"
      />
      <TextField 
       style={inputStyle}
    //   className={classes.inputField}
        label="Last Name"
        id="npi"
        variant="outlined"
        size="small"
        placeholder="Enter your Last Name"
      />
    </Stack>

<Stack direction="row"  spacing={1} style={stackStyle}>
<LocalizationProvider
  dateAdapter={AdapterDayjs}
>
  <DemoContainer components={["DatePicker"]}>
    <DatePicker
      slotProps={{ textField: { size: 'small' } }}
    className='drop1'
    size="small"
      sx={{ width: '100%' }}
      disableFuture
      inputFormat="MM/DD/YYYY"
      label="DOB"
    />
  </DemoContainer>
</LocalizationProvider>





                      </Stack>

    <Stack direction="row" spacing={1}  style={stackStyledrop}>
      <FormControl variant="outlined"  >
    
         <Select
         
         id="option1" 
          style={inputStyle}          
          sx={{ width: '100%' }}
          size="small"
        // className={classes.inputField}
        > 
          <MenuItem value="option1-1">HCP ADMIN</MenuItem>
          <MenuItem value="option1-2">HCP EXECUTIVE</MenuItem>
          <MenuItem value="option1-3">SUPPORT EXECUTIVE</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" >
  
         <Select label="HCP ID" id="option2" 
          style={inputStyle} sx={{ width: '100%' }}
          
          
          size="small"
          

        // className={classes.inputField}
        > 
          <MenuItem value="option2-1">Option 2 - 1</MenuItem>
          <MenuItem value="option2-2">Option 2 - 2</MenuItem>
          <MenuItem value="option2-3">Option 2 - 3</MenuItem>
        </Select>
      </FormControl>
    </Stack>

    <Stack  direction="row"  spacing={3} style={{marginTop:"10%",justifyContent:"center",marginBottom:"5%"}}>
        <Grid>
        <button className='add'>Cancel</button>
        </Grid>
        <Grid>
        <button className='clear'>Clear</button>
        </Grid>
        <Grid>
        <button className="submit">Submit</button>
        </Grid>
    </Stack>


                </Grid>

             
                <div>

                </div>
            



            </div>




        </div>
    )
}

export default Login