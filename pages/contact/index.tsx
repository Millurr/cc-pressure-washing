import React, {useState} from 'react'
import {Container, Row, Col, Form} from 'react-bootstrap'
import styles from '../../styles/Contact.module.css'
import axios from 'axios'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// https://golang-fiber-api.herokuapp.com/api/email

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [pNumber, setPNumber] = useState('');
    const [content, setContent] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const sendEmail = {
            "email": email,
            "phonenumber": pNumber,
            "content": content
        }

        console.log(sendEmail);

        try {
            const res = await axios.post("http://165.22.42.165:3000/api/email", sendEmail);

            setEmail("");
            setPNumber("");
            setContent("");
            setLoading(false);

            alert(res.data);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

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
                        <div style={{textAlign:'center'}}>
                            <h4>Reach out to us!</h4>
                        </div>
                    </Col>
                    <Col>
                        <Form style={{textAlign:'center'}}>
                            <p></p>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Phone #" onChange={(e) => setPNumber(e.target.value)}/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Enter inquiry here..." onChange={(e) => setContent(e.target.value)}/>
                            </Form.Group>
                            {loading ? <Loader type="Puff" color="#4677ef"  height="50px"/> : <button className={styles.button} onClick={submit}>Contact Us</button>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact;