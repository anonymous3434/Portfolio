import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import social from "../assets/img/social.webp";
import roadMap from "../assets/img/roadMap.webp";
import weather from "../assets/img/weather.webp";
import pizza from "../assets/img/pizza.png";
import task from "../assets/img/task.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Snapgram",
      description: "Social Media App",
      imgUrl: social,
      type: "dynamic",
      projectLink:
        "https://social-media-app-git-main-asishs-projects-633477a3.vercel.app?_vercel_share=Xjn0D7KW4HIIPbD4fAGPrnJtdEPd5rQC",
    },
    {
      title: "Weather App",
      description: "Smart Weather App",
      imgUrl: weather,
      type: "dynamic",
      projectLink:
        "https://weather-app-git-master-asishs-projects-633477a3.vercel.app?_vercel_share=RyQr2bvds59lV8e4opsT7lgQfAHGfzP6",
    },
    {
      title: "RoadMap Generator",
      description: "Generates raodmap for any tasks",
      imgUrl: roadMap,
      type: "dynamic",
      projectLink: "#",
    },
    {
      title: "Pizza Parlor",
      description: "Pizza ordering app",
      imgUrl: pizza,
      type: "static",
      projectLink: "https://pizza-parlorzz.netlify.app/",
    },
    {
      title: "Task Manager",
      description: "Task Managing app",
      imgUrl: task,
      type: "static",
      projectLink: "https://karamsuchi.netlify.app/",
    },
  ];
  const dynamicProjects = projects.filter((p) => p.type === "dynamic");
  const staticProjects = projects.filter((p) => p.type === "static");

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the projects I’ve built to strengthen my
                    skills in React, Redux, TypeScript, and modern web
                    development. Each project reflects my focus on clean UI,
                    performance, and building real-world, scalable applications.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Dynamic Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Static Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {/* Dynamic Apps */}
                      <Tab.Pane eventKey="first">
                        <Row className="g-4">
                          {dynamicProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Static Apps */}
                      <Tab.Pane eventKey="second">
                        <Row className="g-4">
                          {staticProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Third Tab Placeholder */}
                      <Tab.Pane eventKey="third">
                        <h4 className="text-center">
                          More projects coming soon...
                        </h4>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
