import React,{useState,useEffect} from 'react'
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
import { useNavigate,useParams } from 'react-router';
// import { useParams } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { Modal,message } from 'antd';
import './Authform.css'
import axios from 'axios';

const Authform = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [Signature, setSignature] = useState("")
    const [trimmedDataURL, settrimmedDataURL] = useState()
    const firstname = JSON.parse(localStorage.getItem('firstName'));
    const lastname = JSON.parse(localStorage.getItem('lastName'));
    const [FirstName, setFirstName] = useState("Nithin")
    const [LastName, setLastName] = useState("Kumar")
    const [messageApi, contextHolder] = message.useMessage()
    const [Doc, setDoc] = useState("")
    const[status,setStatus] =useState("")
    const params =useParams()
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('ID');
    console.log(id,"id")
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
      trim()
      console.log(Signature,"signature")
      clear()
      
    };
    const error = () => {
      messageApi.open({
        type: 'error',
        content: 'failed to Update',
      });
    };
    const sigPad = {}
    const clear = () => {
     Signature.clear()
    }
    const trim =()=> {
      settrimmedDataURL(
         Signature.getTrimmedCanvas().toDataURL('image/png')
       
      )
    } 
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    
    const Navigate = useNavigate();
    const fileList = [
  
    ];
    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Consent updated sucessfully',
      });
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    // useEffect(() => {
    //   axios
    //   .post(`https://r3wtppo2yb4mt7pzhs55h2bbsy0whuae.lambda-url.us-east-1.on.aws/`,
    //   JSON.stringify({

    //         "Name":"Ragav",
    //         "ConsentGiverId":"001Dn00000OuQJuIAN",
    //         "AuthorizationFormTextId":"0cNDn000000LypMMAS"
            
    //         }))
    //         .then((res) => {
    //             console.log(res,"resposne")
    //         })
      
    // }, [])
   
 
    const handleClick = () => {
      let Token =JSON.parse(localStorage.getItem('Lead_id'))
      // let Token = "00QDn000006yRQTMA2" 
      console.log( typeof Token,Token,"Token") 
      var date =new Date(Doc) ;
      date.setDate(date.getDate() + 365);
      var dateFormat = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
      console.log(dateFormat,"datee")
  
  
  let AUTH_URL=`https://r3wtppo2yb4mt7pzhs55h2bbsy0whuae.lambda-url.us-east-1.on.aws/`
  let Body={
    "Id":id,
    "Name":FirstName+ LastName,
    "ConsentGiverId":"0WwDn000000t0GFKAY",
    "AuthorizationFormTextId":"0cNDn000000LypHMAS",
    "Due_Date__c":dateFormat,
    "Status__c":"Active"
    }
  axios.
  post(AUTH_URL,JSON.stringify(Body))
  .then((res) => {
    if (res.data.status === "Ok"){
    //   Navigate("/InsuranceInfo ")
      success()
    }else{
      error()
    }
  })
  
    }
    return (
      <div className='Concent-main'>
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
          <p className='details'>
            Together in your Treatment - Patient Re-consent          </p>
        </Row>
        <div className='form-Div' >
          <Row>
            <Col span={11}>
  
              <Row span={8}>
  
  
                <Col span={12}>
                  
                  <TextField sx={{ m: 1, minWidth: 250 }}id="fullWidth" disabled disableAnimation value={FirstName} onChange={(e) => setFirstName(e.target.value)}  label="First Name" variant="outlined" />
  
                </Col>
                <Col span={12}>
                  <TextField sx={{ m: 1, minWidth: 250 }} value={LastName} disabled disableAnimation onChange={(e) => setLastName(e.target.value)} id="fullWidth" label="Last Name" variant="outlined" />
                </Col>
              </Row>
              <Row span={8}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
  
                  <DatePicker sx={{ minWidth: 540, m: 1 }}
                    className='datepicker'
                    disableFuture
                    onChange={(newValue) =>setDoc(newValue.format("YYYY-MM-DD")) }
                    label="Date of Consent" />
  
                </LocalizationProvider>
              </Row>
              {/* <Row>
                <TextField sx={{ m: 1, minWidth: 520 }} id="fullWidth" label="Patient Caregiver" variant="outlined" />
              </Row>
              <Row>
                <TextField sx={{ m: 1, minWidth: 520 }} id="fullWidth" label="Caregiver" variant="outlined" />
              </Row> */}
              <Row>
                <p className='desc'>
                  Description
                </p>
              </Row>
              <Row>
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="I Authorize"
                  labelPlacement="end"
                />
              </Row>
              <Row>
  
              </Row>
            </Col>
            <Col span={8} offset={2}>
  
  
              <Row >
                <FormControl sx={{ minWidth: 520, m: 1 }}>
                  <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value={MOC}
                    defaultValue={"Active"}
                    label="Type"
                  onChange={(e) => setStatus(e.target.value)}
                  disabled
                  // onKeyPress={}
                  // input={<BootstrapInput />}
                  >
  
                    <MenuItem  value={"Active"}>Reconsent</MenuItem>
                    {/* <MenuItem disabled value={"Inactive"}>InActive</MenuItem> */}
                    {/* <MenuItem value={"Email"}>Email</MenuItem> */}
                  </Select>
                </FormControl>
              </Row>
             
  
            </Col>
  
            <Row>
              <p style={{padding: 5}}>
                By signing below, I am enrolling in the  Patient Support program. I authorize Value Health and its affiliates, business partners, vendors and other agents to provide me with services for which I am eligible under this program. Such services may include medication and adherence communications and support, medication dispensing support, insurance coverage and financial assistance support, disease and medication education, and other support services offered now or in the future. As part of theprogram’s offerings, I agree to my enrollment in the assistance program if I am eligible.
              </p>
  
              <div className='Signature'>
                <h1 >
                  Signature
                </h1>
              </div>
            </Row>
  
  
  
            <Col offset={10} >
  
  
  
              <div className='Signature-btn'>
  
  
  
  
                
                 
                 <div className='sign-img'>
  
                  {trimmedDataURL
          ? <img  alt='signature'
            src={trimmedDataURL} />
          : null}
                 </div>
               <Button variant='outlined' onClick={showModal} icon={<PlusOutlined />}>Add signature</Button>
  
  
  
              </div>
            </Col>
  
  
          </Row>
  
        </div>
        <Button className='savenxt' onClick={handleClick} variant="contained">Submit</Button>
  
  {/* <img className='sponsorimage' src='Group 60.png'>
  </img> */}
  <Modal title="Add Signature" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <div className='Signature-pad'>
  <SignatureCanvas penColor='black'
      canvasProps={{width: 465, height: 200, className: 'sigCanvas'}}
      ref={(e) => {setSignature(e)}} 
       />
       
  
    </div>
        </Modal>
      </div>
    )
  }

export default Authform