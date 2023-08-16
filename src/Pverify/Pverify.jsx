// import React, { useState } from 'react'
// import { Col, Row } from 'antd';
// import TextField from '@mui/material/TextField';
// import Select from '@mui/material/Select';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Radio from '@mui/material/Radio';
// import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
// import InputLabel from '@mui/material/InputLabel';
// import LoadingButton from '@mui/lab/LoadingButton';
// import { InboxOutlined } from '@ant-design/icons';
// import { message, Upload } from 'antd';
// import { json, useNavigate, useParams } from 'react-router';
// import axios from 'axios';
// import "./Pverify.css"
// import TextArea from 'antd/es/input/TextArea';
// import Autocomplete from '@mui/material/Autocomplete';
// import { useEffect } from 'react';
// import { red } from '@mui/material/colors';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
// import WarningAmberIcon from '@mui/icons-material/WarningAmber';
// import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
// // import Footer from './Footer';
// // import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
// // import Box from '@mui/material/Box';
// import {
//     MDBFooter,
//     MDBContainer,
//     MDBCol,
//     MDBRow,
//     MDBIcon,
//     MDBBtn
// } from 'mdb-react-ui-kit';
// import { Box } from '@mui/material';
// // import Autolink from 'react-autolink-urls';


// const { Dragger } = Upload;


// const InsuranceInfo = () => {
//     const [ArrayBuffer, setArrayBuffer] = useState()
//     const [InsuranceType, setInsuranceType] = useState()
//     const [InsuranceNumber, setInsuranceNumber] = useState("")
//     const [payerCode, setpayerCode] = useState("")
//     const [copayStatus, setcopayStatus] = useState("")
//     const [payerName, setpayerName] = useState("")
//     const [balance, setbalance] = useState("")
//     const [summary, setSummary] = useState("")
//     const [loading, setLoading] = useState(false);
//     const [searchLoading, setSearchLoading] = useState(false);
//     const [messageApi, contextHolder] = message.useMessage()
//     const [insuId, setinsuId] = useState("")
//     const [ImageUrl, setImageUrl] = useState("")
//     const [planname, setPlanName] = useState("")
//     const [drugname, setDrugName] = useState("")
//     const [payer, setPayer] = useState("")
//     const [cigna, setCigna] = useState([])
//     const [emblemhealth, setemblemhealth] = useState([])
//     const [anthembluecrossblueshield, setanthembluecrossblueshield] = useState([])
//     const [aetna, setaetna] = useState([])
//     const [unitedhealthcare, setunitedhealthcare] = useState([])
//     const [plan, setPlan] = useState([])
//     const [responseCovered, setresponseCovered] = useState("")
//     const [color, setcolor] = useState("")
//     const [state, setstate] = useState("")
//     const [icon1, seticon1] = useState(false)
//     const [icon2, seticon2] = useState(false)
//     const [icon3, seticon3] = useState(false)




//     // const [state,setState] = useState('')

//     console.log(payer, "payer")


//     const Navigate = useNavigate();
//     const searchParams = new URLSearchParams(window.location.search);
//     const id = searchParams.get('ID');
//     console.log(id, "id")

//     const success = () => {
//         messageApi.open({
//             type: 'success',
//             content: 'Pverify Verified Successfully',
//         });
//     };
//     const error = () => {
//         messageApi.open({
//             type: 'error',
//             content: 'failed to Update',
//         });
//     };

//     // if()

//     //      const reset = ()=> {
//     //         setState({
//     //             planname: '',
//     //             drugname: '',
//     //             payer:""
//     //           })
//     // }
//     useEffect(() => {
//         let url5 = "https://xwuolpeyrsa2lrq7f6tvhbpd740rzgdy.lambda-url.us-east-1.on.aws/"
//         // let body = {
//         //     // "Id": my_list[0],
//         //     "PayerName": payer,
//         //     "DrugName":"EUFLEXXA INTRA-ARTICULAR SOLUTION PREFILLED SYRINGE",
//         //     "PlanName": planName,

//         // }


//         axios
//             .get(url5)
//             .then((res) => {
//                 console.log(res, "payerlist")
//                 setCigna(res.data.cigna.filter((e) => e != null))
//                 setaetna(res.data.aetna.filter((e) => e != null))
//                 setemblemhealth(res.data.emblemhealth.filter((e) => e != null))
//                 setanthembluecrossblueshield(res.data.anthembluecrossblueshield.filter((e) => e != null))
//                 setunitedhealthcare(res.data.unitedhealthcare.filter((e) => e != null))
//                 console.log(cigna, "cigna")
//             })
//     }, [])
//     console.log(cigna, "cigna")
//     useEffect(() => {
//         if (payer === "Emblem Health") {
//             setPlan(emblemhealth)
//             console.log(emblemhealth, "ragav")
//         }
//         if (payer === "United Health") {
//             setPlan(unitedhealthcare)
//         }
//         if (payer === "Cigna") {
//             setPlan(cigna)

//         }
//         if (payer === "Anthem") {
//             setPlan(anthembluecrossblueshield)

//         }
//         if (payer === "Aetna") {
//             setPlan(aetna)

//         }




//     }, [payer])
//     // if(payer==="Emblem Health"){
//     //      setPlan(emblemhealth)
//     //      console.log(emblemhealth,"ragav")
//     // }
//     // if(payer==="United Healthcare"){
//     //     setPlan(unitedhealthcare)
//     // }




//     const handleClick = (e) => {
//         setSearchLoading(true);
//         console.log(e, 'searchVal')
//         if (e == "Submit") {

//             let planName = planname;
//             let DrugName = drugname;
//             // let dosage = dosage;

//             let url2 = "https://oxk2aiz3qvwftkvbxla67vlsre0iljbr.lambda-url.us-east-1.on.aws/"
//             let body = {
//                 // "Id": my_list[0],
//                 "PlanName": planName,
//                 "PayerName": payer,
//                 "DrugName": "EUFLEXXA",

//             }


//             axios
//                 .post(url2, JSON.stringify(body))
//                 .then((res) => {
//                     console.log(res)
//                     let response = res.data.response.Response
//                     console.log(response, "covert")
//                     setresponseCovered(res.data.response.Response)
//                     const copay = "$10.00"
//                     const balance = "$5500"
//                     setbalance(balance)
//             // console.log(res.data,"data")
//             // console.log(payerCode,"payercode")
//             setcopayStatus(copay)
//                     let description = res.data.response.Description
//                     console.log(response, "res")
//                     // const urlRegex = /(https?:\/\/[^\s]+)/g;
//                     // const textWithLinks = description.replace(urlRegex, (url) => {
//                     //     return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`

//                     // });
//                     // // // const link ="https://www.uhc.com/content/dam/uhcdotcom/en/Pharmacy/PDFs/pharmacy-pdl-3t-adv-may-2023.pdf"

//                     // setlink(link)
//                     // const link =  <div dangerouslySetInnerHTML={{ __html: textWithLinks }} />

//                     // console.log(setlink,"summary")
// <<<<<<< HEAD
//                     setSummary(description)
// =======
//                     setSummary(response+description)
// >>>>>>> 26caf72c32d5b27d0675bf99020d147a296bdb42



//                     //   console.log(textWithLinks,"textWithLinks")



//                     //       if (res.data.status == "Error") {
//                     //         // error()

//                     //       }
//                     //       if (res.data.status == "200") {
//                     //         // console.log("eewww")
//                     //         Navigate("/")
//                     //         // error()

            // let planName = planname;
            // let DrugName = drugname;
            // let dosage = dosage;

            // let url2 = "https://oxk2aiz3qvwftkvbxla67vlsre0iljbr.lambda-url.us-east-1.on.aws/"
            // let body = {
            //     // "Id": my_list[0],
            //     "PlanName": planName,
            //     "PayerName": payer,
            //     "DrugName": "EUFLEXXA",

            // }


            // axios
            //     .post(url2, JSON.stringify(body))
            //     .then((res) => {
            //         console.log(res)
            //         let response = res.data.response.Response
            //         console.log(response, "covert")
            //         setresponseCovered(res.data.response.Response)
            //         const copay = "$10.00"
            //         const balance = "$5500"
            //         setbalance(balance)
            // // console.log(res.data,"data")
            // // console.log(payerCode,"payercode")
            // setcopayStatus(copay)
            //         let description = res.data.response.Description
            //         console.log(response, "res")
                    // const urlRegex = /(https?:\/\/[^\s]+)/g;
                    // const textWithLinks = description.replace(urlRegex, (url) => {
                    //     return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`

                    // });
                    // // // const link ="https://www.uhc.com/content/dam/uhcdotcom/en/Pharmacy/PDFs/pharmacy-pdl-3t-adv-may-2023.pdf"

                    // setlink(link)
                    // const link =  <div dangerouslySetInnerHTML={{ __html: textWithLinks }} />

                    // console.log(setlink,"summary")
                    // setSummary(description)

            //         let urll = "https://utic3u6zu4tludbwfxx2xtvxuq0bhcxn.lambda-url.us-east-1.on.aws/"
            //         let body1 = {
            //             // "Id": my_list[0],
                        
            //                 "to": "ragavaprasanna.v@valuehealthsol.com",
            //                 "subject":"Ferring status",
            //                 "body":response+planName+payer
                          
        
            //         }

                    
            // axios
            // .post(urll, JSON.stringify(body1))
            // .then((res) => {
            //     console.log(res)
            // }
//                     //       }
//                     //     })
//                     // }
//                     // else {
//                     //   Navigate("/")
//                     // }
//                 })
//                 .finally(() => {
//                     setSearchLoading(false);
//                 })
//         }
//     }



//     // usereffect(()=>{

//     // },[handleResetClick])
//     //   console.log(handleResetClick,"ddddddd")
//     // const textcolor = [
//     // console
//     useEffect(() => {

// <<<<<<< HEAD
//         if (responseCovered == "Covered ") {
// =======
//         if (responseCovered == "Covered") {
// >>>>>>> 26caf72c32d5b27d0675bf99020d147a296bdb42
//             // setcolor("red")
//             seticon1(true)
//             seticon2(false)
//             seticon3(false)


//         }
//         else if (responseCovered == "Covered with Condition") {

//             seticon1(false)
//             seticon2(true)
//             seticon3(false)

//         }
//         else if (responseCovered == "Not Covered") {

//             seticon1(false)
//             seticon2(false)
//             seticon3(true)

//         }
//         else {
//             seticon1(false)
//             seticon2(false)
//             seticon3(false)

//         }
//         // if (responseCovered == "Covered with Condition") {
//         //     // setcolor("red")
//         //     seticon1(false)
//         //     seticon2(true)
//         //     seticon3(false)


//         // }
//         // else {

//         //     seticon1(false)
//         //     seticon2(false)
//         //     seticon3(false)

//         // }
//         // if (responseCovered == "Not Covert") {
//         //     // setcolor("red")
//         //     seticon1(false)
//         //     seticon2(false)
//         //     seticon3(true)


//         // }
//         // else {

//         //     seticon1(false)
//         //     seticon2(false)
//         //     seticon3(false)

//         // }
//     }, [responseCovered])
//     // ]

//     const handleReset = () => {
//         setPayer("");
//         setDrugName("");
//         setPlanName("");
//     };

//     const [isHistoryOpen, setIsHistoryOpen] = useState(false);

//     const toggleHistory = () => {
//         setIsHistoryOpen(!isHistoryOpen);
//     };

//     const handle = () => {
//         setLoading(true)
//         if (id) {
//             const my_list = id.split(",")
//             console.log(my_list, "my_list")
//             let UpdateUrl = `https://3a5zllfhz25x3w3npn4bmxcx4a0aqxml.lambda-url.us-east-1.on.aws/`

//             let body = {
//                 // "Id": my_list[0],
//                 "Insurance__c": InsuranceType,
//                 "Insurance_company_name__c": "001Dn00000PuD5RIAV",
//                 "Policyholder_same_as_the_patient__c": "yes",
//                 "Policy_ID__c": InsuranceNumber,
//                 "Lead__c": my_list[1]
//             }
//             axios.
//                 post(UpdateUrl, JSON.stringify(body))
//                 .then((res) => {
//                     setLoading(false)
//                     console.log(res.data.status, "responsee")
//                     if (res.data.status === "Ok") {
//                         //   Navigate("/InsuranceInfo ")
//                         success()
//                     }
//                     else {
//                         error()
//                     }
//                 })

//         } else {
//             // if (!InsuranceType && InsuranceNumber) {
//             // let SUBMIT_URL = `https://3a5zllfhz25x3w3npn4bmxcx4a0aqxml.lambda-url.us-east-1.on.aws/`
//             // let Token = JSON.parse(localStorage.getItem('Lead_id'))
//             // const firstname = JSON.parse(localStorage.getItem('firstName'));
//             // const lastname = JSON.parse(localStorage.getItem('lastName'));
//             // const DOb = JSON.parse(localStorage.getItem('DOb'));
//             // let Body = {

//             //     "Insurance__c": InsuranceType,
//             //     "Insurance_company_name__c": "001Dn00000LfaWPIAZ",
//             //     "Policyholder_same_as_the_patient__c": "No",
//             //     "Policy_ID__c": InsuranceNumber,
//             //     "Policyholder_Date_of_Birth__c": DOb,
//             //     "Policyholder_First_Name__c": firstname,
//             //     "Policyholder_Last_Name__c": lastname,
//             //     "Lead__c": Token
//             // }
//             // let body1 = {

//             //     "Insurance__c": "Tertiary",
//             //     "Insurance_company_name__c": "001Dn00000LfaZcIAJ",
//             //     "Policyholder_same_as_the_patient__c": "No",
//             //     "Policy_ID__c": "K1006543106",
//             //     "Policyholder_Date_of_Birth__c": "1997-01-02",
//             //     "Policyholder_First_Name__c": "ragava",
//             //     "Policyholder_Last_Name__c": "prasanna",
//             //     "Lead__c": "00QDn000007LMfJMAW"

//             // }

//             // axios
//             //     .post(SUBMIT_URL, JSON.stringify(Body))
//             //     .then((res) => {
//             //         console.log(res, "insuranceRes")
//             //         if (res.data.status === "Ok") {


//             //         }
//             //         // console.log(res,"submitres")
//             //     })
//             let FirstName = localStorage.getItem('firstName')
//             let LastName = localStorage.getItem('lastName')
//             let PhoneNumber = localStorage.getItem('PhoneNumber')
//             let MOC = localStorage.getItem('MOC')
//             let Dob = localStorage.getItem('Dob')
//             let Email = localStorage.getItem('Email')
//             let Street = localStorage.getItem('Street')
//             let City = localStorage.getItem('City')
//             let State = localStorage.getItem('State')
//             let PinCode = localStorage.getItem('PinCode')
//             let Country = localStorage.getItem('Country')
//             let Doc = localStorage.getItem('Doc')

//             let IMAGEURL = `https://56ozi7f5v4gcnefxk34263duhy0mgqql.lambda-url.us-east-1.on.aws/`
//             axios
//                 .post(IMAGEURL, JSON.stringify({


//                     "imagename": insuId

//                 })

//                 )
//                 .then((res) => {
//                     console.log(res, 'resposnsee')
//                     const imagee = res.data
//                     setImageUrl(imagee)
//                     console.log(imagee, "imagee")


//                     const URL = `https://iafkrrf5icamvacwr62l56famm0icgvu.lambda-url.us-east-1.on.aws/`

//                     let requestData = {
//                         "LastName": "davidson",
//                         "Status": "New - Not Contacted",
//                         "MobilePhone": "9033630140",
//                         "Email": "ragavaprasanna.v@valuehealthsol.com",
//                         "FirstName": "david",
//                         "HealthCloudGA__BirthDate__c": "1987-11-11",
//                         "Street": "KPM",
//                         "Country": "United States",
//                         "PostalCode": "638183",
//                         "City": "Namakkal",
//                         "State": "Florida",
//                         "Care_Program__c": "0ZeDn000000ThDwKAK",
//                         "LeadSource": "",
//                         "Registered_By__c": "Patient",

//                         "Is_the_Patient_Insured__c": "",
//                         "HealthCloudGA__Gender__c": "",
//                         "Preferred_Method_of_Contact__c": ""
//                     }
//                     const reqbody = JSON.stringify(requestData)
//                     let requestHeaders = {
//                         "Content-Type": "application/json"
//                     }
//                     axios
//                         .post(URL, JSON.stringify(requestData))
//                         .then((res) => {
//                             console.log(res)
//                             setLoading(false)
//                             const Token = res.data.id
//                             if (res.data.status == "ok" || "ERROR") {

//                                 Navigate("/NewUser")
//                                 success()
//                                 let CONSENT_URL = `https://r7arhgcvxmhmsioku52d6fz7ta0edaje.lambda-url.us-east-1.on.aws/`
//                                 let Body = {
//                                     "Consent_Name__c": "0cIDn000000tUOoMAM",
//                                     "Date_Of_The_Consent__c": Doc,
//                                     "Lead__c": Token
//                                 }
//                                 axios.post(CONSENT_URL, JSON.stringify(Body))
//                                     .then((res) => {
//                                         if (res.data.status == "ok" || "ERROR") {

//                                             success()
//                                         } else {
//                                             error()
//                                         }
//                                     })

//                             }
//                             if (res.data.status == "ERROR") {
//                                 console.log("eewww")
//                                 error()
//                             }
//                         })
//                 })
//             // console.log(ImageUrl,"ImageUrl")






//         }
//     }
//     // }

//     const getBase64 = (file) => {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             setLoading(true)
//             reader.readAsDataURL(file);
//             reader.onload = () => {
//                 resolve(reader.result);
//                 // setArrayBuffer(reader.result)
//                 console.log(reader.result, 'readerResult')
//                 let S3_URL = `https://p44t3bnlhrchrz67hg33wkpawy0pqmel.lambda-url.us-east-1.on.aws/`
//                 axios
//                     .post(S3_URL, JSON.stringify({
//                         "file": reader.result.split("base64,")[1]
//                     }))
//                     .then((res) => {
//                         console.log(res.data.uploadResult.key, "InsuranceURL")
//                         const imagegeturl = res.data.uploadResult.key
//                         const insuid = imagegeturl.split('/')[1]
//                         console.log(insuid, "idforinsurance")
//                         setinsuId(insuid)



//                         axios
//                             .get(`https://wkakeekb2aiaxhobq26xi337je0pbxxt.lambda-url.us-east-1.on.aws/`)
//                             .then((res) => {
//                                 setLoading(false)
//                                 console.log(res.data, "insurancceeee")
//                                 if (res.data.Member_id) {
//                                     setInsuranceNumber(res.data.Member_id)
//                                 }
//                                 if (res.data.Health_ID) {
//                                     setInsuranceNumber(res.data.Health_ID)
//                                 }
//                                 if (res.data.POLICY_NUMBER) {
//                                     setInsuranceNumber(res.data.POLICY_NUMBER)
//                                 }
//                                 if (res.data.MEDICAL_CLAIM_NUMBER) {
//                                     setInsuranceNumber(res.data.MEDICAL_CLAIM_NUMBER)
//                                 }
//                                 if (res.data.Member_ID) {
//                                     setInsuranceNumber(res.data.Member_ID)
//                                 }
//                                 if (res.data.UnitedHealthcare_Group_Number) {
//                                     setInsuranceNumber(res.data.UnitedHealthcare_Group_Number)
//                                 }
//                                 if (res.data.ID_) {
//                                     setInsuranceNumber(res.data.ID_)
//                                 }
//                                 if (res.data.Medical_Record_No) {
//                                     setInsuranceNumber(res.data.Medical_Record_No)
//                                 }
//                                 if (res.data.Subscriber_Policy_ID_) {
//                                     setInsuranceNumber(res.data.Subscriber_Policy_ID_)
//                                 }
//                                 if (res.data.ID_NUMBER) {
//                                     setInsuranceNumber(res.data.ID_NUMBER)
//                                 }
//                                 // if (res.data.Member_ID:) {
//                                 //     setInsuranceNumber(res.data.Member_ID:)
//                                 // }
//                                 console.log(InsuranceNumber, "insu")
//                             })
//                         // console.log(,"getRes")

//                     })

//             }
//             reader.onerror = (error) => reject(error);

//             if (ArrayBuffer) {
//                 console.log(reader.result, "entered")

//             }

//         })
//     };
//     //    let insurance = ""
//     let url1 = `https://m3p6hw4z3bjwvfky253ubmucdu0aojxw.lambda-url.us-east-1.on.aws/`
//     let bodyy =
//     {
//         "payerCode": "00192",
//         "payerName": "UHC",
//         "firstName": "Value Health",
//         "middleName": "",
//         "lastName": " Inc",
//         "npi": "1063764280",
//         "pin": "00000",
//         "firstName1": "fname",
//         "dob": "09/02/1998",
//         "lastName1": "lname",
//         "memberID": InsuranceNumber,
//         "dependent": null,
//         "isSubscriberPatient": "True",
//         "doS_StartDate": "02/02/2021",
//         "doS_EndDate": "02/02/2021",
//         "PracticeTypeCode": "3",
//         "referenceId": "Pat MRN",
//         "Location": "Any location Name",
//         "IncludeTextResponse": "false",
//         "InternalId": "",
//         "CustomerID": ""
//     }
//     axios
//         .post(url1, JSON.stringify(bodyy))
//         .then((res) => {
//             console.log(res, "chann")
//             setpayerCode(res.data.PayerCode)
//             const copay = "$10.00"
//             // console.log(res.data,"data")
//             // console.log(payerCode,"payercode")
//             setcopayStatus(copay)
//             // console.log(copayStatus,"copay")
//             setpayerName(res.data.PayerName)
//             console.log(payerName, "payername")
//             setbalance(res.data.Balance)
//             console.log(balance, "balance")
//         })

//     // let planName ="emblem";
//     // let DrugName="EUFLEXXA INTRA-ARTICULAR SOLUTION PREFILLED SYRINGE";
//     //  let dosage="20mg";

//     // let url2 = "http://54.89.10.171:8502/Health_Insurance_Coverage/"+planName+"/"+DrugName+"/"+dosage+""

//     // //    let planName ="emblem";
//     // //    let DrugName="EUFLEXXA";
//     // //     let dosage="20mg";


//     // axios
//     // .post(url2)
//     // .then((res) => {
//     //     console.log(res,"result") 
//     //     setSummary(JSON.stringify(res.data.response))
//     // })

//     const props = {
//         name: 'file',
//         multiple: true,
//         onChange(info) {
//             let file = info.file;
//             let array_length = info.fileList.length
//             console.log(array_length, "array_length")
//             if (info.file.status === 'error') {
//                 console.log(getBase64(info.fileList[array_length - 1].originFileObj), "base64")


//             }
//             //  let base64image =getBase64(info.fileList[array_length-1].originFileObj)
//             // let base64Image = getBase64(file);
//             console.log(file, "object")


//             //     if(base64image){
//             //     console.log("entered")
//             //     let S3_URL=`https://p44t3bnlhrchrz67hg33wkpawy0pqmel.lambda-url.us-east-1.on.aws/`
//             //     axios
//             //     .post(S3_URL,{
//             //         "file":getBase64(info.fileList[array_length-1].originFileObj)
//             //     })
//             //     .then((res) => {
//             //     console.log(res)
//             //     })
//             // }
//         },

//         onDrop(e) {

//         },
//     };

//     // const responseText = 'Here is a link to OpenAI website: https://openai.com';
//     // const list = [
//     //     {label:'dog', value:'dog' }
//     // ]


//     // const handlePreview = async (file) => {
//     //     if (!file.url && !file.preview) {
//     //       file.preview = await getBase64(file.originFileObj);
//     //     }
//     //     setPreviewImage(file.url || file.preview);
//     //     setPreviewOpen(true);
//     //     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));

//     //   };


//     console.log({ payerCode })
//     // const options = [
//     //     { label: 'J7323/EUFLEXXA', id: 1 },
//     //     // { label: 'EUFLEXXA', id: 2 },
//     //     // { label: 'NON-NARCOTIC ANALGESICS', id: 3 },
//     // ];
//     const options1 = [
//         { label: 'Emblem Health', id: 1 },
//         { label: 'United Health', id: 2 },
//         { label: 'Cigna', id: 3 },
//         { label: 'Anthem', id: 4 },
//         { label: 'Aetna', id: 5 },
//         // { label: 'ANTHEM - GA', id: 6 },
//         // { label: 'BCBS of Maine', id: 7 },
//         // { label: 'BCBS of New York (Empire)', id: 8 },
//         // { label: 'Blue Cross Blue Shield Florida', id: 9 },
//         // { label: 'CalOptima', id: 10 },
//         // { label: 'Central Health Plan', id: 11 },
//         // { label: 'Delta Dental of Idaho', id: 12 },
//         // { label: 'EMPIRE BC NEW YORK', id: 13 },
//         // { label: 'Empire Blue Cross Blue Shield Dental', id: 14 },
//         // { label: 'Humana', id: 15 },
//         // { label: 'Humana CareSource (KY)', id: 16 },
//         // { label: 'Ideal Life Insurance', id: 17 },
//         // { label: 'IMPERIAL HEALTH', id: 18 },
//         // { label: 'Kern Health System', id: 19 },
//         // { label: 'Lifewise Health Plan of Oregon', id: 20 },
//         // { label: 'MASSHEALTH', id: 21 },
//         // { label: 'Peoples Health', id: 22 },
//     ];
//     const options2 = [
//         { label: 'EmblemHealth Platinum', id: 1 },
//         { label: 'EmblemHealth Gold', id: 2 },
//         { label: 'EmblemHealth Silver', id: 3 },
//         { label: 'EmblemHealth Bronze', id: 4 },
//         { label: 'EmblemHealth Basic (Catastrophic)', id: 5 },
//         { label: 'Aetna Medicare Primier (HMO-POS)', id: 6 },
//         { label: 'Aetna Medicare Value (PPO)', id: 7 },
//         { label: 'Aetna Medicare Premier Plus (PPO)', id: 8 },
//         { label: 'Aetna Medicare Eagle (PPO)', id: 9 },
//         { label: 'SilverScript SmartSaver (PDP)', id: 10 },
//         { label: 'SilverScript Plus (PDP)', id: 11 },
//         { label: 'Aetna Medicare Prime Plan (HMO)', id: 12 },
//         { label: 'Aetna Medicare Select Plan (HMO)', id: 13 },
//         { label: 'Aetna Medicare Plus Plan (HMO)', id: 14 },
//         { label: 'Aetna Medicare Choice Plan (PPO)', id: 15 },
//         { label: 'Aetna Medicare Elite Plan 3 (PPO)', id: 16 },
//         { label: 'Aetna Medicare Assure Plan (HMO D-SNP)', id: 17 },
//         { label: 'Aetna Medicare Essential Plan (PPO)', id: 18 },
//         { label: 'Aetna Medicare Eagle Plus Plan (PPO)', id: 19 },
//         { label: 'Aetna Medicare Elite (PPO)', id: 20 },
//         { label: 'Aetna Medicare Prime (HMO-POS)', id: 21 },

//     ];

//     const states = [
//         { label: 'New York', id: 1 },
//         { label: 'New Jersey', id: 2 },
//         { label: 'Pennsylvania', id: 3 },
//         { label: 'Michigan', id: 4 },
//         { label: 'Texas', id: 5 },
//         { label: 'Illinois', id: 6 },
//     ]

//     //    const options5 = [
//     //     "Cigna Connect 8700 - Bronze",
//     //     "Cigna Connect 8700-1 - Bronze",
//     //     "Cigna Connect 8500 - Bronze",
//     //     "Cigna Connect 8500-1 - Bronze",
//     //     "Cigna Connect HSA 7050 - Bronze",
//     //     "Cigna Connect 7050-1 - Bronze",
//     //     "Cigna Connect 7000 - Bronze",
//     //     "Cigna Connect 7000-1 - Bronze",
//     //     "Cigna Connect 6800 Enhanced Diabetes Care - Bronze",
//     //     "Cigna Connect 6800-1 Enhanced Diabetes Care - Bronze",
//     //     "Cigna Connect 0A - Bronze",
//     //     "Cigna Connect 0A-1 - Bronze",
//     //     "Cigna Connect 6500 - Silver",
//     //     "Cigna Connect 6500-1 - Silver",
//     //     "Cigna Connect 5000-2 - Silver",
//     //     "Cigna Connect 300-3 - Silver",
//     //     "Cigna Connect 0-4A - Silver",
//     //     "Cigna Connect 5500 - Silver",
//     //     "Cigna Connect 5500-1 - Silver",
//     //     "Cigna Connect 4400-2 - Silver",
//     //     "Cigna Connect 500-3 - Silver",
//     //     "Cigna Connect 0-4B - Silver",
//     //     "Cigna Connect 4200 Enhanced Asthma COPD Care - Silver",
//     //     "Cigna Connect 4200-1 Enhanced Asthma COPD Care - Silver",
//     //     "Cigna Connect 3550-2 Enhanced Asthma COPD Care - Silver",
//     //     "Cigna Connect 750-3 Enhanced Asthma COPD Care - Silver",
//     //     "Cigna Connect 50-4 Enhanced Asthma COPD Care - Silver",
//     //     "Cigna Connect 4000 - Silver",
//     //     "Cigna Connect 4000-1 - Silver",
//     //     "Cigna Connect 3550-2 - Silver",
//     //     "Cigna Connect 650-3 - Silver",
//     //     "Cigna Connect 100-4 - Silver",
//     //     "Cigna Connect 3800 Enhanced Diabetes Care - Silver",
//     //     "Cigna Connect 3800-1 Enhanced Diabetes Care - Silver",
//     //     "Cigna Connect 3000-2 Enhanced Diabetes Care - Silver",
//     //     "Cigna Connect 600-3 Enhanced Diabetes Care - Silver",
//     //     "Cigna Connect 40-4 Enhanced Diabetes Care- Silver",
//     //     "Cigna Connect 0B - Silver",
//     //     "Cigna Connect 0B-1 - Silver",
//     //     "Cigna Connect 0-2 - Silver",
//     //     "Cigna Connect 0-3 - Silver",
//     //     "Cigna Connect 0-4C - Silver",
//     //     "Cigna Connect 1900 Enhanced Diabetes Care - Gold",
//     //     "Cigna Connect 1900-1 Enhanced Diabetes Care - Gold",
//     //     "Cigna Connect 1900 - Gold",
//     //     "Cigna Connect 1900-1 - Gold",
//     //     "Cigna Connect-0",
//     //     "Cigna Simple Choice 9100-1 - Bronze",
//     //     "Cigna Simple Choice 7500 - Bronze",
//     //     "Cigna Simple Choice 7500-1 - Bronze",
//     //     "Cigna Simple Choice 5800 - Silver",
//     //     "Cigna Simple Choice 5800-1 - Silver",
//     //     "Cigna Simple Choice 5700-2 - Silver",
//     //     "Cigna Simple Choice 800-3 - Silver",
//     //     "Cigna Simple Choice 0-4 - Silver",
//     //     "Cigna Simple Choice 2000 - Gold",
//     //     "Cigna Simple Choice 2000-1 - Gold",
//     //     "Cigna Simple Choice-0",
//     //     "Cigna Connect 4400 - Silver - (Off Exchange Only)",
//     //     "Cigna Connect 2000 - Silver - (Off Exchange Only)",
//     //     "Cigna Connect 900 - Gold - (Off Exchange Only",
//     // ]

//     // const textColor = "https://www.uhc.com/content/dam/uhcdotcom/en/Pharmacy/PDFs/pharmacy-pdl-3t-adv-may-2023.pdf";
//     // const urlRegex = /(https?:\/\/[^\s]+)/g;
//     //                 const textWithLinks = textColor.replace(urlRegex, (url) => {
//     //                     return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
//     //                 })
//     //                 const link =  <div dangerouslySetInnerHTML={{ __html: textWithLinks }} />
//     //                 console.log(summary,"summary")

//     return (
//         <div className='Insuranceinfo-main'>
//             {contextHolder}
//             <Row>
//                 <div className='shield-div'>
//                     <h1 className='shield'>
//                         SHIELD
//                     </h1>

//                 </div>
              
//             </Row>

//             <div style={{ display: "flex", justifyContent: "space-end",gap:"20%" }}>
//                 <div className='psp-div'>
                    
//                         <div className="menu-icon" onClick={toggleHistory}>
//                             <MenuIcon />
//                             {/* <span>Menu</span> */}
//                         </div>
//                         {isHistoryOpen && (
//                             <div className="history-button">
//                                 <Button variant="contained">History</Button>
//                             </div>
//                         )}
                

                   

                    
//                 </div>
//                 <div className='psp'>
// <<<<<<< HEAD
//                 <h1 className='psp' >
// =======
//                 <h1 className='psp' style={{marginLeft:"50px"}} >
// >>>>>>> 26caf72c32d5b27d0675bf99020d147a296bdb42
//                         Patient Assistance Program
//                     </h1>
//                 </div>
//                 <div>
//                     <CircleNotificationsIcon style={{
//                         gap: "30px", color: "green", width: '20vw',
//                         height: '5vh',
//                     }} />
            
//                 </div>
//             </div>

//             <Row>
//                 <Col span={11} >
//                     <Row span={10}>

//                         <FormControl>
//                             <FormLabel id="demo-radio-buttons-group-label" style={{marginTop:"5%"}}>DrugName</FormLabel>
//                             <RadioGroup
//                                 aria-labelledby="demo-radio-buttons-group-label"
//                                 defaultValue=""
//                                 name="radio-buttons-group"

//                             >
//                                 <FormControlLabel value="EUFLEXXA" control={<Radio />} label="EUFLEXXA" />
//                                 {/* <FormControlLabel value="EUF" control={<Radio />} label="EUF" /> */}
//                                 {/* <FormControlLabel value="male" control={<Radio />} label="Male" />
//     <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
//                             </RadioGroup>
//                         </FormControl>
//                         {/* <FormControl sx={{ minWidth: 363, m: 1 }}>
//                   <TextField id="standard-basic" error={summary} type="number" label="Phone Number" 
//                   // onChange={(e) => setPhoneNumber(e.target.value)} 
//                   variant="outlined" />

//                 </FormControl> */}
//                     </Row>
//                     <div style={{ display: "flex", gap: "20px",marginTop:"2%" }}>
//                         <div>
//                             <Row span={10}>

//                                 <FormControl sx={{ minWidth: 400, m: 1 }}>
//                                     <InputLabel id="demo-simple-select-label"></InputLabel>
//                                     <Autocomplete
//                                         disablePortal
//                                         id="combo-box-demo"
//                                         options={options1}
//                                         sx={{ width: 400 }}
//                                         renderInput={(params) => <TextField {...params} label="Insurance Name"
//                                             onSelect={(e) => setPayer(e.target.value)}


//                                         />}

//                                     />
//                                 </FormControl>


//                             </Row>
//                             <Row span={10}>
//                                 <FormControl sx={{ minWidth: 400, m: 1 }}>
//                                     <InputLabel id="demo-simple-select-label"></InputLabel>

//                                     <Autocomplete
//                                         disablePortal
//                                         id="combo-box-demo"
//                                         options={plan}
//                                         sx={{ width: 400 }}
//                                         renderInput={(params) => <TextField {...params} label="Plan Type"
//                                             onSelect={(e) => setPlanName(e.target.value)}


//                                         />}

//                                     />

//                                 </FormControl>
//                                 {/* <FormControl sx={{ minWidth: 363, m: 1 }}>
//                   <TextField id="standard-basic" error={summary} type="number" label="Phone Number" 
//                   // onChange={(e) => setPhoneNumber(e.target.value)} 
//                   variant="outlined" />

//                 </FormControl> */}
//                                 {/* <CheckIcon/> */}
//                                 {/* <svg data-testid="CheckIcon"></svg> */}
//                             </Row>
//                             <Row span={10}>
//                                 <FormControl sx={{ minWidth: 400, m: 1 }}>
//                                     <InputLabel id="demo-simple-select-label"></InputLabel>

//                                     <Autocomplete
//                                         disablePortal
//                                         id="combo-box-demo"
//                                         options={states}
//                                         sx={{ width: 400 }}
//                                         renderInput={(params) => <TextField {...params} label="State"
//                                             onSelect={(e) => setstate(e.target.value)}


//                                         />}

//                                     />

//                                 </FormControl>
//                                 {/* <FormControl sx={{ minWidth: 363, m: 1 }}>
//                   <TextField id="standard-basic" error={summary} type="number" label="Phone Number" 
//                   // onChange={(e) => setPhoneNumber(e.target.value)} 
//                   variant="outlined" />

//                 </FormControl> */}
//                             </Row>
//                         </div>
//                         <div style={{marginTop:"7px"}}>
//                             <Row>
//                                 <TextField id="fullWidth"
//                                     // error={FirstNameError}
//                                     label="Subscriber ID"
//                                 // onChange={(e) => setFirstName(e.target.value)} variant="outlined"
//                                 />
//                             </Row>
//                             <br />
//                             <Row>
//                                 <TextField id="fullWidth"
//                                     // error={FirstNameError}
// <<<<<<< HEAD
//                                     label="Name"
// =======
//                                     label="FirstName"
//                                 // onChange={(e) => setFirstName(e.target.value)} variant="outlined"
//                                 />

//                             </Row>
//                             <br />
//                             <Row>
//                                 <TextField id="fullWidth"
//                                     // error={FirstNameError}
//                                     label="LastName"
// >>>>>>> 26caf72c32d5b27d0675bf99020d147a296bdb42
//                                 // onChange={(e) => setFirstName(e.target.value)} variant="outlined"
//                                 />

//                             </Row>
//                             <br />
//                             <Row>
//                                 <TextField id="fullWidth"
//                                     // error={FirstNameError}
//                                     label="DOB"
//                                 // onChange={(e) => setFirstName(e.target.value)} variant="outlined"
//                                 />

//                             </Row>

//                         </div>
//                     </div>

//                     <Row span={10}>
//                         {
//                             icon1 ? <span>
//                                 <CheckIcon style={{ gap: "30px", color: "green" }} />
// <<<<<<< HEAD
//                                 <span style={{ marginLeft: '8px', color: "black" }}>Coverted </span>
// =======
//                                 <span style={{ marginLeft: '8px', color: "black" }}>Covered</span>
// >>>>>>> 26caf72c32d5b27d0675bf99020d147a296bdb42
//                             </span> : ""
//                         }
//                         {
//                             icon2 ? <span>

//                                 <WarningAmberIcon style={{ gap: "30px", color: "orange" }} />
//                                 <span style={{ marginLeft: '8px', color: "black" }}>Covered with Condition</span>
//                             </span> : ""
//                         }

//                         {
//                             icon3 ? <span>

//                                 <CloseIcon style={{ gap: "30px", color: "red", top: "10px" }} />
//                                 <span style={{ marginLeft: '8px', color: "black" }}> Not Coverted</span>
//                             </span> : ""
//                         }

//                     </Row>

//                     <Row style={{ marginTop: 30 }}>
//                         <TextArea sx={{ minWidth: 480, minHeight: 100 }} noValidate id="fullWidth"
//                             autoSize={{ minRows: 6, maxRows: 4 }}


//                             // disabled={InsuranceNumber === !"" ? true : false}
//                             disableAnimation
//                             // onFocus={InsuranceNumber ? true : false}
//                             // defaultValue={InsuranceNumber}
//                             value={summary}
//                             style={{ fontWeight: "450" }}
//                             //  onChange={(e) => setSummary(e.target.value)} 
//                             label="summary" variant="outlined" />
//                         {/* <Autolink text={responseText} /> */}




//                     </Row>
//                     {/* <Row style={{ marginTop: 30 }}>
//                         <TextArea sx={{ minWidth: 480, minHeight: 100 }} noValidate id="fullWidth"
//                             autoSize={{ minRows: 2, maxRows: 2 }}
                            

//                             // disabled={InsuranceNumber === !"" ? true : false}
//                             disableAnimation
//                             // onFocus={InsuranceNumber ? true : false}
//                             // defaultValue={InsuranceNumber}
//                             value={link}
//                             style={{ color: color }}
//                             //  onChange={(e) => setSummary(e.target.value)} 
//                             label="summary" variant="outlined" />
//                             {/* <Autolink text={responseText} /> */}




//                     {/* </Row> */}
//                     <div style={{display:"flex",gap:"100px"}}>
//                         <div>
                    

//                     <LoadingButton
//                         // disabled={response === !"" ? true : false}
//                         className='savenxt'


//                         loadingPosition="start"
//                         variant="contained"
//                         onClick={() => handleClick('Submit')}
//                         loading={searchLoading}
//                     >
//                         Click to Verify
//                     </LoadingButton>
//                     </div>

//                        <div>
//                     <Button className='saves' onClick={() => handleReset()} variant="contained">download</Button>
//                     </div>
//                     </div>

//                     {/* <Button className='savee' onClick={() => handleClick('Submit')} variant="contained">Clear</Button> */}
//                 </Col>
//                 {
//                     responseCovered == "" ?
//                         <></>
//                         :
//                         <Col offset={2} span={8}>
//                             <div className='leftdiv'>
//                                 <h1 className='induranceInfo'>
//                                     Insurance Information
//                                 </h1>



//                                 {/* <Row >
//                         <FormControl sx={{ minWidth: 520, m: 1 }}>
//                             <InputLabel id="demo-simple-select-helper-label">Insurance Type</InputLabel>
//                             <Select
//                                 labelId="demo-simple-select-helper-label"
//                                 id="demo-simple-select-helper"
//                                 value={InsuranceType}
//                                 label="Insurance Type"
//                                 onChange={(e) => setInsuranceType(e.target.value)}
//                             // onKeyPress={}
//                             // input={<BootstrapInput />}
//                             >

//                                 <MenuItem value={"Primary"}>Primary</MenuItem>
//                                 <MenuItem value={"Secondary"}>Secondary</MenuItem>
//                                 <MenuItem value={"Tertiary"}>Tertiary</MenuItem>
//                             </Select>
//                         </FormControl>
//                     </Row> */}
//                                 {/* {
//                     response ==="convert with condition" ? true : <></>
//                     } */}

//                                 <Row >
//                                     <Col offset={5}>

//                                         <Dragger {...props} style={{ padding: 5 }}>
//                                             <p
//                                                 style={{ padding: 5 }}
//                                             >Please Upload PNG, JPEG or PDF within 5MB</p>
//                                             <div className='border'>
//                                                 <p className="ant-upload-drag-icon">
//                                                     <img src='file.png'>
//                                                     </img>
//                                                 </p>
//                                                 <p className="ant-upload-text">Select file</p>
//                                             </div>

//                                         </Dragger>
//                                     </Col>
//                                 </Row>

//                                 {/* <Row style={{ marginTop: 30, marginRight: 10 }}>
//                                     <TextField sx={{ minWidth: 480 }} noValidate id="fullWidth"
//                                         disabled={InsuranceNumber === !"" ? true : false}
//                                         disableAnimation
//                                         // onFocus={InsuranceNumber ? true : false}
//                                         defaultValue={InsuranceNumber}
//                                         value={InsuranceNumber}
//                                         onChange={(e) => setInsuranceNumber(e.target.value)}
//                                         label="Insurance Number" variant="outlined" />


//                                 </Row> */}
//                                 {/* <Row style={{ marginTop: 30 }}>
//                                     <TextField sx={{ minWidth: 480 }} noValidate id="fullWidth"
//                                         disabled={payerCode === !"" ? true : false}
//                                         disableAnimation
//                                         // onFocus={payerCode ? true : false}
//                                         // defaultValue={payerCode} 
//                                         value={payerCode}
//                                         onChange={(e) => setpayerCode(e.target.value)}
//                                         label="Payer Code" variant="outlined" /> */}


//                                 {/* </Row> */}
//                                 <Row style={{ marginTop: 30 }}>
//                                     <TextField sx={{ minWidth: 480 }} noValidate id="fullWidth"
//                                         disabled={InsuranceNumber === !"" ? true : false}
//                                         disableAnimation
//                                         // onFocus={InsuranceNumber ? true : false}
//                                         defaultValue={InsuranceNumber}
//                                         value={copayStatus}
//                                         onChange={(e) => setcopayStatus(e.target.value)}
//                                         label="Copay Status" variant="outlined" />


//                                 </Row>
//                                 {/* <Row style={{ marginTop: 30 }}>
//                                     <TextField sx={{ minWidth: 480 }} noValidate id="fullWidth"
//                                         disabled={InsuranceNumber === !"" ? true : false}
//                                         disableAnimation
//                                         // onFocus={InsuranceNumber ? true : false}
//                                         defaultValue={InsuranceNumber}
//                                         value={payerName}
//                                         onChange={(e) => setpayerName(e.target.value)}
//                                         label="Payer Name" variant="outlined" />


//                                 </Row> */}
//                                 <Row style={{ marginTop: 30 }}>
//                                     <TextField sx={{ minWidth: 480 }} noValidate id="fullWidth"
//                                         disabled={InsuranceNumber === !"" ? true : false}
//                                         disableAnimation
//                                         // onFocus={InsuranceNumber ? true : false}
//                                         defaultValue={InsuranceNumber}
//                                         value={balance}
//                                         onChange={(e) => setbalance(e.target.value)}
//                                         label="Balance" variant="outlined" />


//                                 </Row>
//                                 {/* <Row style={{ marginTop: 30 }}>
//                         <TextArea sx={{ minWidth: 480 }} noValidate id="fullWidth"
//                             disabled={InsuranceNumber === !"" ? true : false}
//                             disableAnimation
//                             // onFocus={InsuranceNumber ? true : false}
//                             defaultValue={InsuranceNumber}
//                             value={summary}
//                              onChange={(e) => setSummary(e.target.value)} 
//                             label="summary" variant="outlined" />


//                     </Row> */}

//                             </div>
//                         </Col>
//                 }

//             </Row>

//             {/* <Button className='savenxt' onClick={handleClick} variant="contained">YES</Button> */}




//             {/* footer */}
//             <footer className='footer-style'>

//                 <p style={{ color: "black", fontSize: "60" }}>© 2023 Copyright: www.com</p>

//                 <p style={{ color: "black", fontSize: "60" }}>Copyright @ 2023 </p>
// >>>>>>> 26caf72c32d5b27d0675bf99020d147a296bdb42
//                 {/* <img src="/images/khaled_cartoon.png" alt='avatar' style={{width:"50px"}}/>         */}
//             </footer>
//         </div>
//     )
// }

// export default InsuranceInfo
