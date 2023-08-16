import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';
import { Col, Row,message } from 'antd';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { json, useNavigate } from 'react-router';
import axios from 'axios'
import { Modal } from 'antd';
import './NewUser.css'
import {Buffer} from 'buffer';

const NewUser = () => {
    const Navigate = useNavigate();
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [PhoneNumberError, setPhoneNumberError] = useState(false);
  const [MOC, setMOC] = useState("")
  const [FirstName, setFirstName] = useState("")
  const [FirstNameError, setFirstNameError] = useState(false)
  const [LastName, setLastName] = useState("")
  const [LastNameError, setLastNameError] = useState(false)
  const [Dob, setDob] = useState("")
  const [DobError, setDobError] = useState(false)
  const [Email, setEmail] = useState("")
  const [EmailError, setEmailError] = useState(false)
  const [Street, setStreet] = useState("")
  const [StreetError, setStreetError] = useState(false)
  const [City, setCity] = useState("")
  const [CityError, setCityError] = useState(false)
  const [State, setState] = useState("")
  const [StateError, setStateError] = useState(false)
  const [PinCode, setPinCode] = useState("")
  const [PinCodeError, setPinCodeError] = useState(false)
  const [Country, setCountry] = useState("")
  const [CountryError, setCountryError] = useState(false)
  const [PhoneCountry, setPhoneCountry] = useState("")
  const [messageApi, contextHolder] = message.useMessage()
    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'User created',
      });
    };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: `User Already Exist`,
    });
  };
  const handleClick = async (e) => {
    e.preventDefault()
    console.log(e, "event")
    if (FirstName == "") {
      setFirstNameError(true)
    }
    if (LastName == "") {
      setLastNameError(true)
    }
    if (Dob == "") {
      setDobError(true)
    }
    if (Email == "") {
      setEmailError(true)
    }
    if (Street == "") {
      setStreetError(true)
    }
    if (City == "") {
      setCityError(true)
    }
    if (State == "") {
      setStateError(true)
    }
    if (PinCode == "") {
      setPinCodeError(true)
    }
    if (Country == "") {
      setCountryError(true)
    }
    if (PhoneNumber == "") {
      setPhoneNumberError(true)
    }
    localStorage.setItem('firstName', JSON.stringify(FirstName))
    localStorage.setItem('lastName', JSON.stringify(LastName))
    localStorage.setItem('PhoneNumber', JSON.stringify(PhoneNumber))
    localStorage.setItem('MOC', JSON.stringify(MOC))
    localStorage.setItem('Dob', JSON.stringify(Dob))
    localStorage.setItem('Email', JSON.stringify(Email))
    localStorage.setItem('Street', JSON.stringify(Street))
    localStorage.setItem('City', JSON.stringify(City))
    localStorage.setItem('State', JSON.stringify(State))
    localStorage.setItem('PinCode', JSON.stringify(PinCode))
    localStorage.setItem('Country', JSON.stringify(Country))


    // const URL = `https://iafkrrf5icamvacwr62l56famm0icgvu.lambda-url.us-east-1.on.aws/`

    // let requestData = {
    //   "LastName": LastName,
    //   "Status": "New - Not Contacted",
    //   "MobilePhone": PhoneNumber,
    //   "Email": Email,
    //   "FirstName": FirstName,
    //   "HealthCloudGA__BirthDate__c": Dob,
    //   "Street": Street,
    //   "Country": Country,
    //   "PostalCode": PinCode,
    //   "City": City,
    //   "State": State,
    //   "ModeofContact": MOC,
    //   "Care_Program__c":"0ZeDn000000t3I2KAI",
    //   "LeadSource":"",
    //   "Registered_By__c":"Patient",
    //   "Lead_Source_Reference__c":"",
    //   "Is_the_Patient_Insured__c":"",
    //   "HealthCloudGA__Gender__c":"",
    //   "Preferred_Method_of_Contact__c":MOC
    // }

    let requestData1 = {
      "LastName": "karthickaasa",
      "Status": "New - Not Contacted",
      "MobilePhone": "1234567890",
      "Email": "kaat@gmail.com",
      "FirstName": "karthickkkks",
      "HealthCloudGA__BirthDate__c": "2000-12-11",
      "Street": "KPM",
      "Country": "United States",
      "PostalCode": "638183",
      "City": "Namakkal",
      "State": "Florida",
      "ModeofContact": "Chat",
      "Care_Program__c":"0ZeDn000000ThDwKAK",
    "LeadSource":"",
    "Registered_By__c":"Patient",
    "Lead_Source_Reference__c":"",
    "Is_the_Patient_Insured__c":"",
    "HealthCloudGA__Gender__c":"",
    "Preferred_Method_of_Contact__c":MOC
    }

    let requestHeaders = {
      "Content-Type": "application/json"
    }
    Navigate("/Consent")
          success()

    // var requestOptions = {
    //   method: 'POST',
    //   headers: requestHeaders,
    //   body: requestData1,
    //   mode:"no-cors"
    // };

    // let buff = Buffer.from(JSON.stringify(requestData1), "base64");
    // let eventBodyStr = buff.toString('UTF-8');
    
    // console.log(Body)
    // axios
    //   .post(URL, JSON.stringify(requestData) , requestHeaders)
    //   .then((res) => {
    //     console.log(res)
    //     if(res.data.status == "ok"){
    //             localStorage.setItem('firstName', JSON.stringify(FirstName))
    //   localStorage.setItem('lastName', JSON.stringify(LastName))
    //   localStorage.setItem('Dob', JSON.stringify(Dob))
    //   localStorage.setItem('Lead_id', JSON.stringify(res.data.id))
    //       Navigate("/Consent")
    //       success()

    //     }
    //     if(res.data.status == "ERROR"){
    //       console.log("eewww")
    //       error()
    //       setFirstNameError(true)
    //       setLastNameError(true)  
    //       setDobError(true)
    //       setEmailError(true)
    //       setStreetError(true)
    //       setCityError(true)
    //       setStateError(true)
    //       setPinCodeError(true)
    //       setCountryError(true)
    //       setPhoneNumberError(true)
    //     }
    //   })

    // const response = await fetch(URL, requestOptions)
    // .then(
    //   response => response.text()
    // )
    // .then(
    //   result => console.log(result)
    // )
    // .catch(
    //   error => console.log('error', error)
    // );

   
  };
  // useEffect(() => {
  //   axios.
  //     get(`https://sn3krr6vnyrqe3g7ixy5f6xhxq0izvqv.lambda-url.us-east-1.on.aws/`)
  //     .then((res) => {
  //       console.log(res, "getRes")
  //     })
  // }, [])



  return (
    <div className='Newuser-main'>
      {contextHolder}
      <form autoComplete='off' onSubmit={handleClick}>

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

        <Row>
          <Col span={12} offset={1}>
            <div className='leftdiv'>
              <div className='instructions-div'>
                <h1 className='Instructions'>
                  Instructions
                </h1>

              </div>
              <div className='paras'>


                <li>
                  If you have been prescribed a Value Health medicine, you may be eligible for Shield program if all 3 of the following conditions apply:
                  You are a US resident and have a prescription for a Value Health product from a health care provider licensed in the United States.
                </li>
                <li>
                  You do not have insurance or other coverage for your prescription medicine. Some examples of other insurance coverage include private insurance, HMOs, Medicaid, Medicare, state pharmacy assistance programs, veterans assistance, or any other social service agency support.
                </li>
                <li>
                  You cannot afford to pay for your medicine. You may qualify for the program if you have a household income of $58,320 or less for individuals, $78,880 or less for couples, or $120,000 or less for a family of 4.
                </li>
                <li>
                  If you do not meet the prescription drug coverage criteria, your income meets the program criteria, and there are special circumstances of financial and medical hardship that apply to your situation, you can request that an exception be made for you.

                </li>
                <li>
                  You do not have to be a US citizen. Residents of the United States, including US Territories, are also eligible.
                </li>
              </div>
            </div>
          </Col>

          <Col span={10} offset={1}>

            <div className='rightdiv'>

              <Row>
                <div className='infodiv'>
                  <h1>
                    Personal Information
                  </h1>
                </div>

              </Row>
              <Row span={8}>


                <Col span={12}>
                  <TextField sx={{ m: 1 }} id="fullWidth"
                    error={FirstNameError}
                    label="First name"
                    onChange={(e) => setFirstName(e.target.value)} variant="outlined" />
                </Col>
                <Col span={12}>
                  <TextField sx={{ m: 1 }} error={LastNameError} id="fullWidth" label="Last name" 
                  onChange={(e) => setLastName(e.target.value)} variant="outlined" />
                </Col>
              </Row>
              <Row span={8}>
              </Row>
              <Row span={8}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>

                  <DatePicker sx={{ minWidth: 363, m: 1 }}
                    className='datepicker'
                    disableFuture
                    error={DobError}
                    inputFormat="DD/MM/YYYY" 
                    onChange={(newValue) =>setDob(newValue.format("YYYY-MM-DD")) 
                    }
                    label="Date of Birth" />

                </LocalizationProvider>
              </Row>
              <Row span={10}>
                <FormControl sx={{ minWidth: 100, m: 1 }}>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"

                    value={PhoneCountry}
                    label="Country"
                    onChange={(e) => setPhoneCountry(e.target.value)}
                  >

                    <MenuItem value={"+1"}>+1</MenuItem>
                    <MenuItem value={"+2"}>+2</MenuItem>
                    <MenuItem value={"+91"}>+91</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 363, m: 1 }}>
                  <TextField id="standard-basic" error={PhoneNumberError} type="number" label="Phone Number" 
                  onChange={(e) => setPhoneNumber(e.target.value)} 
                  variant="outlined" />

                </FormControl>
              </Row>

              <Row span={8}>
                <FormControl sx={{ minWidth: 480, m: 1 }}>
                  <InputLabel id="demo-simple-select-helper-label">Mode Of Contact</InputLabel>
                  <Select
                    // error={}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={MOC}
                    label="Mode of Contact"
                    onChange={(e) => setMOC(e.target.value)}
                  // onKeyPress={}
                  // input={<BootstrapInput />}
                  >

                    <MenuItem value={"call"}>Call</MenuItem>
                    <MenuItem value={"Text"}>Text</MenuItem>
                    <MenuItem value={"Email"}>Email</MenuItem>
                  </Select>
                </FormControl>
              </Row>
              <Row span={8}>
                <TextField sx={{ minWidth: 480, m: 1 }} error={EmailError} onChange={(e) => setEmail(e.target.value)} id="standard-basic" type="email" label="Email" variant="outlined" />
              </Row>
              <Row>
                <p>

                  Address Information
                </p>
              </Row>
              <Row>
                <TextField sx={{ minWidth: 480, m: 1 }} error={StreetError} id="standard-basic" onChange={(e) => setStreet(e.target.value)} label="Street Address" variant="outlined" />

              </Row>
              <Row>
                <TextField sx={{ minWidth: 480, m: 1 }} error={CityError} id="standard-basic" onChange={(e) => setCity(e.target.value)} label="City/ District" variant="outlined" />

              </Row>
              <Row>
                <TextField sx={{ minWidth: 480, m: 1 }} id="standard-basic" error={StateError} onChange={(e) => setState(e.target.value)} label="State/ Province" variant="outlined" />

              </Row>
              <Row>
                <TextField sx={{ minWidth: 480, m: 1 }} id="standard-basic" type='number' error={PinCodeError} onChange={(e) => setPinCode(e.target.value)} label="ZipCode" variant="outlined" />

              </Row>
              <Row>
                <TextField sx={{ minWidth: 480, m: 1 }} id="standard-basic" error={CountryError} onChange={(e) => setCountry(e.target.value)} label="Country" variant="outlined" />

              </Row>
            </div>

          </Col>

        </Row>

        <Button className='savenxt'
          type='submit'
          // onClick={handleClick}
          variant="contained">Save & Next</Button>
      </form>

    </div>
  )
}

export default NewUser