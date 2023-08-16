import React from 'react'
import { Col, Row } from 'antd';
import './Survey.css'

const Survey = () => {
  return (
    <div className='Survey-main'> 
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
    <Col>
    <p>
    Hi chan, thanks for enrolling into SHIELD patient care program, please click on the link below and complete this short survey.
    </p>
    <br></br>
    <p>
        Thank you
    </p>
    </Col>
  </Row>
  
  </div>
  )
}

export default Survey