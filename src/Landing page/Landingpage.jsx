import React from 'react'
import './Landingpage.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Col, Row } from 'antd';
import { RobotOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { useNavigate } from 'react-router';


const Landingpage = () => {
    const Navigate = useNavigate();


    
  const  handleClick = (e) => {
    if(e === "new"){
         Navigate("./NewUser")
    }else{
        Navigate("./ExistingUser")
    }
    }
    return (

        <div className='Landingpage-main'>
            {/* Row1  */}
            <Row style={{ marginBottom: 118}}>
                <Col span={3}>
                <img className=' rotate'  alt='' src='medbox.png' />
                </Col>
                <Col span={3}>
                <img className='image02 rotate'  alt='' src='Property 1=Frame 13.png' />
                </Col>
                <Col span={3}>
                <img className='image03 rotate'  alt='' src='Property 1=Frame 17.png' />
                </Col >
                <Col span={3}>
                <img className='image04 rotate'  alt='' src='stethoscope.png' />
                </Col>
                <Col span={3}>
                <img className='image05 rotate'  alt='' src='medbox.png' />
                </Col>
                <Col span={3}>
                <img className='image06 rotate'  alt='' src='Property 1=Frame 13.png' />
                </Col>
                <Col span={3}>
                <img className='image07 rotate'  alt='' src='Property 1=Frame 17.png' />
                </Col>
                <Col span={3}>
                <img className='image08 rotate'  alt='' src='stethoscope.png' />
                </Col>
            </Row>
            {/* row 2  */}
            <Row style={{ marginBottom: 118}}>
                <Col span={3}>
                <img className='image11 rotate'  alt='' src='Property 1=Frame 13.png' />
                </Col>
                <Col span={3}>
                <img className='image12 rotate'  alt='' src='medbox.png' />
                </Col>
                <Col span={3}>
                <img className='image13 rotate'  alt='' src='stethoscope.png' />
                </Col>
                <Col span={3}>
                <img className='image14 rotate'  alt='' src='Property 1=Frame 17.png' />
                </Col>
                <Col span={3}>
                <img className='image15 rotate'  alt='' src='Property 1=Frame 13.png' />
                </Col>
                <Col span={3}>
                <img className='image16 rotate'  alt='' src='medbox.png' />
                </Col>
                <Col span={3}>
                <img className='image17 rotate'  alt='' src='stethoscope.png' />
                </Col>
                <Col span={3}>
                <img className='image18 rotate'  alt='' src='Property 1=Frame 17.png' />
                </Col>
            </Row>
            {/* row 3 */}
            <Row style={{ marginBottom: 118}}>
                <Col span={3}>
                <img className='image21 rotate'  alt='' src='Property 1=Frame 13.png' />
                </Col>
                <Col span={3}>
                <img className='image22 rotate'  alt='' src='medbox.png' />
                </Col>
                <Col span={3}>
                <img className='image23 rotate'  alt='' src='stethoscope.png' />
                </Col>
                <Col span={3}>
                <img className='image14 rotate'  alt='' src='Property 1=Frame 17.png' />
                </Col>
                <Col span={3}>
                <img className='image15 rotate'  alt='' src='Property 1=Frame 13.png' />
                </Col>
                <Col span={3}>
                <img className='image26 rotate'  alt='' src='medbox.png' />
                </Col>
                <Col span={3}>
                <img className='image27 rotate'  alt='' src='stethoscope.png' />
                </Col>
                <Col span={3}>
                <img className='image28 rotate'  alt='' src='Property 1=Frame 17.png' />
                </Col>
            </Row>
            {/* row 4 */}
            <Row >
                <Col span={3}>
                <img className='image31 rotate'  alt='' src='medbox.png' />
                </Col>
                <Col span={3}>
                <img className='image32 rotate'  alt='' src='Property 1=Frame 13.png' />
                </Col>
                <Col span={3}>
                <img className='image33 rotate'  alt='' src='Property 1=Frame 17.png' />
                </Col>
                <Col span={3}>
                <img className='image34 rotate'  alt='' src='stethoscope.png' />
                </Col>
                <Col span={3}>
                <img className='image35 rotate'  alt='' src='medbox.png' />
                </Col>
                <Col span={3}>
                <img className='image36 rotate'  alt='' src='Property 1=Frame 13.png' />
                </Col>
                <Col span={3}>
                <img className='image37 rotate'  alt='' src='Property 1=Frame 17.png' />
                </Col>
                {/* <Col span={3}>
                <img className='bot01' alt=''  src='bot1.png'/>
                </Col> */}
                
            </Row>
            
           <div className='Landingpage-sub'>
            <Row>
            <h1 className='Shield'>
                SHIELD
            </h1>

            </Row>
            <Row >
                <h1 className='psp'>
                Patient Assistance Program
                </h1>
            </Row>
            <Row>
                <img className='ProfileImage' width={80} height={80} src='Group 18.png' alt=''/>
            </Row>
            <Row>

            <Button className='newUser' onClick={()=>handleClick("new")} variant="contained">New User</Button>
            </Row>
            <Row>

            <Button className='ExistingUser' onClick={()=>handleClick("existig")} variant="outlined">Existing user</Button>
            </Row>
           
          
            <Row>
                <img 
                className='Company-Logo'
                 src='Logo Value Health 1.png' alt=''/>
            </Row>

          
           </div>
           {/* <FloatButton
      shape="square"
      type="primary"
      style={{
        right: 24,
      }}
      onClick={handleBot}
      icon={<RobotOutlined />}
    > </FloatButton> */}
        </div>
    )
}

export default Landingpage