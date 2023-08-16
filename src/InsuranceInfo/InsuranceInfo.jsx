import React, { useState } from 'react'
import { Col, Row } from 'antd';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { json, useNavigate, useParams } from 'react-router';
import axios from 'axios';
import "./InsuranceInfo.css"

const { Dragger } = Upload;


const InsuranceInfo = () => {
    const [ArrayBuffer, setArrayBuffer] = useState()
    const [InsuranceType, setInsuranceType] = useState()
    const [InsuranceNumber, setInsuranceNumber] = useState("")
    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage()
    const [insuId, setinsuId] = useState("")
    const [ImageUrl, setImageUrl] = useState("")

    const Navigate = useNavigate();
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('ID');
    console.log(id, "id")

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Insurance Updated Successfully',
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'failed to Update',
        });
    };
    const handleClick = () => {
        setLoading(true)
        if (id) {
            const my_list = id.split(",")
            console.log(my_list, "my_list")
            let UpdateUrl = `https://3a5zllfhz25x3w3npn4bmxcx4a0aqxml.lambda-url.us-east-1.on.aws/`

            let body = {
                // "Id": my_list[0],
                "Insurance__c": InsuranceType,
                "Insurance_company_name__c":"001Dn00000PuD5RIAV",
                "Policyholder_same_as_the_patient__c": "yes",
                "Policy_ID__c": InsuranceNumber,
                "Lead__c": my_list[1]
            }
            axios.
                post(UpdateUrl, JSON.stringify(body))
                .then((res) => {
                    setLoading(false)
                    console.log(res, "11111")
                    if (res.data.status == 'Ok') {
                        success()
                        Navigate("/")
                    }
                    else {
                        error()
                    }
                })

        } else {
            // if (!InsuranceType && InsuranceNumber) {
            // let SUBMIT_URL = `https://3a5zllfhz25x3w3npn4bmxcx4a0aqxml.lambda-url.us-east-1.on.aws/`
            // let Token = JSON.parse(localStorage.getItem('Lead_id'))
            // const firstname = JSON.parse(localStorage.getItem('firstName'));
            // const lastname = JSON.parse(localStorage.getItem('lastName'));
            // const DOb = JSON.parse(localStorage.getItem('DOb'));
            // let Body = {

            //     "Insurance__c": InsuranceType,
            //     "Insurance_company_name__c": "001Dn00000LfaWPIAZ",
            //     "Policyholder_same_as_the_patient__c": "No",
            //     "Policy_ID__c": InsuranceNumber,
            //     "Policyholder_Date_of_Birth__c": DOb,
            //     "Policyholder_First_Name__c": firstname,
            //     "Policyholder_Last_Name__c": lastname,
            //     "Lead__c": Token
            // }
            // let body1 = {

            //     "Insurance__c": "Tertiary",
            //     "Insurance_company_name__c": "001Dn00000LfaZcIAJ",
            //     "Policyholder_same_as_the_patient__c": "No",
            //     "Policy_ID__c": "K1006543106",
            //     "Policyholder_Date_of_Birth__c": "1997-01-02",
            //     "Policyholder_First_Name__c": "ragava",
            //     "Policyholder_Last_Name__c": "prasanna",
            //     "Lead__c": "00QDn000007LMfJMAW"

            // }

            // axios
            //     .post(SUBMIT_URL, JSON.stringify(Body))
            //     .then((res) => {
            //         console.log(res, "insuranceRes")
            //         if (res.data.status === "Ok") {


            //         }
            //         // console.log(res,"submitres")
            //     })
            // let FirstName = localStorage.getItem('firstName')
            // let LastName = localStorage.getItem('lastName')
            // let PhoneNumber = localStorage.getItem('PhoneNumber')
            // let MOC = localStorage.getItem('MOC')
            // let Dob = localStorage.getItem('Dob')
            // let Email = localStorage.getItem('Email')
            // let Street = localStorage.getItem('Street')
            // let City = localStorage.getItem('City')
            // let State = localStorage.getItem('State')
            // let PinCode = localStorage.getItem('PinCode')
            // let Country = localStorage.getItem('Country')
            let Doc = localStorage.getItem('Doc')

            let IMAGEURL = `https://56ozi7f5v4gcnefxk34263duhy0mgqql.lambda-url.us-east-1.on.aws/`
            axios
                .post(IMAGEURL,JSON.stringify({
    
    
                        "imagename":insuId
                        
                    })
                    
                    )
                .then((res)=> {
                    console.log(res,'resposnsee')
                    const imagee = res.data
                    setImageUrl(imagee)
                    console.log(imagee,"imagee")


                    const URL = `https://iafkrrf5icamvacwr62l56famm0icgvu.lambda-url.us-east-1.on.aws/`

                    let requestData = {
                    "LastName": "davidson",
                    "Status":"New - Not Contacted",
                    "MobilePhone":"9033630140",
                    "Email":"ragavaprasanna.v@valuehealthsol.com",
                    "FirstName":"david",
                    "HealthCloudGA__BirthDate__c":"1987-11-11",
                    "Street": "KPM",
                    "Country": "United States",
                    "PostalCode": "638183",
                    "City": "Namakkal",
                    "State": "Florida",
                    "Care_Program__c":"0ZeDn000000ThDwKAK",
                    "LeadSource":"",
                    "Registered_By__c":"Patient",
                    
                    "Is_the_Patient_Insured__c":"",
                    "HealthCloudGA__Gender__c":"",
                    "Preferred_Method_of_Contact__c":""
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
        
                                Navigate("/")
                                success()
                                let CONSENT_URL = `https://r7arhgcvxmhmsioku52d6fz7ta0edaje.lambda-url.us-east-1.on.aws/`
                                let Body = {
                                    "Consent_Name__c": "0cIDn000000tUOoMAM",
                                    "Date_Of_The_Consent__c": Doc,
                                    "Lead__c": Token
                                }
                                axios.post(CONSENT_URL, JSON.stringify(Body))
                                    .then((res) => {
                                        if (res.data.status === "Ok") {
        
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
// console.log(ImageUrl,"ImageUrl")

          

      


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
            //  let base64image =getBase64(info.fileList[array_length-1].originFileObj)
            // let base64Image = getBase64(file);
            console.log(file, "object")


            //     if(base64image){
            //     console.log("entered")
            //     let S3_URL=`https://p44t3bnlhrchrz67hg33wkpawy0pqmel.lambda-url.us-east-1.on.aws/`
            //     axios
            //     .post(S3_URL,{
            //         "file":getBase64(info.fileList[array_length-1].originFileObj)
            //     })
            //     .then((res) => {
            //     console.log(res)
            //     })
            // }
        },

        onDrop(e) {

        },
    };


    // const handlePreview = async (file) => {
    //     if (!file.url && !file.preview) {
    //       file.preview = await getBase64(file.originFileObj);
    //     }
    //     setPreviewImage(file.url || file.preview);
    //     setPreviewOpen(true);
    //     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    //   };
    return (
        <div className='Insuranceinfo-main'>
            {contextHolder}
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
                <Col span={11} >
                    <img src='Doc and Patient 1.png'>
                    </img>
                </Col>
                <Col offset={2} span={8}>
                    <div className='leftdiv'>
                        <h1 className='induranceInfo'>
                            Insurance Information
                        </h1>



                        <Row >
                            <FormControl sx={{ minWidth: 520, m: 1 }}>
                                <InputLabel id="demo-simple-select-helper-label">Insurance Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={InsuranceType}
                                    label="Insurance Type"
                                    onChange={(e) => setInsuranceType(e.target.value)}
                                // onKeyPress={}
                                // input={<BootstrapInput />}
                                >

                                    <MenuItem value={"Primary"}>Primary</MenuItem>
                                    <MenuItem value={"Secondary"}>Secondary</MenuItem>
                                    <MenuItem value={"Tertiary"}>Tertiary</MenuItem>
                                </Select>
                            </FormControl>
                        </Row>
                        <Row >
                            <Col offset={5}>

                                <Dragger {...props} style={{ padding: 5 }}>
                                    <p
                                        style={{ padding: 5 }}
                                    >Please Upload PNG, JPEG or PDF within 5MB</p>
                                    <div className='border'>
                                        <p className="ant-upload-drag-icon">
                                            <img src='file.png'>
                                            </img>
                                        </p>
                                        <p className="ant-upload-text">Select file</p>
                                    </div>

                                </Dragger>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 30 }}>
                            <TextField sx={{ minWidth: 480 }} noValidate id="fullWidth"
                                disabled={InsuranceNumber === !"" ? true : false}
                                disableAnimation
                                onFocus={InsuranceNumber ? true : false}
                                defaultValue={InsuranceNumber}
                                value={InsuranceNumber}
                                //  onChange={(e) => setFirstName(e.target.value)} 
                                label="Insurance Number" variant="outlined" />


                        </Row>

                    </div>
                </Col>

            </Row>
            <LoadingButton
                className='savenxt'

                loadingPosition="start"
                variant="contained"
                onClick={handleClick}
                loading={loading}
            >
                Submit
            </LoadingButton>
            {/* <Button className='savenxt' onClick={handleClick} variant="contained">Submit</Button> */}

        </div>
    )
}

export default InsuranceInfo
