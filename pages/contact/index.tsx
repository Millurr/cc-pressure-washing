import React, {useState} from 'react'
import {Container, Row, Col, Form, InputGroup, Button} from 'react-bootstrap'
import styles from '../../styles/Contact.module.css'
import axios from 'axios'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Swal from 'sweetalert2';
import {FaPhone, FaEnvelopeOpen, FaFacebook} from 'react-icons/fa';

// https://golang-fiber-api.herokuapp.com/api/email

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [pNumber, setPNumber] = useState('');
    const [content, setContent] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }
        else {
            setLoading(true);

            const sendEmail = {
                "email": email,
                "phonenumber": pNumber,
                "content": content
            }

            console.log(sendEmail);

            // http://198.199.87.233:3000/api/email
            try {
                const res = await axios.post("https://golang-fiber-api.herokuapp.com/api/email", sendEmail);

                setEmail("");
                setPNumber("");
                setContent("");
                setLoading(false);
                setValidated(false);

                // alert(res.data);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: res.data,
                    showConfirmButton: false,
                    timer: 3000
                  })
            }
            catch (error) {
                alert(error);
                setLoading(false);
            }
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.background}></div>
                <div className={styles.centered}>
                    <h1 style={{opacity:'75%'}}>Contact us today for a quote!</h1>
                </div>
            </div>
            {/* Cover photo area */}
            <Container>
                <Row>
                    <Col>
                        <div className={styles.contactbackground} style={{textAlign:'left'}}>
                            <h4 style={{marginBottom:'40px', textAlign:'center'}}>Reach out to us!</h4>
                            <h6 style={{marginBottom:'40px'}}><a href="tel:2282166215"><FaPhone style={{color:'#4677ef', marginRight:'10px', fontSize:'24px'}}/></a>228-216-6215</h6>
                            <h6 style={{marginBottom:'40px'}}><a href = "mailto:CandCPressureWashing@CCP.com?subject = Feedback&body = Message"><FaEnvelopeOpen style={{color:'#4677ef', marginRight:'10px', fontSize:'24px'}}/></a>CandCPressureWashing@CCP.com</h6>
                            <a href="https://www.facebook.com/CCPressureWashers/" target="_blank" style={{textAlign:'center'}}><FaFacebook style={{color:'#4677ef', fontSize:'24px'}}/></a>
                        </div>
                    </Col>
                    <Col>
                            <p></p>
                            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{textAlign:'center'}}>

                                <Form.Group controlId="validationCustom01">
                                {/* <Form.Label>First name</Form.Label> */}
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Email (Required)"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="validationCustom02">
                                <Form.Control
                                    type="tel"
                                    pattern="[0-9]{3}-*[0-9]{3}-*[0-9]{4}"
                                    placeholder="Phone # 111-222-4444"
                                    onChange={(e) => setPNumber(e.target.value)}
                                    value={pNumber}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control required as="textarea" rows={3} placeholder="Enter inquiry here... (Required)" value={content} onChange={(e) => setContent(e.target.value)}/>
                                </Form.Group>
                                {loading ? <Loader type="Puff" color="#4677ef"  height="50px"/> : <Button className={styles.button} type="submit">Send</Button>}
                            </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact;