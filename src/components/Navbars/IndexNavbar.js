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
import React from "react";
import './Navbar.css';

// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

function IndexNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [navbarButton1Active, setNavbarButton1Active] = React.useState("navbar-button-active")
  
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop <  props.ref1.current.offsetTop-navbarheight) {
        setNavbarButton1Active("navbar-button-active")
      }
      else {
        setNavbarButton1Active("navbar-button")
      }
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");

      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");

      }

    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const navbarheight = 80;
  
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} style={{height:navbarheight}} expand="lg" color="primary">
      <Container>
        <div className="navbar-translate" style={{paddingLeft:"10px"}}>
          {/* <Row style={{textAlign:"center"}}>
            <div className={classnames(navbarButton1Active)}               
              onClick={() =>
                window.scrollTo({
                  left: 0,
                  top: 0,
                  behavior: "smooth",
                })
              }>
                <h6 className="navbar-text">Tejas Krishnan</h6>
            </div>
            </Row> */}
            <Button
              type="button"
              className={classnames("btn-round")} color="info" 
              onClick={() =>
                window.scrollTo({
                  left: 0,
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              Tejas Krishnan
            </Button>

          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem style={{paddingRight:"10px"}}>
              <Button
                className={classnames("btn-round")} color="info"
                onClick={() =>
                  window.scrollTo({
                    left: 0,
                    top: props.ref1.current.offsetTop-navbarheight,
                    behavior: "smooth",
                  })
                }
              >
                About
              </Button>
            </NavItem>
            <NavItem style={{paddingRight:"10px"}}>
              <Button
                className={classnames("btn-round")} color="info"
                onClick={() =>
                  window.scrollTo({
                    left: 0,
                    top: props.ref2.current.offsetTop-navbarheight,
                    behavior: "smooth",
                  })
                }
              >
                Skills
              </Button>
            </NavItem>
            <NavItem style={{paddingRight:"10px"}}>
              <Button
                className={classnames("btn-round")} color="info"
                onClick={() =>
                  window.scrollTo({
                    left: 0,
                    top: props.ref3.current.offsetTop-navbarheight,
                    behavior: "smooth",
                  })
                }
              >
                Projects
              </Button>
            </NavItem>
            <NavItem style={{paddingRight:"10px"}}>
              <Button
                className={classnames("btn-round")} color="info"
                onClick={() =>
                  window.scrollTo({
                    left: 0,
                    top: props.ref4.current.offsetTop-navbarheight,
                    behavior: "smooth",
                  })
                }
              >
                Experience
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
