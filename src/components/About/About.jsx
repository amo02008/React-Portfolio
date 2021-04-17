import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="yoga pose picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'My name is Adrienne Osorio I have always been passionate about problem-solving. This led to a 10-year career working in finance servicing about 250 households with a total AUM of roughly $200,000,000.00. Although I had access to top tier technologies, I often found myself wondering how to improve them further. This led to my enrollment in a Full Stack Web Development Bootcamp.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'While I find both the front-end and back-end processes interesting I am drawn to the front end. It allows me to bring an idea to life while incorporating problem solving.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'In 2019 I became a registered yoga instructor. I’m looking forward to find ways to take the things I learn on the mat and incorporate them with web development."Yoga is not about touching your toes. It is what you learn on the way down.” – Jigar Gor'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
