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

   const stackStylebot={
    display:"flex",
    justifyContent:"right",
    display:"flex",
    // justifyContent:"space-between"
    gap:"5px",
    margin:"auto",
    marginTop:"2%"

   }
const HcpOffiice = () => {
    // const classes = useStyles();
 
    return (
        <div>
            <Header />

            <div className='hcpoff'><h2>HCP OFFICE </h2></div>
            
            <div className="containerlogin" style={containerStyle} >
            
                <Grid className='logingrid' >
                <Stack direction="row" spacing={1}  style={stackStyleTop} className='top'  >
                    <TextField sx={{ width: '100%' }}
                    style={inputStyle}
                    // className={classes.inputField}
                        label="HOSPITAL NAME"
                        id="HOSPITAL NAME"
                        variant="outlined"
                        size="small"
                        placeholder="Enter your HOSPITAL NAME"
                    />
                    <TextField sx={{ width: '100%' }}
                     style={inputStyle}
                    // className={classes.inputField}
                        label="Adress"
                        id="npi"
                        variant="outlined"
                        size="small"
                        placeholder="Enter your Adress"
                    />
                </Stack>


                <Stack direction="row" spacing={1} style={stackStyle}>
      <TextField
       style={inputStyle}
    //   className={classes.inputField}
        label="HCP ID"
        id="HCP ID"
        variant="outlined"
        size="small"
        placeholder="Enter your HCP ID"
      />
      <TextField 
       style={inputStyle}
    //   className={classes.inputField}
        label="CITY"
        id="npi"
        variant="outlined"
        size="small"
        placeholder="Enter your CITY"
      />
    </Stack>

    <Stack direction="row" spacing={1} style={stackStyle}>
      <TextField
       style={inputStyle}
    //   className={classes.inputField}
        label="NPI ID"
        id="NPI ID"
        variant="outlined"
        size="small"
        placeholder="Enter your NPI ID"
      />
      <TextField 
       style={inputStyle}
    //   className={classes.inputField}
        label="STATE"
        id="npi"
        variant="outlined"
        size="small"
        placeholder="Enter your STATE"
      />
    </Stack>

    
    <Stack direction="row" spacing={1} style={stackStylebot}>
   
      <TextField 
       style={inputStyle}
    //   className={classes.inputField}
        label="Zip Code"
        id="npi"
        variant="outlined"
        size="small"
        placeholder="Enter your Zip Code"
      />
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

export default HcpOffiice;