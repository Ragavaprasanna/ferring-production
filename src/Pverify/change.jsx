// import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Col, Row } from 'antd';
import React, { useState } from 'react'
// import { Col, Row } from 'antd';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { json, useNavigate, useParams } from 'react-router';
import axios from 'axios';
import "./Pverify.css"
import TextArea from 'antd/es/input/TextArea';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react';
import { red } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// import Footer from './Footer';
// import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import { DatePicker } from '@mui/lab';
import "./Sidebar.css";
// import "./Pverify.css";
import Dragger from 'antd/es/upload/Dragger';
import { Box, Grid, Stack } from '@mui/material';
import Sidebar from './Sidebar';

const PureReact = () => {
    const [isOpened, setIsOpened] = useState(false);


    const [ArrayBuffer, setArrayBuffer] = useState()
    const [InsuranceType, setInsuranceType] = useState()
    const [InsuranceNumber, setInsuranceNumber] = useState("")
    const [payerCode, setpayerCode] = useState("")
    const [copayStatus, setcopayStatus] = useState("")
    const [payerName, setpayerName] = useState("")
    const [balance, setbalance] = useState("")
    const [summary, setSummary] = useState("")
    const [loading, setLoading] = useState(false);
    const [searchLoading, setSearchLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage()
    const [insuId, setinsuId] = useState("")
    const [ImageUrl, setImageUrl] = useState("")
    const [planname, setPlanName] = useState("")
    const [drugname, setDrugName] = useState("")
    const [payer, setPayer] = useState("")
    const [cigna, setCigna] = useState([])
    const [emblemhealth, setemblemhealth] = useState([])
    const [anthembluecrossblueshield, setanthembluecrossblueshield] = useState([])
    const [aetna, setaetna] = useState([])
    const [unitedhealthcare, setunitedhealthcare] = useState([])
    const [plan, setPlan] = useState([])
    const [responseCovered, setresponseCovered] = useState("")
    const [color, setcolor] = useState("")
    const [state, setstate] = useState("")
    const [icon1, seticon1] = useState(false)
    const [icon2, seticon2] = useState(false)
    const [icon3, seticon3] = useState(false)

    const [selectedDate, setSelectedDate] = useState(null);


    console.log(payer, "payer")


    const Navigate = useNavigate();
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('ID');
    console.log(id, "id")

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Pverify Verified Successfully',
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'failed to Update',
        });
    };


    useEffect(() => {
        let url5 = "https://xwuolpeyrsa2lrq7f6tvhbpd740rzgdy.lambda-url.us-east-1.on.aws/"



        axios
            .get(url5)
            .then((res) => {
                console.log(res, "payerlist")
                setCigna(res.data.cigna.filter((e) => e != null))
                setaetna(res.data.aetna.filter((e) => e != null))
                setemblemhealth(res.data.emblemhealth.filter((e) => e != null))
                setanthembluecrossblueshield(res.data.anthembluecrossblueshield.filter((e) => e != null))
                setunitedhealthcare(res.data.unitedhealthcare.filter((e) => e != null))
                console.log(cigna, "cigna")
            })
    }, [])
    console.log(cigna, "cigna")
    useEffect(() => {
        if (payer === "Emblem Health") {
            setPlan(emblemhealth)
            console.log(emblemhealth, "ragav")
        }
        if (payer === "United Health") {
            setPlan(unitedhealthcare)
        }
        if (payer === "Cigna") {
            setPlan(cigna)

        }
        if (payer === "Anthem") {
            setPlan(anthembluecrossblueshield)

        }
        if (payer === "Aetna") {
            setPlan(aetna)

        }




    }, [payer])



    const handleClick = (e) => {
        setSearchLoading(true);
        console.log(e, 'searchVal')
        if (e == "Submit") {

            let planName = planname;
            let DrugName = drugname;
            // let dosage = dosage;

            let url2 = "https://oxk2aiz3qvwftkvbxla67vlsre0iljbr.lambda-url.us-east-1.on.aws/"
            let body = {
                // "Id": my_list[0],
                "PlanName": planName,
                "PayerName": payer,
                "DrugName": "EUFLEXXA",

            }


            axios
                .post(url2, JSON.stringify(body))
                .then((res) => {
                    console.log(res)
                    let response = res.data.response.Response
                    console.log(response, "covert")
                    setresponseCovered(res.data.response.Response)
                    let description = res.data.response.Description
                    console.log(response, "res")

                    setSummary(description)

                })
                .finally(() => {
                    setSearchLoading(false);
                })
        }
    }

    useEffect(() => {

        if (responseCovered == "Covered ") {
            // setcolor("red")
            seticon1(true)
            seticon2(false)
            seticon3(false)


        }
        else if (responseCovered == "Covered with Condition") {

            seticon1(false)
            seticon2(true)
            seticon3(false)

        }
        else if (responseCovered == "Not Covered") {

            seticon1(false)
            seticon2(false)
            seticon3(true)

        }
        else {
            seticon1(false)
            seticon2(false)
            seticon3(false)

        }

    }, [responseCovered])
    // ]

    const handleReset = () => {
        setPayer("");
        setDrugName("");
        setPlanName("");
    };

    const [isHistoryOpen, setIsHistoryOpen] = useState(false);

    const toggleHistory = () => {
        setIsHistoryOpen(!isHistoryOpen);
    };

    const handle = () => {
        setLoading(true)
        if (id) {
            const my_list = id.split(",")
            console.log(my_list, "my_list")
            let UpdateUrl = `https://3a5zllfhz25x3w3npn4bmxcx4a0aqxml.lambda-url.us-east-1.on.aws/`

            let body = {
                // "Id": my_list[0],
                "Insurance__c": InsuranceType,
                "Insurance_company_name__c": "001Dn00000PuD5RIAV",
                "Policyholder_same_as_the_patient__c": "yes",
                "Policy_ID__c": InsuranceNumber,
                "Lead__c": my_list[1]
            }
            axios.
                post(UpdateUrl, JSON.stringify(body))
                .then((res) => {
                    setLoading(false)
                    console.log(res, "responsee")
                    if (res.data.status === "Ok") {
                          Navigate("/ ") 
                        success()
                    }
                    else {
                        error()
                    }
                })

        } else {

            let FirstName = localStorage.getItem('firstName')
            let LastName = localStorage.getItem('lastName')
            let PhoneNumber = localStorage.getItem('PhoneNumber')
            let MOC = localStorage.getItem('MOC')
            let Dob = localStorage.getItem('Dob')
            let Email = localStorage.getItem('Email')
            let Street = localStorage.getItem('Street')
            let City = localStorage.getItem('City')
            let State = localStorage.getItem('State')
            let PinCode = localStorage.getItem('PinCode')
            let Country = localStorage.getItem('Country')
            let Doc = localStorage.getItem('Doc')

            let IMAGEURL = `https://56ozi7f5v4gcnefxk34263duhy0mgqql.lambda-url.us-east-1.on.aws/`
            axios
                .post(IMAGEURL, JSON.stringify({


                    "imagename": insuId

                })

                )
                .then((res) => {
                    console.log(res, 'resposnsee')
                    const imagee = res.data
                    setImageUrl(imagee)
                    console.log(imagee, "imagee")


                    const URL = `https://iafkrrf5icamvacwr62l56famm0icgvu.lambda-url.us-east-1.on.aws/`

                    let requestData = {
                        "LastName": "davidson",
                        "Status": "New - Not Contacted",
                        "MobilePhone": "9033630140",
                        "Email": "ragavaprasanna.v@valuehealthsol.com",
                        "FirstName": "david",
                        "HealthCloudGA__BirthDate__c": "1987-11-11",
                        "Street": "KPM",
                        "Country": "United States",
                        "PostalCode": "638183",
                        "City": "Namakkal",
                        "State": "Florida",
                        "Care_Program__c": "0ZeDn000000ThDwKAK",
                        "LeadSource": "",
                        "Registered_By__c": "Patient",

                        "Is_the_Patient_Insured__c": "",
                        "HealthCloudGA__Gender__c": "",
                        "Preferred_Method_of_Contact__c": ""
                    }
                    const reqbody = JSON.stringify(requestData)
                    let requestHeaders = {
                        "Content-Type": "application/json"
                    }
                    axios
                        .post(URL, JSON.stringify(requestData))
                        .then((res) => {
                            console.log(res)
                            setLoading(false)
                            const Token = res.data.id
                            if (res.data.status == "ok" || "ERROR") {

                                Navigate("/NewUser")
                                success()
                                let CONSENT_URL = `https://r7arhgcvxmhmsioku52d6fz7ta0edaje.lambda-url.us-east-1.on.aws/`
                                let Body = {
                                    "Consent_Name__c": "0cIDn000000tUOoMAM",
                                    "Date_Of_The_Consent__c": Doc,
                                    "Lead__c": Token
                                }
                                axios.post(CONSENT_URL, JSON.stringify(Body))
                                    .then((res) => {
                                        if (res.data.status == "ok" || "ERROR") {

                                            success()
                                        } else {
                                            error()
                                        }
                                    })

                            }
                            if (res.data.status == "ERROR") {
                                console.log("eewww")
                                error()
                            }
                        })
                })

        }
    }
    // }

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            setLoading(true)
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
                // setArrayBuffer(reader.result)
                console.log(reader.result, 'readerResult')
                let S3_URL = `https://p44t3bnlhrchrz67hg33wkpawy0pqmel.lambda-url.us-east-1.on.aws/`
                axios
                    .post(S3_URL, JSON.stringify({
                        "file": reader.result.split("base64,")[1]
                    }))
                    .then((res) => {
                        console.log(res.data.uploadResult.key, "InsuranceURL")
                        const imagegeturl = res.data.uploadResult.key
                        const insuid = imagegeturl.split('/')[1]
                        console.log(insuid, "idforinsurance")
                        setinsuId(insuid)



                        axios
                            .get(`https://wkakeekb2aiaxhobq26xi337je0pbxxt.lambda-url.us-east-1.on.aws/`)
                            .then((res) => {
                                setLoading(false)
                                console.log(res.data, "insurancceeee")
                                if (res.data.Member_id) {
                                    setInsuranceNumber(res.data.Member_id)
                                }
                                if (res.data.Health_ID) {
                                    setInsuranceNumber(res.data.Health_ID)
                                }
                                if (res.data.POLICY_NUMBER) {
                                    setInsuranceNumber(res.data.POLICY_NUMBER)
                                }
                                if (res.data.MEDICAL_CLAIM_NUMBER) {
                                    setInsuranceNumber(res.data.MEDICAL_CLAIM_NUMBER)
                                }
                                if (res.data.Member_ID) {
                                    setInsuranceNumber(res.data.Member_ID)
                                }
                                if (res.data.UnitedHealthcare_Group_Number) {
                                    setInsuranceNumber(res.data.UnitedHealthcare_Group_Number)
                                }
                                if (res.data.ID_) {
                                    setInsuranceNumber(res.data.ID_)
                                }
                                if (res.data.Medical_Record_No) {
                                    setInsuranceNumber(res.data.Medical_Record_No)
                                }
                                if (res.data.Subscriber_Policy_ID_) {
                                    setInsuranceNumber(res.data.Subscriber_Policy_ID_)
                                }
                                if (res.data.ID_NUMBER) {
                                    setInsuranceNumber(res.data.ID_NUMBER)
                                }
                                // if (res.data.Member_ID:) {
                                //     setInsuranceNumber(res.data.Member_ID:)
                                // }
                                console.log(InsuranceNumber, "insu")
                            })
                        // console.log(,"getRes")

                    })

            }
            reader.onerror = (error) => reject(error);

            if (ArrayBuffer) {
                console.log(reader.result, "entered")

            }

        })
    };
    //    let insurance = ""
    let url1 = `https://m3p6hw4z3bjwvfky253ubmucdu0aojxw.lambda-url.us-east-1.on.aws/`
    let bodyy =
    {
        "payerCode": "00192",
        "payerName": "UHC",
        "firstName": "Value Health",
        "middleName": "",
        "lastName": " Inc",
        "npi": "1063764280",
        "pin": "00000",
        "firstName1": "fname",
        "dob": "09/02/1998",
        "lastName1": "lname",
        "memberID": InsuranceNumber,
        "dependent": null,
        "isSubscriberPatient": "True",
        "doS_StartDate": "02/02/2021",
        "doS_EndDate": "02/02/2021",
        "PracticeTypeCode": "3",
        "referenceId": "Pat MRN",
        "Location": "Any location Name",
        "IncludeTextResponse": "false",
        "InternalId": "",
        "CustomerID": ""
    }
    axios
        .post(url1, JSON.stringify(bodyy))
        .then((res) => {
            console.log(res, "chann")
            setpayerCode(res.data.PayerCode)

            setcopayStatus(res.data.CopayStatus)
            // console.log(copayStatus,"copay")
            setpayerName(res.data.PayerName)
            console.log(payerName, "payername")
            setbalance(res.data.Balance)
            console.log(balance, "balance")
        })

    const props = {
        name: 'file',
        multiple: true,
        onChange(info) {
            let file = info.file;
            let array_length = info.fileList.length
            console.log(array_length, "array_length")
            if (info.file.status === 'error') {
                console.log(getBase64(info.fileList[array_length - 1].originFileObj), "base64")


            }

            console.log(file, "object")


        },

        onDrop(e) {

        },
    };



    console.log({ payerCode })

    const options1 = [
        { label: 'Emblem Health', id: 1 },
        { label: 'United Health', id: 2 },
        { label: 'Cigna', id: 3 },
        { label: 'Anthem', id: 4 },
        { label: 'Aetna', id: 5 },

    ];
    const options2 = [
        { label: 'EmblemHealth Platinum', id: 1 },
        { label: 'EmblemHealth Gold', id: 2 },
        { label: 'EmblemHealth Silver', id: 3 },
        { label: 'EmblemHealth Bronze', id: 4 },
        { label: 'EmblemHealth Basic (Catastrophic)', id: 5 },
        { label: 'Aetna Medicare Primier (HMO-POS)', id: 6 },
        { label: 'Aetna Medicare Value (PPO)', id: 7 },
        { label: 'Aetna Medicare Premier Plus (PPO)', id: 8 },
        { label: 'Aetna Medicare Eagle (PPO)', id: 9 },
        { label: 'SilverScript SmartSaver (PDP)', id: 10 },
        { label: 'SilverScript Plus (PDP)', id: 11 },
        { label: 'Aetna Medicare Prime Plan (HMO)', id: 12 },
        { label: 'Aetna Medicare Select Plan (HMO)', id: 13 },
        { label: 'Aetna Medicare Plus Plan (HMO)', id: 14 },
        { label: 'Aetna Medicare Choice Plan (PPO)', id: 15 },
        { label: 'Aetna Medicare Elite Plan 3 (PPO)', id: 16 },
        { label: 'Aetna Medicare Assure Plan (HMO D-SNP)', id: 17 },
        { label: 'Aetna Medicare Essential Plan (PPO)', id: 18 },
        { label: 'Aetna Medicare Eagle Plus Plan (PPO)', id: 19 },
        { label: 'Aetna Medicare Elite (PPO)', id: 20 },
        { label: 'Aetna Medicare Prime (HMO-POS)', id: 21 },

    ];

    const states = [
        { label: 'new york', id: 1 },
        { label: 'New Jersey', id: 2 },
        { label: 'Pennsylvania', id: 3 },
        { label: 'Michigan', id: 4 },
        { label: 'Texas', id: 5 },
        { label: 'Illinois', id: 6 },
    ]

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="App">
            <div className="header">
                <div style={{marginTop:"10px"}}>

               <Sidebar/>
                </div>
                <div className="header-title">


                    <div>
                        <div className='shield-div'>
                            <h1 className='shield' style={{ justifyContent: "center", textAlign: "center", marginTop: "-3%" }}>
                                SHIELD
                            </h1>
                        </div>

                        <div className='psp'>
                            <h1 className='psp' >
                                Patient Assistance Program
                            </h1>
                        </div>
                    </div>
                   
                  




                </div>
                <div style={{marginTop:"25px"}}>
                    <img  style={{height :"40px", width:"50px"}} src="https://cdn3d.iconscout.com/3d/premium/thumb/profile-6073860-4996977.png"/>
                   </div>
            </div>
            <div className="container" >

                <div className='main' style={{margin:"auto",justifyContent:"center"}}>
                    <div style={{marginLeft:"15%"}}>
                <Grid  Container style={{margin:"auto",justifyContent:"center"}}>
                    <div>
                    <Grid spacing={2} style={{margin:"auto"}}>
                    <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label" style={{ }}>DrugName</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue=""
                                        name="radio-buttons-group"

                                    >
                                        <FormControlLabel value="EUFLEXXA" control={<Radio />} label="EUFLEXXA" />

                                    </RadioGroup>
                                </FormControl>
                    </Grid>

                    <Grid spacing={1} style={{diplay:"flex",flexDirection:"row"}}>
                    <FormControl style={{marginRight:"5%"}}>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={options1}
                                        sx={{ width: 400 }}
                                        renderInput={(params) => <TextField {...params} label="Insurance Name"
                                            onSelect={(e) => setPayer(e.target.value)}


                                        />}

                                    />
                                </FormControl>


<FormControl>
                                <TextField sx={{ minWidth: 400 }} fullWidth label="Subscriber Id" variant="outlined" />
</FormControl>
                    </Grid>

                  



                    <Grid  style={{diplay:"flex",flexDirection:"row"}}>
                    <FormControl sx={{ mt: 2,mr:5}}>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>

                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={plan}
                                        sx={{ width: 400 }}
                                        renderInput={(params) => <TextField {...params} label="Plan Type"
                                            onSelect={(e) => setPlanName(e.target.value)}


                                        />}

                                    />

                                </FormControl>

<FormControl >


<Box sx={{ mt: 2,  minWidth: 400}} style={{display:"flex",flexDirection:"row"}}>
            <TextField  sx={{ minWidth: 100 }} label=" First Name" variant="outlined"/>
            <TextField  sx={{ minWidth:100 }}  label=" Last Name" variant="outlined"/>

          </Box>
         
</FormControl>
                    </Grid>



                    <Grid spacing={2} style={{ display: "flex", flexDirection: "row" }}>
  <FormControl sx={{ mt: 2,marginRight:"5%" }}>
    <InputLabel id="demo-simple-select-label"></InputLabel>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={states}
      sx={{ width: 400 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="State"
          onSelect={(e) => setstate(e.target.value)}
        />
      )}
    />
  </FormControl>

  <FormControl>
    {/* <TextField
      sx={{ minWidth: 400, mt: 2 }}
      fullWidth
      label="DOB"
      variant="outlined"
    /> */}
    <DatePicker
     sx={{ minWidth: 400, mt: 2 }}
     variant="outlined"
    label="DOB" />
  </FormControl>
</Grid>

</div>




                    <Grid style={{diplay:"flex",flexDirection:"row"}}>
                    <div className="bottom" style={{ marginTop: "20px" }}>
                <div>
                    <Row span={10}>
                        {
                            icon1 ? <span>
                                <CheckIcon style={{ gap: "30px", color: "green" }} />
                                <span style={{ marginLeft: '8px', color: "black" }}>Coverted </span>
                            </span> : ""
                        }
                        {
                            icon2 ? <span>

                                <WarningAmberIcon style={{ gap: "30px", color: "orange" }} />
                                <span style={{ marginLeft: '8px', color: "black" }}>Covered with Condition</span>
                            </span> : ""
                        }

                        {
                            icon3 ? <span>

                                <CloseIcon style={{ gap: "30px", color: "red", top: "10px" }} />
                                <span style={{ marginLeft: '8px', color: "black" }}> Not Coverted</span>
                            </span> : ""
                        }

                    </Row>


                    <TextField
                        multiline
                        fullWidth
                        rows={6}
                        rowsMax={4}
                        variant="outlined"
                        InputProps={{
                            style: { width: 400, marginTop: '15px',margin:"auto" },
                            disableAnimation: true,
                        }}

                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />



                    <div>


                        <LoadingButton
                            // disabled={response === !"" ? true : false}
                            className='savenxt'


                            loadingPosition="start"
                            variant="contained"
                            onClick={() => handleClick('Submit')}
                            loading={searchLoading}
                            style={{marginTop:"5%"}}
                        >
                            Click to Verify
                        </LoadingButton>


                    </div>

                </div>
                <div>


                    <div>

                        {
                            responseCovered == "" ?
                                <></>
                                :
                                <Col offset={2} span={8}>
                                    <div className='leftdiv'>
                                        <Row className='induranceInfo'>
                                            Insurance Information
                                        </Row>



                                        <Row >
                                            <Col offset={5}>

                                                <Dragger {...props} style={{ padding: 5 }}>
                                                    <div class="upload-btn-wrapper">
                                                        <button class="upload">Upload a file</button>
                                                        <input type="file" name="myfile" />
                                                    </div>

                                                </Dragger>
                                            </Col>
                                        </Row>


                                        <Row style={{ mt:2}}>
                                            <TextField sx={{ minWidth: 400 }} noValidate id="fullWidth"
                                                disabled={InsuranceNumber === !"" ? true : false}
                                                disableAnimation
                                                // onFocus={InsuranceNumber ? true : false}
                                                defaultValue={InsuranceNumber}
                                                value={copayStatus}
                                                onChange={(e) => setcopayStatus(e.target.value)}
                                                label="Copay Status" variant="outlined" />


                                        </Row>

                                        <Row style={{ mt:2}}>
                                            <TextField sx={{ minWidth: 400 }} noValidate id="fullWidth"
                                                disabled={InsuranceNumber === !"" ? true : false}
                                                disableAnimation
                                                // onFocus={InsuranceNumber ? true : false}
                                                defaultValue={InsuranceNumber}
                                                value={balance}
                                                onChange={(e) => setbalance(e.target.value)}
                                                label="Balance" variant="outlined" />


                                        </Row>


                                    </div>
                                </Col>
                        }

                    </div>







                </div>
            </div>


                        </Grid>
                

                    


                </Grid>
                </div>
                </div>
  </div>
  <div className='footer'>

 <footer className='footer-style'>
                <p style={{ color: "black", fontSize: "60" }}>© 2023 Copyright: www.com</p>
            </footer>
  </div>
        </div>
    );
};

export default PureReact;