import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import ProjectApi from '../lib/api/projects';
import { useRouter } from 'next/router';

import ProjectCard from '../components/ProjectCard';

function Projects({projects}){

  const router = useRouter();

  function renderPosts(posts){
    return projects.map(project =>
      <li key={project._id} style={{'fontSize': '20px'}}>
        <Link as={`/project/${project._id}`} href="/project/[id]">
          <a>
            {project.title}
          </a>
        </Link>
      </li>
    )
  }


  return (
    <BaseLayout>
     <BasePage className="project-page">
     <Row>
          { projects.map(project =>
            <Col
              key={project._id}
              onClick={() => {
                router.push('/project/[id]', `/project/${project._id}`)
              }}
              md="4">
              <ProjectCard project={project} />
            </Col>
            )
          }
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

// This function is called during the build time
// Improved performance of page,
// It will create static page with dynamic data
export async function getStaticProps() {
  const json = await new ProjectApi().getAll();
  const projects = json.data;
  return {
    props: { projects }
  }
}

export default Projects;
