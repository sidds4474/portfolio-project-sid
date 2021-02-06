import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
//import withAuth from '../hoc/withAuth';
import { Row, Col } from 'reactstrap';
import ProjectForm from '../components/ProjectForm';
import { createProject } from '../actions/projects';

const ProjectNew = () => {

  const _createProject = (data) => {
    createProject(data)
  }


  return (
    <BaseLayout>
      <BasePage header="Create Project">
      <h1 className='base-page'>Create Project</h1>
        <Row>
          <Col md="8">
            <ProjectForm onSubmit={_createProject} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default (ProjectNew);