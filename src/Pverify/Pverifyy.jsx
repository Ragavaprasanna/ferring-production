// import { useState } from "react";
// import MenuIcon from '@mui/icons-material/Menu';
import { UploadOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { VerifiedOutlined } from "@mui/icons-material";
import { Avatar, Card, Col, Popover, Row } from "antd";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
// import { Col, Row } from 'antd';
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import LoadingButton from "@mui/lab/LoadingButton";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { json, useNavigate, useParams } from "react-router";
import axios from "axios";
import "./Pverify.css";
import TextArea from "antd/es/input/TextArea";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect } from "react";
import { Switch, Checkbox } from "antd";
import { red } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Header from "./Header";
// import Footer from './Footer';
// import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./Sidebar.css";
// import "./Pverify.css";
import Dragger from "antd/es/upload/Dragger";
import { Box, Grid, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import { VerifiedUserOutlined } from "@mui/icons-material";

const PureReact = () => {
  const [isOpened, setIsOpened] = useState(false);

  const [ArrayBuffer, setArrayBuffer] = useState();
  const [InsuranceType, setInsuranceType] = useState();
  const [InsuranceNumber, setInsuranceNumber] = useState("");
  const [payerCode, setpayerCode] = useState("");
  const [copayStatus, setcopayStatus] = useState("");
  const [payerName, setpayerName] = useState("");
  const [balance, setbalance] = useState("");
  const [ remainDeduct, setRemainDeduct ] = useState("");
  const [ percentDeduct, setPercentDeduct ] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [insuId, setinsuId] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [planname, setPlanName] = useState("");
  const [drugname, setDrugName] = useState("");
  const [payer, setPayer] = useState([]);
  const [cigna, setCigna] = useState([]);
  const [emblemhealth, setemblemhealth] = useState([]);
  const [anthembluecrossblueshield, setanthembluecrossblueshield] = useState(
    []
  );
  const [upmc, setupmc] = useState([]);
  const [geisinger, setgeisinger] = useState([]);
  const [amerihealth, setamerihealth] = useState([]);
  const [imperialhealth, setimperialhealth] = useState([]);
  const [hyperlinks, setlink] = useState([]);
  const [byalors, setbyalors] = useState([]);
  const [aetna, setaetna] = useState([]);
  const [ambetter, setambetter] = useState([]);
  const [unitedhealthcare, setunitedhealthcare] = useState([]);
  const [plan, setPlan] = useState([]);
  const [payerlist, setPayerlist] = useState([]);
  const [responseCovered, setresponseCovered] = useState("");
  const [color, setcolor] = useState("");
  const [state, setstate] = useState([]);
  const [icon1, seticon1] = useState(false);
  const [icon2, seticon2] = useState(false);
  const [icon3, seticon3] = useState(false);
   const [icon4,seticon4] = useState(false);
   const [icon5,seticon5] = useState(false);
  const [subscriberid, setSubscriberid] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [dob, setdob] = useState("");
  const [dragger, setdragger] = useState("Auto");
  const [newyork, setnewyork] = useState([]);
  const [newjersey, setjersey] = useState([]);
  const [pennsylvania, setpennsylvania] = useState([]);
  const [michigan, setmichigan] = useState([]);
  const [texas, settexas] = useState([]);
  const [illinois, setillinois] = useState([]);
  const [clover, setclover] = useState([]);
  const [wellcare, setwellcare] = useState([]);
  const [health, sethealth] = useState([]);
  const [oscar, setoscar] = useState([]);
  const [hap, sethap] = useState([]);
  // const [payers, setpayers] = useState("");
  // const [provider, setprovider] = useState("");

  console.log(health,"health")

  const UnitedHealthCare=[
 
      { label: "UnitedHealthcare Dual Complete Choice (PPO D-SNP)", id: 1 },
      { label: "United Healthcare Medicare Advantage Choice plan1(Regional PPO)", id: 2 },
      { label: "UnitedHealthcare Dual Complete (HMO-POS D-SNP)", id: 3 },
  ]

  const Aetnaopt=[
    { label: "Aetna Medicare Premier (HMO-POS)", id: 1 },
      { label: " Aetna Medicare Value (PPO)", id: 2 },
      { label: "Aetna Medicare Prime Plan (HMO)", id: 3 },
      { label: "Aetna Medicare Select Plan (HMO)", id: 4 },

  ]

  

  console.log(dob, "Dob");

  const [selectedDate, setSelectedDate] = useState(null);

  console.log(payer, "payer");

  const Navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("ID");
  console.log(id, "id");

  const success = () => {
    console.log('successmessagefunction')
message.open({
      type: "success",
      content: "Pverify Verified Successfully",
    });
//     messageApi.success("Logged in successfully")
  };
  const error = () => {
    console.log('errormessagefunction')
message.open({
      type: "error",
      content: "Your Subscriber Id Not Match For Selected Insurance Name",
    });
  }

  // const success = () => {
  //   messageApi.open({
  //     type: "success",
  //     content: "Pverify Verified Successfully",
  //   });
  // };
  // const error = () => {
  //   messageApi.open({
  //     type: "error",
  //     content: "failed to Update",
  //   });
  // };


  // useEffect(() => {
  //   let url5 =
  //     "https://xwuolpeyrsa2lrq7f6tvhbpd740rzgdy.lambda-url.us-east-1.on.aws/";

  //   axios.get(url5).then((res) => {
  //     console.log(res, "payerlist");
  //     setCigna(res.data.cigna.filter((e) => e != null));
  //     setaetna(res.data.aetna.filter((e) => e != null));
  //     setemblemhealth(res.data.emblemhealth.filter((e) => e != null));
  //     setanthembluecrossblueshield(
  //       res.data.anthembluecrossblueshield.filter((e) => e != null)
  //     );
  //     setunitedhealthcare(res.data.unitedhealthcare.filter((e) => e != null));
  //     console.log(cigna, "cigna");
  //   });
  // }, []);
  // console.log(cigna, "cigna");
  useEffect(() => {
    let url5 =
      "https://xwuolpeyrsa2lrq7f6tvhbpd740rzgdy.lambda-url.us-east-1.on.aws/";

    axios.get(url5).then((res) => {
      console.log(res, "payerlist");
      // const cigna_list = res.data.cigna_list.filter((e) => e !== '\\N');
      setCigna(res.data.cigna_list.filter((e) => e != '\\N'));
      setaetna(res.data.aetna_list.filter((e) => e != '\\N'));
      setemblemhealth(res.data.emblem_list.filter((e) => e != '\\N'));
      setanthembluecrossblueshield(
        res.data.blue_cross.filter((e) => e != '\\N')
      );
      setambetter(
        res.data.ambetter_list.filter((e) => e != '\\N')
      );
      setunitedhealthcare(
        res.data.united_healthcare_list.filter((e) => e != '\\N')
      );
      setupmc(
        res.data.upmc_list.filter((e) => e != '\\N')
      );
      setgeisinger(
        res.data.geisinger_list.filter((e) => e != '\\N')
      );
      setamerihealth(
        res.data.amerihealth_list.filter((e) => e != '\\N')
      );
      setimperialhealth(
        res.data.imperial_list.filter((e) => e != '\\N')
      );
      setbyalors(
        res.data.byalors_list.filter((e) => e != '\\N')
      );

      setclover(
        res.data.clover_health
      );
      setwellcare(
        res.data.wellcare
      );
      sethealth(
        res.data.health_first

      );
      setoscar(
        res.data.oscar_health


      );
      sethap(
        res.data.hap

      );
      // setunitedhealthcare(res.data.unitedhealthcare.filter((e) => e != null));
      // console.log(cigna, "cigna");
    });
  }, []);
  useEffect(() => {
    if (payer === "EmblemHealth") {
      setPlan(emblemhealth);
      console.log(emblemhealth, "ragav");
    }
    if (payer === "UnitedHealthCare") {
      setPlan(unitedhealthcare);
    }
    if (payer === "Cigna") {
      setPlan(cigna);
    }
    if (payer === "BluecrossBlueshield") {
      setPlan(anthembluecrossblueshield);
    }
    if (payer === "Aetna") {
      setPlan(aetna);
    }
    if (payer === "Ambetter") {
      setPlan(ambetter);
    }
    if (payer === "UPMChealth") {
      setPlan(upmc);
    }
    if (payer === "GeisingerHealth") {
      setPlan(geisinger);
    }
    if (payer === "Amerihealth") {
      setPlan(amerihealth);
    }
    if (payer === "ImperialHealth") {
      setPlan(imperialhealth);
    }
    if (payer === "BaylorScottandWhite") {
      setPlan(byalors);
    }

    if (payer === "CloverHealth") {
      setPlan(clover);
    }
    if (payer === "Wellcare") {
      setPlan(wellcare);
    }
    if (payer === "HealthFirst") {
      setPlan(health);
    }
    if (payer === "OscarHealth") {
      setPlan(oscar);
    }
    if (payer === "HAP") {
      setPlan(hap);
    }
  }, [payer]);

  useEffect(() => {
    let url8 =
      "https://xq6ayj6uipoz5gppwuahrfle7y0lkepy.lambda-url.us-east-1.on.aws/";

    axios.get(url8).then((res) => {
      console.log(res, "statelist");
      setnewyork(res.data.new_york);
      setjersey(res.data.new_jersey);
      setpennsylvania(res.data.pennsylvania);
      setmichigan(
        res.data.michigan
      );
      settexas(
        res.data.texas
      );
      setillinois(
        res.data.illinois
      );
      
      // setunitedhealthcare(res.data.unitedhealthcare.filter((e) => e != null));
      // console.log(cigna, "cigna");
    });
  }, []);

  useEffect(() => {
    if (state === "New York") {
      setPayerlist(newyork);
      console.log(newyork, "ragav");
    }
    if (state === "New Jersey") {
      setPayerlist(newjersey);
    }
    if (state === "Pennsylvania") {
      setPayerlist(pennsylvania);
    }
    if (state === "Michigan") {
      setPayerlist(michigan);
    }
    if (state === "Texas") {
      setPayerlist(texas);
    }
    if (state === "Illinois") {
      setPayerlist(illinois);
    }
    
  }, [state]);
  console.log(payer,"99999")

  const handleClick = (e) => {
    setSearchLoading(true);
   
    console.log(e, "searchVal");
    if (e == "Submit") {

      let url2 =
        "https://oxk2aiz3qvwftkvbxla67vlsre0iljbr.lambda-url.us-east-1.on.aws/";
        let planName = planname;
      let DrugName = drugname;
      let payer1  = payer
      let body = {
        // "Id": my_list[0],
        PlanName: planName,
        PayerName: payer1,
        DrugName: "EUFLEXXA",
        State :state
      };

      axios.post(url2, JSON.stringify(body)).then((res) => {
        console.log(res);
        let response = res.data.Result.response.Response;
        console.log(response, "covert");
        setresponseCovered(res.data.Result.response.Response);
        let description = res.data.Result.response.Description;
         setlink(res.data.Result.response.link[0]);
        console.log(hyperlinks, "hyperlinks");

        setSummary(description);
        console.log("before",payer)

       
        if(response=="Covered"||"Covered with Condition."||"Not Covered"||"Detail Not available"){
           let enblem ;
          console.log(response,"response",payer)

          if(payer =="EmblemHealth"){
            setpayerCode(enblem)
            enblem="000101" 

          }
          if(payer =="UnitedHealthCare"){
            setpayerCode(enblem)
            enblem="00192"


          }
          console.log(enblem,"called",payer)
          
          
          
          
 
      

          let url4 =
            "https://tedwotzebqf5cp5vus63hkdkum0gegmb.lambda-url.us-east-1.on.aws/";

          let body4 = {
            // "Id": my_list[0],
    
            firstName: firstname,
            dob: dob,
            lastName: lastname,
            subscriberID: subscriberid,
            payerCode:enblem,
            payerName1:payer,
            // provider_lastname:provider
          };
    
          
          
    
          axios
            .post(url4, JSON.stringify(body4))
            .then((res) => {
              console.log(res, "ragav");
              let copay = res.data.CopayStatus;
                        console.log(copay, "covert");
                        setcopayStatus(res.data.CopayStatus);
                        let IndividualOOP_InNet = res.data.IndividualOOP_InNet;
                        console.log(IndividualOOP_InNet, "res");
              
                        setbalance( res.data.IndividualOOP_InNet);
                        let IndividualOOPRemainingInNet = res.data.IndividualOOPRemainingInNet
                        console.log(IndividualOOPRemainingInNet,"IndividualOOPRemainingInNet")
                        setRemainDeduct( res.data.IndividualOOPRemainingInNet);
              let Coinsurancerelatedinformation = res.data.Coinsurancerelatedinformation
              setPercentDeduct(res.data.Coinsurancerelatedinformation)
              console.log(Coinsurancerelatedinformation,"Coinsurancerelatedinformation")

              if (res.data.status === "ok" ) {
                success();
                // alert("Login Successfull")
               

            console.log(response)
            }
            else {
                Navigate("/pverifyy");
                error()

                // message.error("Invalid username or OTP");
            }

        }).catch((e)=>{
            // error()
console.log("error",e)
            })
          
            .finally(() => {
              setSearchLoading(false);
            });
          }
      });
      
      
    }
  };

  useEffect(() => {
    if (responseCovered == "Covered") {
      // setcolor("red")
      seticon1(true);
      seticon2(false);
      seticon3(false);
      seticon4(false)
      seticon5(false)
    } else if (responseCovered == "Covered with Conditions") {
      seticon1(false);
      seticon2(true);
      seticon3(false);
      seticon4(false)
      seticon5(false)
    } else if (responseCovered == "Covered with Condition") {
      seticon1(false);
      seticon2(false);
      seticon3(false);
      seticon4(true)
      seticon5(false)
    } else if (responseCovered == "Not Covered") {
      seticon1(false);
      seticon2(false);
      seticon3(true);
      seticon4(false)
      seticon5(false)
    } else {
      seticon1(false);
      seticon2(false);
      seticon3(false);
      seticon4(false)
      seticon5(true)

    }
  }, [responseCovered]);
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
    setLoading(true);
    if (id) {
      const my_list = id.split(",");
      console.log(my_list, "my_list");
      let UpdateUrl = `https://3a5zllfhz25x3w3npn4bmxcx4a0aqxml.lambda-url.us-east-1.on.aws/`;

      let body = {
        // "Id": my_list[0],
        Insurance__c: InsuranceType,
        Insurance_company_name__c: "001Dn00000PuD5RIAV",
        Policyholder_same_as_the_patient__c: "yes",
        Policy_ID__c: InsuranceNumber,
        Lead__c: my_list[1],
      };
      axios.post(UpdateUrl, JSON.stringify(body)).then((res) => {
        setLoading(false);
        console.log(res.data.status, "responsee");
        if (res.data.status === "Ok") {
          //   Navigate("/InsuranceInfo ")
          success();
        } else {
          error();
        }
      });
    } else {
      let FirstName = localStorage.getItem("firstName");
      let LastName = localStorage.getItem("lastName");
      let PhoneNumber = localStorage.getItem("PhoneNumber");
      let MOC = localStorage.getItem("MOC");
      let Dob = localStorage.getItem("Dob");
      let Email = localStorage.getItem("Email");
      let Street = localStorage.getItem("Street");
      let City = localStorage.getItem("City");
      let State = localStorage.getItem("State");
      let PinCode = localStorage.getItem("PinCode");
      let Country = localStorage.getItem("Country");
      let Doc = localStorage.getItem("Doc");

      let IMAGEURL = `https://56ozi7f5v4gcnefxk34263duhy0mgqql.lambda-url.us-east-1.on.aws/`;
      axios
        .post(
          IMAGEURL,
          JSON.stringify({
            imagename: insuId,
          })
        )
        .then((res) => {
          console.log(res, "resposnsee");
          const imagee = res.data;
          setImageUrl(imagee);
          console.log(imagee, "imagee");

          const URL = `https://iafkrrf5icamvacwr62l56famm0icgvu.lambda-url.us-east-1.on.aws/`;

          let requestData = {
            LastName: "davidson",
            Status: "New - Not Contacted",
            MobilePhone: "9033630140",
            Email: "ragavaprasanna.v@valuehealthsol.com",
            FirstName: "david",
            HealthCloudGA__BirthDate__c: "1987-11-11",
            Street: "KPM",
            Country: "United States",
            PostalCode: "638183",
            City: "Namakkal",
            State: "Florida",
            Care_Program__c: "0ZeDn000000ThDwKAK",
            LeadSource: "",
            Registered_By__c: "Patient",

            Is_the_Patient_Insured__c: "",
            HealthCloudGA__Gender__c: "",
            Preferred_Method_of_Contact__c: "",
          };
          const reqbody = JSON.stringify(requestData);
          let requestHeaders = {
            "Content-Type": "application/json",
          };
          axios.post(URL, JSON.stringify(requestData)).then((res) => {
            console.log(res);
            setLoading(false);
            const Token = res.data.id;
            if (res.data.status == "ok" || "ERROR") {
              Navigate("/NewUser");
              success();
              let CONSENT_URL = `https://r7arhgcvxmhmsioku52d6fz7ta0edaje.lambda-url.us-east-1.on.aws/`;
              let Body = {
                Consent_Name__c: "0cIDn000000tUOoMAM",
                Date_Of_The_Consent__c: Doc,
                Lead__c: Token,
              };
              axios.post(CONSENT_URL, JSON.stringify(Body)).then((res) => {
                if (res.data.status == "ok" || "ERROR") {
                  success();
                } else {
                  error();
                }
              });
            }
            if (res.data.status == "ERROR") {
              console.log("eewww");
              error();
            }
          });
        });
    }
  };
  // }

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      setLoading(true);
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
        // setArrayBuffer(reader.result)
        console.log(reader.result, "readerResult");
        let S3_URL = `https://p44t3bnlhrchrz67hg33wkpawy0pqmel.lambda-url.us-east-1.on.aws/`;
        axios
          .post(
            S3_URL,
            JSON.stringify({
              file: reader.result.split("base64,")[1],
            })
          )
          .then((res) => {
            console.log(res.data.uploadResult.key, "InsuranceURL");
            const imagegeturl = res.data.uploadResult.key;
            const insuid = imagegeturl.split("/")[1];
            console.log(insuid, "idforinsurance");
            setinsuId(insuid);

            axios
              .get(
                `https://6kia4hf4gqt277xfeihcw3a7je0xnuxy.lambda-url.us-east-1.on.aws/`
              )
              .then((res) => {
                setLoading(false);
                console.log(res.data, "insurancceeee");
                if (res.data.Member_id) {
                  setSubscriberid(res.data.Member_id);
                }
                if (res.data.Member_id) {
                  setSubscriberid(res.data.Member_ID);
                }
                if (res.data.Health_ID) {
                  setSubscriberid(res.data.Health_ID);
                }
                if (res.data.POLICY_NUMBER) {
                  setSubscriberid(res.data.POLICY_NUMBER);
                }
                if (res.data.MEDICAL_CLAIM_NUMBER) {
                  setSubscriberid(res.data.MEDICAL_CLAIM_NUMBER);
                }
                if (res.data.Member_ID) {
                  setSubscriberid(res.data.Member_ID);
                }
                if (res.data.UnitedHealthcare_Group_Number) {
                  setSubscriberid(res.data.UnitedHealthcare_Group_Number);
                }
                if (res.data.ID_) {
                  setSubscriberid(res.data.ID_);
                }
                if (res.data.Medical_Record_No) {
                  setSubscriberid(res.data.Medical_Record_No);
                }
                if (res.data.Subscriber_Policy_ID_) {
                  setSubscriberid(res.data.Subscriber_Policy_ID_);
                }
                if (res.data.ID_NUMBER) {
                  setSubscriberid(res.data.ID_NUMBER);
                }
                setdragger("Mannual");
                // if (res.data.Member_ID:) {
                //     setInsuranceNumber(res.data.Member_ID:)

                // }

//                 const insurerObject = res.data.extracted_json[0].find(item => item.insurer_name);
//                 const insurerName = insurerObject ? insurerObject.insurer_name : '';

// // Find and extract Member and Member ID
//                     let member = '';
//                     let memberID = '';
//               for (const item of res.data.extracted_json) {
//               if (item.startsWith("Member:")) {
//               member = item.replace("Member:", "").trim();
//             } else if (item.startsWith("Member ID:")) {
//             memberID = item.replace("Member ID:", "").trim();
//              }
//             }

// console.log("Insurer Name:", insurerName);
// console.log("Member:", member);
// console.log("Member ID:", memberID);
                   const insur = res.data.insurer_name
                   console.log(insur,"insur")
                   if(res.data.insurer_name=="United Healthcare"){
                   setPayer("UnitedHealthCare")
                   }
                const fullName = res.data.Member;
                if (fullName) {
                  const nameParts = fullName.split(" ");

                  setfirstname(nameParts[0]);
                  setlastname(nameParts.slice(1).join(" "));
                  // setpayerName(insurerName)
                }

                console.log(res.data.Member, "fullname");
              });
            // console.log(,"getRes")
          });
      };
      reader.onerror = (error) => reject(error);

      if (ArrayBuffer) {
        console.log(reader.result, "entered");
      }
    });
  };
  

  const props = {
    name: "file",
    multiple: true,
    onChange(info) {
      let file = info.file;
      let array_length = info.fileList.length;
      console.log(array_length, "array_length");
      if (info.file.status === "error") {
        console.log(
          getBase64(info.fileList[array_length - 1].originFileObj),
          "base64"
        );
      }
      let base64image = getBase64(
        info.fileList[array_length - 1].originFileObj
      );
      let base64Image = getBase64(file);
      console.log(file, "object");

      console.log(file, "object");
    },

    onDrop(e) {},
  };

  console.log({ payerCode });

  const options1 = [
    { label: "EmblemHealth", id: 1 },
    { label: "UnitedHealthCare", id: 2 },
    { label: "Cigna", id: 3 },
    { label: "BluecrossBlueshield", id: 4 },
    { label: "Aetna", id: 5 },
    { label: "Ambetter", id: 6 },
    { label: "UPMChealth", id: 7 },
    { label: "GeisingerHealth", id: 8 },
    { label: "Amerihealth", id: 9 },
    { label: "ImperialHealth", id: 10 },
    { label: "BaylorScottandWhite", id: 11 },
    { label: "CloverHealth", id: 12 },
    { label: "Wellcare", id: 13 },
    { label: "HealthFirst", id: 14 },
    { label: "OscarHealth", id: 15 },
    { label: "HAP", id: 16 },
  ];
  const options2 = [
    { label: "EmblemHealth Platinum", id: 1 },
    { label: "EmblemHealth Gold", id: 2 },
    { label: "EmblemHealth Silver", id: 3 },
    { label: "EmblemHealth Bronze", id: 4 },
    { label: "EmblemHealth Basic (Catastrophic)", id: 5 },
    { label: "Aetna Medicare Primier (HMO-POS)", id: 6 },
    { label: "Aetna Medicare Value (PPO)", id: 7 },
    { label: "Aetna Medicare Premier Plus (PPO)", id: 8 },
    { label: "Aetna Medicare Eagle (PPO)", id: 9 },
    { label: "SilverScript SmartSaver (PDP)", id: 10 },
    { label: "SilverScript Plus (PDP)", id: 11 },
    { label: "Aetna Medicare Prime Plan (HMO)", id: 12 },
    { label: "Aetna Medicare Select Plan (HMO)", id: 13 },
    { label: "Aetna Medicare Plus Plan (HMO)", id: 14 },
    { label: "Aetna Medicare Choice Plan (PPO)", id: 15 },
    { label: "Aetna Medicare Elite Plan 3 (PPO)", id: 16 },
    { label: "Aetna Medicare Assure Plan (HMO D-SNP)", id: 17 },
    { label: "Aetna Medicare Essential Plan (PPO)", id: 18 },
    { label: "Aetna Medicare Eagle Plus Plan (PPO)", id: 19 },
    { label: "Aetna Medicare Elite (PPO)", id: 20 },
    { label: "Aetna Medicare Prime (HMO-POS)", id: 21 },
  ];

  const states = [
    { label: "New York", id: 1 },
    { label: "New Jersey", id: 2 },
    { label: "Pennsylvania", id: 3 },
    { label: "Michigan", id: 4 },
    { label: "Texas", id: 5 },
    { label: "Illinois", id: 6 },
  ];

  const Method = [
    { label: "Pverify", id: 1 },
    { label: "change healthcare", id: 2 },
    { label: "Office Ally", id: 3 },
    { label: "Realmed", id: 4 },
    { label: "UHIN", id: 5 },
    { label: "TriZetto", id: 6 },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const content = (
    <>
      <div className="accountPopover">
        <h3>Account</h3>
        <h3 onClick={() => navigate("/")}>Logout</h3>
      </div>
      {/* <div>Logout</div> */}
    </>
  );
  const onChange = (e) => {
    console.log(`switch to ${e.target.value}`);
    setdragger(e.target.value);
  };
  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* <aside className={`${isOpened ? "opened" : ""} drawer`}></aside> */}
        <div className="main">
          <div>
            <Grid
              container
              className="form"
              spacing={2}
              style={{ margin: "auto", justifyContent: "center" }}
            >
              {/* Left Side */}
              <Grid item xs={12} md={4} lg={4}>
                <FormLabel id="demo-radio-buttons-group-label" style={{}}>
                  Insurance Info
                </FormLabel>
                {/* <Checkbox onChange={onChange}>Enter Manually</Checkbox> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Auto"
                  name="radio-buttons-group"
                  onChange={onChange}
                >
                  <div style={{display:"flex"}}>
                  <FormControlLabel
                    value="Auto"
                    control={<Radio />}
                    label="Auto"
                  />
                  <FormControlLabel
                    value="Mannual"
                    control={<Radio />}
                    label="Manual"
                  />
                  </div>
                </RadioGroup>
                {dragger === "Auto" ? (
                  <>
                    <Row className="shield-div" style={{}}>
                      <Col>
                        <Dragger {...props} style={{ margin: 0 }}>
                          <p style={{ margin: 0 }}>
                            Please Upload PNG, JPEG or PDF within 5MB
                          </p>
                          <div className="border">
                            <p className="ant-upload-drag-icon">
                              <Player
                                style={{ width: "42%" }}
                                src="https://lottie.host/b48fc081-a04a-4101-a78f-0b3d709fe41b/Ryh4hpyN6Q.json"
                                className="player"
                                loop
                                autoplay
                              />
                            </p>
                            <p className="ant-upload-text">Select file</p>
                          </div>
                        </Dragger>
                      </Col>
                    </Row>
                  </>
                ) : (
                  <>
                    <Box sx={{}}>
                      <TextField
                        sx={{ minWidth: 400 }}
                        fullWidth
                        label="Subscriber Id"
                        variant="outlined"
                        value={subscriberid}
                        onChange={(e) => setSubscriberid(e.target.value)}
                      />
                    </Box>
                    <Box
                      sx={{ mt: 2, minWidth: 400 }}
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <TextField
                        onChange={(e) => setfirstname(e.target.value)}
                        sx={{ width: "100%" }}
                        value={firstname}
                        label=" First Name"
                        variant="outlined"
                      />
                      <TextField
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                        sx={{ width: "100%", marginLeft: "10px" }}
                        fullWidth
                        label=" Last Name"
                        variant="outlined"
                      />
                    </Box>
                    <Box className="pverifyDatepicker" sx={{ mt: 1 }}>
                      {/* <TextField  sx={{ minWidth: 400 }} fullWidth label="DOB" variant="outlined" /> */}

                      <LocalizationProvider
                        sx={{ minWidth: 412 }}
                        dateAdapter={AdapterDayjs}
                      >
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            disableFuture
                            inputFormat="MM/DD/YYYY"
                            onChange={(newValue) =>
                              setdob(newValue.format("MM/DD/YYYY"))
                            }
                            label="DOB"
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Box>
                  </>
                )}

                {/* </Stack> */}
                
              </Grid>

              {/* Right Side */}
              <Grid item xs={4} style={{ marginTop: 5 }}>
                {/* <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label" style={{}}>
                    Drug Info
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="EUFLEXXA"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="EUFLEXXA"
                      control={<Radio />}
                      label="EUFLEXXA"
                    />
                  </RadioGroup>
                </FormControl> */}
                <FormControl sx={{ mt: 8 }}>
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

                <FormControl sx={{ mt: 2 }}>
                  <InputLabel id="demo-simple-select-label"></InputLabel>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={payerlist}
                
                     value={payer} 
                    sx={{ width: 400 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Insurance Name"
                        onSelect={(e) => setPayer(e.target.value)}
                      />
                    )}
                  />
                </FormControl>
                <FormControl sx={{ mt: 2 }}>
                  <InputLabel id="demo-simple-select-label"></InputLabel>

                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={plan}
                    sx={{ width: 400 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Plan Type"
                        onSelect={(e) => setPlanName(e.target.value)}
                      />
                    )}
                  />
                </FormControl>
                <FormControl sx={{ mt: 2 }}>
                  <InputLabel id="demo-simple-select-label"></InputLabel>

                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Method}
                    sx={{ width: 400 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="eBV Methods"
                        onSelect={(e) => setstate(e.target.value)}
                      />
                    )}
                  />
                </FormControl>
                {/* </Stack> */}
               
                <div>
                  
                </div>
              </Grid>
            </Grid>
            <div className="savenxtdiv">
            <LoadingButton
                  // disabled={response === !"" ? true : false}
                  className="savenxt"
                  loadingPosition="start"
                  variant="contained"
                  onClick={() => handleClick("Submit")}
                  loading={searchLoading}
                  style={{
                    marginTop: "5%",
                    marginLeft: "-5px",
                    // marginBottom: "50px",
                  }}
                >
                  Submit eBV Request
                </LoadingButton>
            </div>
            <Row>
                <Col offset={4} span={8}>
            {summary != "" ? (
                <>
                <div style={{ marginLeft: "18px" }}>
                <h3>Coverage Details</h3>
                <div style={{ marginTop: 25 }}>
                  <Row span={10}>
                    {icon1 ? (
                      <span style={{ marginBottom: "9px" }}>
                        <CheckIcon style={{ gap: "30px", color: "green", position: "relative",top: "7px" }} />
                        <span style={{ marginLeft: "8px", color: "black" }}>
                          Covered{" "}
                        </span>
                      </span>
                    ) : (
                      ""
                    )}
                    {icon2 ? (
                      <span  style={{ marginBottom: "9px" }}>
                        <WarningAmberIcon
                          style={{ gap: "30px", color: "orange", position: "relative",top: "7px" }}
                        />
                        <span style={{ marginLeft: "8px", color: "black" }}>
                          Covered with Conditions
                        </span>
                      </span>
                    ) : (
                      ""
                    )}
                    {icon4 ? (
                      <span  style={{ marginBottom: "9px" }}>
                        <WarningAmberIcon
                          style={{ gap: "30px", color: "orange", position: "relative",top: "7px" }}
                        />
                        <span style={{ marginLeft: "8px", color: "black" }}>
                          Covered with Condition
                        </span>
                      </span>
                    ) : (
                      ""
                    )}

                    {icon3 ? (
                      <span  style={{ marginBottom: "9px" }}>
                        <CloseIcon
                          style={{ gap: "30px", color: "red", top: "10px", position: "relative",top: "7px" }}
                        />
                        <span style={{ marginLeft: "8px", color: "black" }}>
                          {" "}
                          Not Covered
                        </span>
                      </span>
                    ) : (
                      ""
                    )}
                    {icon5 ? (
                      <span  style={{ marginBottom: "9px" }}>
                        <DoNotDisturbIcon
                          style={{ gap: "30px", color: "red", top: "10px", position: "relative",top: "7px" }}
                        />
                        <span style={{ marginLeft: "8px", color: "black" }}>
                          {" "}
                          Detail Not available
                        </span>
                      </span>
                    ) : (
                      ""
                    )}
                  </Row>
                  

                  <div></div>
                </div>
                    <Card className="pverifyCard">
                    <div>
        <div>
          {summary} {/* Display the summary text */}
        </div>
        <div style={{width:"90%",overflow:"hidden"}}>
        <a href={hyperlinks} target="_blank" rel="">
          {hyperlinks}
        </a>
        </div>
      </div>
                        
                    </Card>
                    </div>
                    </>
                  ) : (
                    <></>
                  )}
                  </Col>
                  <Col span={8}>
                  
                  <div>
                    {responseCovered == "" ? (
                      <></>
                    ) : (

                      <Col span={24}>
                        <div style={{ marginTop:"27%", marginLeft: "25px" }} className="leftdiv">
                          {/* <Row className="induranceInfo">
                            <h3> Insurance Info </h3>
                          </Row> */}

                          <Card className="pverifyCard">
                            <p className="descriptionPara">Copay Amount <span className="descriptionSpan">{copayStatus}</span></p>
                            <p className="descriptionPara">Individual Deductible <span className="descriptionSpan">{balance}</span></p>
                            <p className="descriptionPara">Remaining Deductible <span className="descriptionSpan">{remainDeduct}</span></p>
                            <p className="descriptionPara">Coinsurance <span className="descriptionSpan">{percentDeduct}</span></p>
                          </Card>

                        </div>
                      </Col>
                    )}
                  </div>
                  </Col>
                  </Row>

          </div>
        </div>
      </div>

      {/* bottom div  */}
      <div className="bottom" style={{ marginTop: "20px" }}></div>
      
    </div>
  );
};

export default PureReact;
