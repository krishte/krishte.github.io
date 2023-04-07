/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Col, Row, Button} from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/images/Switzerland2.JPG") + ")"
        }}
      >
        <div className="content-center">
          <Container>

            <div className="title-brand">
              <Row className="justify-content-center">
            <Col xs="6" md="6" sm="6" lg="6" xl="5">
            <img
                alt="..."
                className="img-circle img-responsive"
                src={require("assets/images/Tejas.jpg")}
            />  
            </Col>
            </Row>
              <h1 className="text-white text-center font-weight-bold" style={{fontSize:"80px"}}>Tejas Krishnan</h1>
            </div>
            
            <h2 className="text-white text-center font-weight-bold">
              Mathematics and Computer Science Student
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
