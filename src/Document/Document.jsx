import React, { useState } from 'react'
import { Col, Row ,Upload} from 'antd';
import axios from 'axios';
import './Document.css'


const Document = () => {
    const { Dragger } = Upload;
    const [loading, setLoading] = useState(false);
    function Mailto({ email, subject, body, ...props }) {
        return (
          <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
            {props.children}
          </a>
        );
      }

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
                        // console.log(res)
                        axios
                            .get(`https://3dlgmypzhtktom3jcvdryvgpby0elvwo.lambda-url.us-east-1.on.aws/`)
                            .then((res) => {
                                setLoading(false)
                                console.log(res.data, "insurance res")
                               
                               
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
  return (
    <div className='Document-main'>
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
            <Row className='shield-div' style={{marginTop:30,marginBottom:50}} >
                            <Col >

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
                        <div className='shield-div'>

                        <Mailto email="marketing@healthinsurance.awsapps.com" subject="" body="enter here">
    Mail us!
  </Mailto>
                        </div>
                        
    </div>
  )
}

export default Document