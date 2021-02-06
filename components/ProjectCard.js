import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

const ProjectCard = ({project}) =>
  <Card className="project-card">
    <CardHeader className="project-card-header">{project.jobTitle}</CardHeader>
    <CardBody>
      <p className="project-card-city">{project.location}</p>
      <CardTitle className="project-card-title">{project.title}</CardTitle>
      <CardText className="project-card-text">{project.description}</CardText>
    </CardBody>
  </Card>

export default ProjectCard;