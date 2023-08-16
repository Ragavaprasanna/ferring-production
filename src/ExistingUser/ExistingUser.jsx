import React, { useState } from 'react'
import { Col, Row ,message} from 'antd';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from 'react-router';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import axios from 'axios';
import "./ExistingUser.css"

const ExistingUser = () => {
  const Navigate = useNavigate();

  const [PhoneNumber, setPhoneNumber] = useState('');
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Dob, setDob] = useState("")
  const [messageApi, contextHolder] = message.useMessage()
  const [phoneCountry, setphoneCountry] = useState("")

  const error = () => {
    messageApi.open({
      type: 'error',
      content: `User Doesn't Exist`,
    });
  };
  const handleClick = (e) => {
    console.log(e)
    if (e == "Submit") {

      const URL = `https://qu27o526f2swyduevhrijyu62u0afwee.lambda-url.us-east-1.on.aws/`
      let requestData = {
        "LastName": LastName,
        "FirstName": FirstName,
        "HealthCloudGA__BirthDate__c": Dob
    }
     
      axios
        .post(URL, JSON.stringify(requestData))
        .then((res) => {
          console.log(res)
          if (res.data.status == "Error") {
            error()

          }
          if (res.data.status == "ok") {
            // console.log("eewww")
            Navigate("/Copay")
            // error()

          }
        })
    }
    else {
      Navigate("/NewUser")
    }
  }

  return (
    <div className='ExistingUser-main'>
        {contextHolder}
      <Row>
        <Col>
          <img className='ExistingUser-img' src='ExistingUser.png' >
          </img>
        </Col>
        <Col offset={2}>
          <Row>
            <div className='shield-div'>
              <h1 className='shield'>
                SHIELD
              </h1>

            </div>
          </Row>
          <Row>
            <div className='psp-div'>

              <h1 className='psp'>
                Patient Assistance Program
              </h1>
            </div>
          </Row>
          <Row >


            <Col span={12}>
              <TextField sx={{ m: 2, maxWidth: 180, height: 48 }}
                onChange={(e) => setFirstName(e.target.value)}
                id="fullWidth" label="first name" variant="outlined" />

            </Col>
            <Col span={12}>
              <TextField sx={{ m: 2, maxWidth: 180, height: 48 }} id="fullWidth"
                onChange={(e) => setLastName(e.target.value)}

                label="Last name" variant="outlined" />
            </Col>
          </Row>
          <Row >
            <LocalizationProvider dateAdapter={AdapterDayjs}>

              <DatePicker sx={{ minWidth: 395, m: 2 }}
                className='datepicker'
                disableFuture
                onChange={(newValue) => setDob(newValue.format("YYYY-MM-DD"))}

                label="Date Of Birth" />

            </LocalizationProvider>
          </Row>
          <Row span={10}>
            <FormControl sx={{ minWidth: 100, m: 2 }}>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={phoneCountry}
                label="Country"
                onChange={(e) => setphoneCountry(e.target.value)}
              // input={<BootstrapInput />}
              >

                <MenuItem value={"+1"}>+1</MenuItem>
                <MenuItem value={"+2"}>+2</MenuItem>
                <MenuItem value={"+91"}>+91</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 263, m: 2 }}>
              <TextField id="standard-basic"
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="number" label="phone number" variant="outlined" />

            </FormControl>
          </Row>
          <Row>

            <Col span={12} offset={1}>
              <Button className='savenxt' onClick={() => handleClick('Submit')} variant="contained">Submit</Button>

            </Col>
            <Col span={11}>
              <Button className='Register' onClick={() => handleClick('Register')} variant="outlined">Register</Button>

            </Col>






          </Row>
          <Row >
            <Col offset={13}>

              {/* <img className='imgnewUser' src='Group 60.png'>
              </img> */}
            </Col>
          </Row>
        </Col>

      </Row>

    </div>
  )
}

export default ExistingUser