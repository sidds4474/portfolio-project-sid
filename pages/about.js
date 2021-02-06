import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';


  const ROLES = ["Student",'Developer', 'Tech Lover', 'Team Player'];
  const language=['I code in React.js,Nodejs and Java.'];

  const Index = () => {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Developer </h2>
                      </div>
                      <img className="image" src="/images/about-us.png"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Hey All, I'm Siddharth Saxena and I'm a ...
                  </h1>
                </div>
                <div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={100}
                  strings={ROLES}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                </div>
                <Typed
                typeSpeed={100}
                backSpeed={100}
                  strings={language}
                  backDelay={1000}
                  className="self-typed"
                />
                <div className="hero-welcome-bio">
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }
  
  export default Index;