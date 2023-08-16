import React, { useState } from 'react'
import { Col, Row } from 'antd';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import './NewLandingpage.css'
import { TextField } from '@mui/material';
import { message, Upload } from "antd";
import LoadingButton from "@mui/lab/LoadingButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import axios from "axios";
import OtpInput from 'react-otp-input';
import { Margin } from '@mui/icons-material';

const NewLandingpage = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [ email, setemail ] = useState('');
    const [ otp, setotp ] = useState('');
    const [ response, setresponse ] = useState('');
    const [ hideOtpBtn, setHideOtpBtn ] = useState(true)
    const [searchLoading, setSearchLoading] = useState(false);
    // const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        console.log('successmessagefunction')
    message.open({
          type: "success",
          content: "Login Successfully",
        });
    //     messageApi.success("Logged in successfully")
      };
      const error = () => {
        console.log('errormessagefunction')
    message.open({
          type: "error",
          content: "Invalid Otp or Otp Expired",
        });
        // messageApi.error("Invalid username or otp")
      };
      const successs = () => {
        console.log('successmessagefunction')
    message.open({
          type: "success",
          content: "Otp Send Sucessfully",
        });
    //     messageApi.success("Logged in successfully")
      };
      const errorr = () => {
        console.log('errormessagefunction')
    message.open({
          type: "error",
          content: "Invalid username",
        });
        // messageApi.error("Invalid username or otp")
      };

    const handleMouseDownPassword = (e) => {
      e.preventDefault();
    };
    const Navigate = useNavigate();
    const  handleClick = (e) => {
        let url2 = "https://m4cacmey3m3w24kp7a5xc3ek3u0kutvv.lambda-url.us-east-1.on.aws/"
            let body = {
                // "Id": my_list[0],
                "email":email
                

            }


            axios
                .post(url2, JSON.stringify(body))
                .then((res) => {
                    console.log(res)
                    setresponse (res.data.message);
                    if(res.data.message === 'OTP sent successfully.'){
                        setHideOtpBtn(false);
                    }else{
                        setHideOtpBtn(true);
                    }

                    if(res.data.message === "OTP sent successfully."){
                        successs();
                        

                    }
                    else{
                        errorr()
                    
                    
                    
                    console.log(response)
                    }
                }).catch((e)=>{
                    errorr()
console.log("error",e)

                })

        }
        const  handle = (e) => {
            setSearchLoading(true);
        let url3 = "https://bb53doyk6zsyr2ja4kmbe3cdgu0gkxqf.lambda-url.us-east-1.on.aws/"
            let body3 = {
                // "Id": my_list[0],
                "username":email,
                "otp":otp

                

            }


            axios
                .post(url3, JSON.stringify(body3))
                .then((res) => {
                    console.log(res, 'submitButtonConsole')
                    setresponse (res.data.status)
                   
                    Navigate("/pverifyy");
                    if (res.data.status === "ok" || "error") {
                        success();
                        // alert("Login Successfull")
                       

                    // console.log(response)
                    }
                    else {
                        Navigate("/pverifyy");
                        // error()

                        // message.error("Invalid username or OTP");
                    }

                }).catch((e)=>{
                    // error()
console.log("error",e)

                }).finally(() => {
                    setSearchLoading(false);
                    Navigate("/pverifyy");
                  });

        }
    return (
        <>
        <div className='NewLandingpage'>
            <Row>
                <Col offset={2} span={10}>
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
                        <h1 className='shieldprogram'>

                            THE SHIELD PROGRAM®
                        </h1>
                    </Row>
                    <Row>
                        <h1 className='support'>
                            CAN SUPPORT YOU IN SEVERAL WAYS
                        </h1>
                    </Row>
                    <Row>
                        <p className='para'>
                            If your doctor has prescribed EUFLEXXA, the SHIELD Program can support you and your family through treatment.The support includes a dedicated Patient Care Consultant (PCC) who will work directly with your doctor, insurance, and pharmacy to help you get started on EUFLEXXA as soon as possible.
                        </p>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <img style={{ marginTop: 20 }} src='image1.png'></img>
                            <img className='line' src='Line 18.png'></img>

                            {/* <div className='lines'>
                ---------

                </div> */}
                        </Col>
                        <Col span={18}>
                            <div className='leftImagebox'>

                                <img className='threeimages' src='image2.png'></img>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={8}>
                    <div className='contentmain'>
                        <Row className='loginDivAvatar'>
                            <Col span={4} offset={10}>
                            <img className='ProfileImage' width={80} height={80} 
                            // style={{marginTop:"-10%"}}
                            src='Group 18.png' alt='' />
                            </Col>
                        </Row>
                        <br/>
                       


                        <Row style={{marginTop:"7%", marginBottom:'4%',justifyContent:"center"}}>
                                <TextField id="fullWidth"
                                    // error={FirstNameError}
                                    className='loginUsernameInput'
                                    label="UserName"
                                onChange={(e) => setemail(e.target.value)} variant="outlined"
                                />
                            </Row>
                            <br/>
                            {/* <Row style={{justifyContent:"center"}}>
                            <FormControl className='loginPwdInput' sx={{ m: 1, width: '30ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> */}
                          {response=="OTP sent successfully." ? (<>
                         

                    <Row style={{Margin:"auto",justifyContent:"center"}} >
                        
                        
                    <div className="otpBoxInput">

                    <OtpInput 
                    // style={{gap:"10px"}}
                    Width={100}
                      value={otp}
                      onChange={setotp}
                      numInputs={6}
                    //   gap={10}
                      renderInput={(props) => <input {...props}/>} />
                    </div>
                    </Row>

                    <Row >
          
                    <LoadingButton
                  // disabled={response === !"" ? true : false}
                  className="newUser"
                  loadingPosition="start"
                  variant="contained"
                  onClick={() => handle("Submit")}
                  loading={searchLoading}
                //   style={{
                //     marginTop: "10%",
                //     marginLeft: "-5px",
                //     // marginBottom: "50px",
                //   }}
                >
                  Login
                </LoadingButton>
                        </Row>
                    </>)
                    :""
                    }  
                    {
                        hideOtpBtn == true ?
                        <Row >
                        
                        

                        <LoadingButton
                  // disabled={response === !"" ? true : false}
                  className="newUser"
                  loadingPosition="start"
                  variant="contained"
                  onClick={() => handleClick("Submit")}
                  loading={searchLoading}
                //   style={{
                //     marginTop: "10%",
                //     marginLeft: "-5px",
                //     // marginBottom: "50px",
                //   }}
                >
                  Send Otp
                </LoadingButton>
                        </Row>
                        : 
                        <></>
                    }
                            {/* </Row> */}
                         {/* <Row >

                            <Button className='ExistingUser' onClick={() => handleClick("existig")} variant="outlined">Existing user</Button>
                        </Row>  */}
                         {/* <Row>

                            <Button style={{marginTop:10}} className='ExistingUser' onClick={() => handleClick("document")} variant="outlined">Upload Document</Button>
                        </Row> */} 
                    </div>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default NewLandingpage