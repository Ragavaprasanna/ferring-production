import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Table,Row,Col } from 'antd';
import './Table.css'

const Tables = () => {
    const [Visible, setVisible] = useState("copay")
    const [CopayClassname, setCopayClassname] = useState("active")
    const [priorClassName, setpriorClassName] = useState("notActive")
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];
    const dataSource1 = [
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const handleClick = (e) => {
        if(e === "copay"){
            setpriorClassName('active')
            setCopayClassname('notActive')
        }
        else{
            setCopayClassname('active')
            setpriorClassName('notActive')
        }
        setVisible(e)
        console.log(e)
    }
    return (
        <div className='Table-Page'>
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
      <div className='Button-Div'>

      
            <Button className={CopayClassname}
                onClick={() => handleClick("copay")}
                variant="contained">Copay Status</Button>
            <Button className={priorClassName}
                onClick={() => handleClick("prior")}
                variant="contained">Prior Authoization</Button>
                </div>
            {
                Visible === 'copay' ?
                    <Table dataSource={dataSource} columns={columns} />
                    :
                    <Table dataSource={dataSource1} columns={columns} />

            }
        </div>
    )
}

export default Tables