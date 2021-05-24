import React, {useState} from 'react'
import {Container, Row, Col, Form} from 'react-bootstrap'
import styles from '../../styles/Contact.module.css'
import axios from 'axios'

// https://golang-fiber-api.herokuapp.com/api/email

const Contact = () => {
    const [email, setEmail] = useState('');
    const [pNumber, setPNumber] = useState('');
    const [content, setContent] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        const sendEmail = {
            "email": email,
            "phonenumber": pNumber,
            "content": content
        }

        console.log(sendEmail);

        try {
            const res = await axios.post("http://localhost:3001/api/email", sendEmail);

            alert(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div style={{textAlign:'center'}}>
                        <p>Info</p>
                    </div>
                </Col>
                <Col>
                    <Form style={{textAlign:'center'}}>
                    <p>Please fill out the form below and someone will reach out to you shortly.</p>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Phone #" onChange={(e) => setPNumber(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Enter inquiry here..." onChange={(e) => setContent(e.target.value)}/>
                        </Form.Group>
                        <button className={styles.button} onClick={submit}>Contact Us</button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;