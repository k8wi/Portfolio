import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/project-img4.PNG";
import projImg5 from "../assets/img/project-img5.PNG";
import projImg6 from "../assets/img/project-img6.PNG";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Object Detection",
      description: "ID Card Recognition",
      imgUrl: projImg1,
      link: "https://github.com/k8wi/ObjectDetection"
    },
    {
      title: "Xibit",
      description: "Social Marketplace for Developers",
      imgUrl: projImg2,
      link: "https://github.com/k8wi/DSCE-hackathon-Vikasana", 
    },
    {
      title: "Pong-Game",
      description: "Simple pong game against computer",
      imgUrl: projImg3,
      link:"https://github.com/k8wi/Pong-game"
    },
    {
      title: "Pneumonia Detection",
      description: "pneumonia detection using CNN",
      imgUrl: projImg5,
      link: "https://github.com/k8wi/Pneumonia-Detection-using-Convolutional-Neural-Network"
    },
    {
      title: "Cat-Dog-Classification",
      description: "classifies cats and dogs using CNN",
      imgUrl: projImg6,
      link: "https://github.com/k8wi/Dog-Cat-Classification-using-Deep-Neural-Networks"
    },
    {
      title: "WOX",
      description: "Women's Safety Device",
      imgUrl: projImg4,
      link:"https://github.com/k8wi/NMIT_Hacks"
    },
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <p></p>
                <h2>Projects</h2>
                <p></p>
               <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
