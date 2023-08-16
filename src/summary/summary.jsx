import React,{useState} from 'react'
import { Col, Row } from 'antd';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SignatureCanvas from 'react-signature-canvas'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useNavigate } from 'react-router';
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { Modal,message } from 'antd';
import './summary.css'
import axios from 'axios';

const Concent = () => {
    const [planname, setPlanName] = useState("")
    const [drugname, setDrugName] = useState("")
    const [dosage, setDosage] = useState("")
    const [summary, setSummary] = useState("")

//   const showModal = () => {
//     setIsModalOpen(true);
//   };
  
//   const error = () => {
//     messageApi.open({
//       type: 'error',
//       content: 'failed to Update',
//     });
//   };

  const handleClick = (e) => {
    console.log(e)
    if (e == "Submit") {

        let planName =planname;
        let DrugName=drugname;
        // let dosage = dosage;
    
        let url2 = "http://54.89.10.171:8502/Health_Insurance_Coverage/"+planName+"/"+DrugName+"/"+dosage+""
    
     
      axios
        .post(url2)
        .then((res) => {
          console.log(res.data.response)
          setSummary(res.data.response)
    //       if (res.data.status == "Error") {
    //         // error()

    //       }
    //       if (res.data.status == "200") {
    //         // console.log("eewww")
    //         Navigate("/")
    //         // error()

    //       }
    //     })
    // }
    // else {
    //   Navigate("/")
    // }
    })
  }
}


  
  
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
  
  const Navigate = useNavigate();
  const fileList = [

  ];
//   const success = () => {
//     messageApi.open({
//       type: 'success',
//       content: 'Consent updated sucessfully',
//     });
//   };
//   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
//   const handleClick = () => {
//     localStorage.setItem('Doc', JSON.stringify(Doc))
// //     let Token =JSON.parse(localStorage.getItem('Lead_id'))
// //     // let Token = "00QDn000006yRQTMA2" 
// //     console.log( typeof Token,Token,"Token") 

// // let CONSENT_URL=`https://r7arhgcvxmhmsioku52d6fz7ta0edaje.lambda-url.us-east-1.on.aws/`
// // let Body={
// //   "Consent_Name__c":"0cIDn000000tUOoMAM",
// //   "Date_Of_The_Consent__c":Doc,
// //   "Lead__c":Token
// //   }
// // axios.post(CONSENT_URL,JSON.stringify(Body))
// // .then((res) => {
// //   if (res.data.status === "Ok"){
    
// //     success()
// //   }else{
// //     error()
// //   }
// // })
// Navigate("/InsuranceInfo ")

//   }
  return (
    <div className='Concent-main'>
      {/* {contextHolder} */}
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
        <p className='details'>
          Summary Details
        </p>
      </Row>
      <div className='form-Div' >
        <Row>
          <Col span={11}>

            <Row span={8}>


            {/* <Col span={12}>
                  <TextField sx={{ m: 1 }} id="fullWidth"
                    // error={FirstNameError}
                    label="PlanName"
                    onChange={(e) => setPlanName(e.target.value)} variant="outlined" />
                </Col> */}
                {/* <Col span={12}>
                  <TextField sx={{ m: 1 }} id="fullWidth"
                    // error={FirstNameError}
                    label="DrugName"
                    onChange={(e) => setDrugName(e.target.value)} variant="outlined" />
                </Col>
                <Col span={12}>
                  <TextField sx={{ m: 1 }} id="fullWidth"
                    // error={FirstNameError}
                    label="dosage"
                    onChange={(e) => setDosage(e.target.value)} variant="outlined" />
                </Col> */}
            </Row>

            <Row span={10}>
                <FormControl sx={{ minWidth: 400, m: 1 }}>
                  <InputLabel id="demo-simple-select-label">DrugName</InputLabel>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"

                    // value={PhoneCountry}
                    label="Country"
                    onChange={(e) => setDrugName(e.target.value)}
                  >

                    <MenuItem value={"EUFLEXXA INTRA-ARTICULAR SOLUTION PREFILLED SYRINGE"}>EUFLEXXA INTRA-ARTICULAR SOLUTION PREFILLED SYRINGE</MenuItem>
                    <MenuItem value={"EUFLEXXA"}>EUFLEXXA</MenuItem>
                    <MenuItem value={"NON-NARCOTIC ANALGESICS"}>NON-NARCOTIC ANALGESICS</MenuItem>
                  </Select>
                </FormControl>
                {/* <FormControl sx={{ minWidth: 363, m: 1 }}>
                  <TextField id="standard-basic" error={summary} type="number" label="Phone Number" 
                  // onChange={(e) => setPhoneNumber(e.target.value)} 
                  variant="outlined" />

                </FormControl> */}
              </Row>

              <Row span={10}>
                <FormControl sx={{ minWidth: 400, m: 1 }}>
                  <InputLabel id="demo-simple-select-label">PlaneName</InputLabel>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"

                    // value={PhoneCountry}
                    label="Country"
                    onChange={(e) => setPlanName(e.target.value)}
                  >

                    <MenuItem value={"Emblem Health"}>Emblem Health</MenuItem>
                    <MenuItem value={"United Healthcare"}>United Healthcare</MenuItem>
                    <MenuItem value={"Aetna CVS Health"}>Aetna CVS Health</MenuItem>
                  </Select>
                </FormControl>
                {/* <FormControl sx={{ minWidth: 363, m: 1 }}>
                  <TextField id="standard-basic" error={summary} type="number" label="Phone Number" 
                  // onChange={(e) => setPhoneNumber(e.target.value)} 
                  variant="outlined" />

                </FormControl> */}
              </Row>
              <Row span={10}>
                <FormControl sx={{ minWidth: 400, m: 1 }}>
                  <InputLabel id="demo-simple-select-label">DosageName</InputLabel>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"

                    // value={PhoneCountry}
                    label="Country"
                    onChange={(e) => setDosage(e.target.value)}
                  >

                    <MenuItem value={"20mg"}>20mg</MenuItem>
                    <MenuItem value={"10mg"}>10mg</MenuItem>
                    <MenuItem value={"40mg"}>40mg</MenuItem>
                  </Select>
                </FormControl>
                {/* <FormControl sx={{ minWidth: 363, m: 1 }}>
                  <TextField id="standard-basic" error={summary} type="number" label="Phone Number" 
                  // onChange={(e) => setPhoneNumber(e.target.value)} 
                  variant="outlined" />

                </FormControl> */}
              </Row>

              
            <Row style={{ marginTop: 30 }}>
                            <TextField sx={{ minWidth: 480 }} noValidate id="fullWidth"
                                // disabled={InsuranceNumber === !"" ? true : false}
                                disableAnimation
                                // onFocus={InsuranceNumber ? true : false}
                                // defaultValue={InsuranceNumber}
                                value={summary}
                                 onChange={(e) => setSummary(e.target.value)} 
                                label="summary" variant="outlined" />


                        </Row>

                       
           
            {/* <Row>
              <TextField sx={{ m: 1, minWidth: 520 }} id="fullWidth" label="Patient Caregiver" variant="outlined" />
            </Row>
            <Row>
              <TextField sx={{ m: 1, minWidth: 520 }} id="fullWidth" label="Caregiver" variant="outlined" />
            </Row> */}
            
           
            <Row>

            </Row>
          </Col>
          <Col span={8} offset={2}>


            
           

          </Col>

          



          


        </Row>

      </div>
      <Button className='savenxt' onClick={() => handleClick('Submit')} variant="contained">Submit</Button>

{/* <img className='sponsorimage' src='Group 60.png'>
</img> */}

    </div>
  )
}

export default Concent