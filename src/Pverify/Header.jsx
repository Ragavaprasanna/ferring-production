import { HistoryOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React from 'react';
import "./Header.css"
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate= useNavigate();
    const handleClick=()=>{
        navigate("/table")
    }

    const handleHistory = () => {
       const location = window.location.href;

       const slicedLocation = location.split('/')[3];

       if(slicedLocation == 'Pverifyy'){
        window.location.reload();
       }
       else{
        navigate('/Pverifyy')
       }
    }

    return (
        <>
      <div>
            <div className="Hcontainer">
                <Row>
                    <Col span={7} className='leftPatternCol' >
                    
                <div className="leftContainer">
                
                     {/* <h1 >MEDICAL EBV</h1>
                     <p>Patient support program</p> */}
                     <div>
                      <img  className = 'headerlogo'  src = 'https://master-3.corporate.ferring.tech/wp-content/uploads/sites/16/2021/01/Ferring-logo.png'/>
                      </div>

                      </div>


                    </Col>
                    <Col span={8}>
                    
                    <div>
                          <h2 className='medi' >MEDICAL eBV FOR EUFLEXXA</h2>
                     <p className='medip'>Patient support program</p> 
                      </div></Col>
                    
                  
                    <Col offset={4} span={5} className='rightPatterCol'>
                    
                    <div className='RightPattern'>
                        <Row className='rightPatternRow'>
                            <Col span={8}>
                        <div className='plus' onClick={handleHistory}>
                           
                        <PlusCircleOutlined  className='headerIcon' style={{fontSize:"26px"}} />
                         <p >New</p>
                               
                        </div >
                            
                            </Col>
                            <Col span={8}>
                            
                        <div className='plus'  onClick={handleClick}>
                          
                            <HistoryOutlined className='headerIcon' style={{fontSize:"26px"}}/>
                                <p >History</p>
                          
                        </div>
                            </Col>
                            <Col span={8} className='Logout'>
                          <div onClick={() => navigate('/')} className='logoutmini'>
                            
                                  Logout
                          
                          </div>
                     
                            
                            </Col>

                        </Row>

                    </div>
                    </Col>



                    </Row>
                </div>


                </div>
                
                             </>

        

    
    )
}

export default Header