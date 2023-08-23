import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from '@mui/material';
import { Edit, Delete, CloudDownload, ShareRounded } from '@mui/icons-material';
// import Sidebar from './Sidebar';
import Header from './Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { Input } from 'antd';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';
import { useNavigate } from 'react-router-dom';
// import { useStateValue } from '../Reducer/reducer';
// import { actionTypes } from '../Reducer/stateProvider';




const MTable = () => {
  
  const { Search } = Input;
 


  const [ tableData, setTableData ] = useState([]);
  const [filteredData,setFilteredData] =useState([])
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [deletedRows, setDeletedRows] = useState([]);
  const navigate=useNavigate()


  // const handleDownloadPdf = (rowData) => {
  //   setSelectedRowData(rowData);
  //   setShowPdfViewer(true);
  // };


 

  const tableSearch = (value) => {
    if (!value) {
      setFilteredData([]); 
    } else {
      const lowerCaseValue = value.toLowerCase();
      const filteredRows = tableData.filter((row) =>
      (row.first_name && row.first_name.toLowerCase().includes(lowerCaseValue)) ||
      (row.last_name && row.last_name.toLowerCase().includes(lowerCaseValue)) ||
      (row.userid && row.userid.toLowerCase().includes(lowerCaseValue))


      );
      setFilteredData(filteredRows);
    }
  };


  const handleDownloadPdf = async (rowData) => {
    try {
      const pdfBlob = await PdfDocument.generatePdfBlob(rowData);

      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = URL.createObjectURL(pdfBlob);
      a.download = `case_${rowData.userid}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);
    } catch (error) {
      console.error('Error generating or downloading PDF:', error);
    }
  };




  // const handleDelete = (id) => {
  //   const indexToDelete = tableData.findIndex((entry) => entry.id === id);

  //   if (indexToDelete !== -1) {
  //     const updatedTableData = [...tableData];
  //     updatedTableData.splice(indexToDelete, 1);
  //     setTableData(updatedTableData);
  //     setFilteredData(updatedTableData)
  //   }
  // };

  // const generatePDF = () => {
  //   const pdf = new jsPDF();
  //   const content = "ragav"; // Replace with your content
  //   pdf.text(content, 10, 10);
  //   return pdf;
  // };



  // const openEmailClient = () => {
  //   const pdf = generatePDF();
  //   const pdfDataUri = pdf.output('datauristring');
  //   const subject = "Subject of your email";
  //   const body = "Body of your email";
  //   const email = "ragavaprasanna.v@valuehealthsol.com";
  
  //   const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&attachment=${encodeURIComponent(pdfDataUri)}`;
    
  //   window.location.href = mailtoLink;
  //   return(
  //     <a href={`mailto:${email}`}> </a>
  //   )
  // };





  





  useEffect(() => {
    getData()
  },[])

    const getData=()=>{


    const tableUrl = 'https://7xw2w3ulbm7hufuiht6cuzexva0ahwhd.lambda-url.us-east-1.on.aws/';


    axios.get(tableUrl)
    .then((res) => {
      console.log(res, 'tableRes');

      setTableData(res.data);

    })
  }




  const handleDelete = (id) => {

    const deleteUrl = 'https://vsimn5cz2j6comovda6rhz22ju0czxzd.lambda-url.us-east-1.on.aws/';
  
    const requestBody = {
     userid: id
   };
   
  
    axios.post(deleteUrl, JSON.stringify(requestBody))
      .then((response) => {
          const updatedTableData = tableData.filter(e => e.userid !== id); 
          setTableData(updatedTableData);
          setFilteredData(updatedTableData);
          getData()
          console.log("rash",response)
        
      })
      .catch(e => {
        console.error("Error deleting:", e);
      });
  };
//   const handleEdit = (e) =>{
// dispatch({
//   type:actionTypes.SET_SOURCETEXT,
//   sourceText: e
// })

//     navigate(`/Pverifyy/${e.userid}` )
//   }

  return (
    <>
    <Header />
    <div className='historyMainDiv' style={{ padding: 30 }}>
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      style={{width:500, marginLeft:"100px",marginBottom:"20px"}}
      onSearch={tableSearch}
    />
   
     {/* <Button  onClick={openEmailClient}>Share via Email</Button> */}
    <TableContainer component={Paper}>
      <Table>
        <TableHead>  
          <TableRow>
          <TableCell>Case Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Drug Name</TableCell>
            {/* <TableCell>Last Name</TableCell> */}
            <TableCell>Insurance Name</TableCell>
            {/* <TableCell>Plan Name</TableCell> */}

           
            <TableCell>Subscriber Id</TableCell>
            
            <TableCell>Status</TableCell>
             <TableCell>Date and time</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {tableData.map((row) => (
            <TableRow 
            // key={row.id}
            >
              <TableCell>{row.drug_name}</TableCell>
              <TableCell>{row.insurance_name}</TableCell>
              <TableCell>{row.plan_name}</TableCell>
              <TableCell>{row.coverage_status}</TableCell>
              <TableCell>
                <IconButton aria-label="edit" color="primary">
                  <Edit />
                </IconButton>
                <IconButton aria-label="delete" color="secondary">
                  <Delete />
                </IconButton>
                <IconButton aria-label="download" color="default">
                  <CloudDownload />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}


<TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.userid}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
            <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.drug_name}</TableCell>
            <TableCell>{row.insurance_name}</TableCell>
            {/* <TableCell>{row.plan_name}</TableCell> */}
            <TableCell>{row.subscriber_id}</TableCell>
            <TableCell>{row.coverage_status}</TableCell>
            <TableCell>{row.create_date}</TableCell>
              <TableCell style={{display:"flex",flexDirection:"row"}}>
                <IconButton aria-label="edit" color="primary">
                  <Edit   onClick={(e) => navigate(`/Pverifyy/${row.userid}`, { state: { rowData: row } })}/>
                </IconButton>
                <IconButton aria-label="delete" color="secondary" >
                  <Delete  onClick={()=>handleDelete(row.userid)}/>
                </IconButton>
                <IconButton aria-label="download" color="default" >
                  <CloudDownload  onClick={() => handleDownloadPdf(row)}  />
                </IconButton>
                {showPdfViewer && selectedRowData && (
        <PDFDownloadLink
          document={<PdfDocument rowData={selectedRowData} />}
          fileName={`case_${selectedRowData.userid}.pdf`}
        >  
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      )}   

                <a href={`mailto:ragavaprasanna.v@valuehealthsol.com`}> 
         <IconButton aria-label="download" color="default" >
                  <ShareRounded />
                </IconButton>
                </a>
               
                
              </TableCell>
                </TableRow>
              ))
            ) : (
              tableData.map((row) => (
                <TableRow key={row.id}>
                    <TableCell>{row.userid}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
            <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.drug_name}</TableCell>
            <TableCell>{row.insurance_name}</TableCell>
            {/* <TableCell>{row.plan_name}</TableCell> */}
            
          
          
            <TableCell>{row.subscriber_id}</TableCell>
            <TableCell>{row.coverage_status}</TableCell>
            <TableCell>{row.create_date}</TableCell>
            <TableCell  style={{display:"flex",flexDirection:"row"}}>
              <IconButton aria-label="edit" color="primary">
                <Edit onClick={(e) => (row) } />
              </IconButton>
              <IconButton aria-label="delete" color="secondary" >
                <Delete onClick={()=>handleDelete(row.userid)}/>
              </IconButton>
              <IconButton aria-label="download" color="default" >
                <CloudDownload onClick={() => handleDownloadPdf(row)} />
              </IconButton>

             
               {showPdfViewer && selectedRowData && (
        <PDFDownloadLink
          document={<PdfDocument rowData={selectedRowData} />}
          fileName={`case_${selectedRowData.userid}.pdf`}
        >  
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      )}   

<a href={`mailto:ragavaprasanna.v@valuehealthsol.com`}> 
         <IconButton aria-label="download" color="default" >
                  <ShareRounded />
                </IconButton>
                </a>
       

                {/* <button onClick={openEmailClient}>Share via Email</button> */}
              
        
            </TableCell>
              </TableRow>
              ))
            )
            }
          </TableBody>
      </Table>
    </TableContainer>

   
    </div>
    
    
</>
  );
};

export default MTable;
