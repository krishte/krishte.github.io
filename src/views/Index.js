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
import React, {useRef} from "react";
import './index.css';

// reactstrap components
import {Badge, PopoverBody, CardText,CardImg, CardLink, Container, Row, Col, Card, CardBody, UncontrolledPopover, PopoverHeader} from "reactstrap"
import {DiPython, DiJava, DiJavascript1, DiBootstrap, DiCss3, DiDocker, DiHaskell, DiHtml5, DiReact, DiScala, DiSwift} from "react-icons/di"
import {SiAmazonec2,SiKubernetes,SiMicrosoftoffice,SiFacebook, SiLinkedin, SiGithub, SiCodeforces} from "react-icons/si"
import {ImProfile} from "react-icons/im"
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";


const projitems = [
  {
    imgsrc: require("assets/images/Pestleplus.jpeg"),
    title: "Pestle+",
    text: "Works on top of an IB question bank website called Pestle. Uses an NLP-based algorithm that is a combination of sentiment analysis and named entity recognition on examiner’s remarks to rank questions by difficulty. Additionally, uses keyword extraction to find related questions for each question.",
    url: "https://chrome.google.com/webstore/detail/pestle%20/lcpbagfnfnjgmmjegmjbmhbkjedgcioi",
    langbadges: ["Python", "Javascript"],
    concbadges: ["NLP", "Deep-learning", "Graphics"]
  },
  {
    imgsrc: require("assets/images/Tracr.png"),
    title: "TRACR: Scheduling App",
    text: "Led a team of four to develop an app to schedule time to work on assignments, given the length and due date of the assignments, a list of working hours, and other preferences. Learned Swift, SwiftUI, the Google Classroom API, and designed a complex scheduling algorithm. Beta tested in school.",
    url: "https://github.com/krishte/TRACR",
    langbadges: ["Swift", "SwiftUI", "Google Classroom API"],
    concbadges: ["Scheduling", "Graphics", "Algorithms"]
  },
  {
    imgsrc: require("assets/images/BackgroundNoise.png"),
    title: "Background Noise Cancellation",
    text: "Wrote a Python program to remove background noise from audio files utilizing short-time Fourier transforms and deep-learning (TensorFlow), Learned basics of digital signal processing and types of neural networks. Met with minimal success when background noise was from a fan.",
    url: "https://github.com/krishte/BackNoiseCanc",
    langbadges: ["Python", "TensorFlow", "Matplotlib"],
    concbadges: ["Deep-learning", "FFT", "DSP"]

  },
  {
    imgsrc: require("assets/images/Sudoku.png"),
    title: "Sudoku Solver",
    text: "A Java program to solve sudokus with a GUI made using JavaFX. The program employs traditional sudoku solving techniques that one would use when solving a sudoku by hand in addition to a brute force guessing method if the previous method is unable to make any progress on the sudoku.",
    url: "https://github.com/krishte/SudokuSolver",
    langbadges: ["Java", "JavaFX"],
    concbadges: ["Backtracking", "Brute-force", "Algorithms"]
  },
  { 
    imgsrc: require("assets/images/Gyroscope.png"),
    title: "WatchMacController - In Progress",
    text: "A pair of apps that run on Mac and Apple Watch so that the Watch can control the Mac. The end goal is to use accelerometer and gyroscopic data from the Apple Watch to classify hand motions and then perform actions on the Mac accordingly. Currently, buttons on the Watch screen control the Mac.",
    url: "https://github.com/krishte/WatchMacController",
    langbadges: ["Swift", "SwiftUI", "CocoaAsyncSocket"],
    concbadges: ["TCP", "Sockets"]
  },
  { 
    imgsrc: require("assets/images/Website.png"),
    title: "Portfolio Website - In Progress",
    text: "A portfolio website to display information about me. Being updated with additional information and features regularly.",
    url: "",
    langbadges: ["HTML5", "CSS3", "Bootstrap", "React", "Javascript"],
    concbadges: ["Graphics", "Design"]
  },
]



const langitems = [
  {
    target: "Popover1",
    title: "Python",
    body: "Developed many smaller projects related to web scraping, automation, and machine-learning using modules such as TensorFlow, Pandas, NumPy, Selenium, and BeautifulSoup" 
  },
  {
    target: "Popover2",
    title: "Java",
    body: "Took a summer course at Northwestern in 2017. Made a few games including a platformer using JavaFX, a graphing application, and a sudoku solver." 
  },
  {
    target: "Popover3",
    title: "Javascript",
    body: "Worked on the front-end of a chatbot for a summer internship at BitWise Academy. Handled communicating with a server through POST requests." 
  },
  {
    target: "Popover4",
    title: "Bootstrap",
    body: "" 
  },
  {
    target: "Popover5",
    title: "CSS3",
    body: "" 
  },
  {
    target: "Popover6",
    title: "Docker",
    body: "Worked inside a Docker container for a summer internship at BitWise Academy. Learned to mount Docker containers on directories and Docker CLI." 
  },
  {
    target: "Popover7",
    title: "Haskell",
    body: "Took a first-year course on functional programming that covered various functional programming concepts through Haskell." 
  },
  {
    target: "Popover8",
    title: "HTML5",
    body: "" 
  },
  {
    target: "Popover10",
    title: "React",
    body: "Built this portfolio using React and also used React to build the front-end and admin page of a chatbot for a summer internship at BitWise Academy." 
  },
  {
    target: "Popover11",
    title: "Scala",
    body: "Took a first-year course on imperative programming that covered best software developer practices and proving correctness of programs." 
  },
  {
    target: "Popover12",
    title: "Swift",
    body: "Built an assignment scheudling app in Swift called TRACR with 4 others that had over 20,000 lines of code and used CoreData" 
  },
  {
    target: "Popover14",
    title: "Microsoft Office",
    body: "Requires no explanation..." 
  },
  {
    target: "Popover15",
    title: "Amazon EC2",
    body: "Worked inside an EC2 Linux instance with no GUI for a summer internship at BitWise Academy." 
  },
  {
    target: "Popover17",
    title: "Kubernetes",
    body: "Deployed a docker container inside a customized Kubernetes network inside a EC2 Linux instance for a summer internship at BitWise Academy." 
  }
]




function Index() {
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  const languages = langitems.map((item) => {
    return (
      <UncontrolledPopover
        placement="top"
        target={item.target}
        trigger="hover"
      >
        <PopoverHeader>
          {item.title}
        </PopoverHeader>
        <PopoverBody>
          {item.body}
        </PopoverBody>
      </UncontrolledPopover>
    )
  })

  const projects = projitems.map((item) => {
    return (
      <Col style={{padding:"20px"}}>
        <Card  className="text-center">
          <CardImg top src={item.imgsrc} alt="..." />
          <CardBody>
              <h6>{item.title}</h6>
              <br/>
              <CardText>{item.text}</CardText>
              <Row style={{paddingLeft:"20px"}}>
                {
                  item.langbadges.map((badgeitem) => {
                    return (
                      <div style={{padding:"2px"}}>
                        <Badge color="warning" pill>{badgeitem}</Badge>
                        </div>
                    )
                  })
                }
              </Row>
              <Row style={{paddingLeft:"20px"}}>
                {
                  item.concbadges.map((badgeitem) => {
                    return (
                      <div style={{padding:"2px"}}>
                        <Badge color="info" pill>{badgeitem}</Badge>
                        </div>
                    )
                  })
                }
              </Row>
              <br/>
              <CardLink href={item.url} className="cardlink-color">
                Learn more
            </CardLink>
          </CardBody>
      </Card>

      </Col>
    )
  });

  const skillsize = 120;

  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const musicRef = useRef();

  return (
    <>
      <IndexNavbar ref1={aboutRef} ref2={skillsRef} ref3={projectsRef} ref4={musicRef} />
      <IndexHeader />
      <div className="main">
       <div className="section text-center" ref={aboutRef}>
          <Container>
            <Row>
              <Col className="mr-auto ml-auto my-auto" xs="11" sm="10" md="8" lg="4" xl="4">
                <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/images/Tejas.jpg")}
                />  
              </Col>
              <Col className="ml-auto my-auto" xs="12" sm="12" md="12" lg="8" xl="7">
                <h2 className="title">About</h2>
                <h5 >
                  Hi! My name is Tejas and I'm a first-year mathematics and computer science student at the University of Oxford. I'm passionate about software development with experience developing IOS Apps and Chrome Extensions, and I'm an avid competitive programmer well-versed in algorithms and data structures. I've pursued programming projects in deep-learning, web scraping, automation, NLP and NLU, and web design.
                </h5>
                <Row style={{padding:"20px"}} justify="space-around" align="middle">
                  <Col> 
                    <a href="https://github.com/krishte" ><SiGithub className='icon-color' size="50px"/></a>
                  </Col>
                  <Col> 
                    <a href="https://www.linkedin.com/in/tejas-krishnan-434b90218/"><SiLinkedin className='icon-color' size="50px"/></a>
                  </Col>
                  <Col >
                    <a href="https://www.facebook.com/tejas.krishnan.31"><SiFacebook className='icon-color' size="50px"/></a>
                  </Col>
                  <Col>
                    <a href=""><ImProfile className='icon-color' size="50px"/></a>
                  </Col>
                  <Col>
                    <a href="https://codeforces.com/profile/TechNoLogic"><SiCodeforces className='icon-color' size="50px"/></a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center" ref={skillsRef}>
          <Container>
            <h2 className="title">My Skills</h2>
            <Row xs="2" sm="3" md="4" lg="6" xl="6">
              <Col style={{padding:"20px"}}> 
                <DiPython id="Popover1" className="link-color"  size={skillsize}/>
                {languages}
              </Col>
              <Col style={{padding:"20px"}}> 
                <DiJava id="Popover2" size={skillsize} className='link-color'/>
              </Col>
              <Col style={{padding:"20px"}}> 
                <DiJavascript1 id="Popover3" size={skillsize} className='link-color'/>
              </Col>
              <Col style={{padding:"20px"}}> 
                <DiBootstrap id="Popover4" size={skillsize} className='link-color'/>
              </Col>
              <Col style={{padding:"20px"}}> 
                <DiCss3 id="Popover5" size={skillsize} className='link-color'/>
              </Col>
              <Col style={{padding:"20px"}}> 
                <DiDocker id="Popover6" size={skillsize} className='link-color'/>
              </Col>
              <Col style={{padding:"20px"}}> 
                <DiHaskell id="Popover7" size={skillsize} className='link-color'/>
              </Col>
              <Col style={{padding:"20px"}}> 
                <DiHtml5 id="Popover8" size={skillsize} className='link-color'/>
              </Col>
              <Col style={{padding:"20px"}}> 
                <DiReact id="Popover10" size={skillsize} className='link-color'/>
              </Col>
              <Col style={{padding:"20px"}}> 
                <DiScala id="Popover11" size={skillsize} className='link-color'/>
              </Col>
              <Col style={{padding:"20px"}}> 
                <DiSwift id="Popover12" size={skillsize} className='link-color'/>
              </Col>
              <Col style={{padding:"20px"}}> 
                <SiMicrosoftoffice id="Popover14" size={skillsize} className='link-color'/>
              </Col>
              <Col style={{padding:"20px"}}> 
                <SiAmazonec2 id="Popover15" size={skillsize} className='link-color'/>
              </Col>
              <Col style={{padding:"20px"}}> 
                <SiKubernetes id="Popover17" size={skillsize} className='link-color'/>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center" ref={projectsRef}>
          <Container>
            <h2 className="title">Projects</h2>
            <br/>
            <Row xs="1" sm="2" md="2" lg="3" xl="3">
              {projects}
            </Row>
          </Container>
        </div>

        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
