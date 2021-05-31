import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image'
import {Image, Container, Row, Col, Button} from 'react-bootstrap';
import styles from '../styles/Home.module.css'

export default function Home() {
  const margin: string = "20px";

  return (
    <div>
      <Head>
        <title>C&C Pressure Washing</title>
        <meta name="description" content="Your top pressure washing solution" />
        <link rel="icon" href="/images/CC.png" />
      </Head>
      {/* Cover photo area */}
      <div className={styles.container}>
        <div className={styles.background}></div>
        {/* <Image className={styles.imgoverlay} src="/images/Pressure-Washing.jpg" width="100%" height="auto" alt=""/> */}
        <div className={styles.centered}>
          <h1 style={{opacity:'75%'}}>C & C Pressure Washing</h1>
          <h4>Great prices, fast results.</h4>
          <Link href="/contact"><button className={styles.button}>Contact Us</button></Link>
        </div>
      </div>
      {/* Cover photo area */}
      <Container>
        <Row>
          <Col>
          <p style={{textAlign:'center'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </Col>
        </Row>
        {/* Image on left, Text on Right */}
        <Row style={{paddingBottom:'40px'}}>
          <Col style={{textAlign:'center'}}>
            <Image className={styles.img} src="/images/Image1.jpg" alt=""/>
          </Col>
          {/* <Col></Col> */}
          <Col style={{textAlign:'center'}}>
          <h1>Professional</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel eros donec. Laoreet sit amet cursus sit amet dictum. Sem et tortor consequat id porta. Vivamus at augue eget arcu.
          </Col>
        </Row>
        {/* Image on Right, Text on Left */}
        <Row style={{paddingBottom:margin}}>
          <Col style={{textAlign:'center'}}>
            <h1>Courteous</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel eros donec. Laoreet sit amet cursus sit amet dictum. Sem et tortor consequat id porta. Vivamus at augue eget arcu.
          </Col>
          {/* <Col></Col> */}
          <Col style={{textAlign:'center'}}>
            <Image className={styles.img} src="/images/Image2.jpg" alt=""/>
          </Col>
        </Row>
        <Row style={{paddingBottom:margin}}>
          <Col style={{textAlign:'center', overflow:'wrap'}}>
          <h1>Reviews</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>Tortor condimentum lacinia quis vel eros donec. Laoreet sit amet cursus sit amet dictum. Sem et tortor consequat id porta. Vivamus at augue eget arcu.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
