import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import axios from 'axios';
import ProjectApi from '../lib/api/projects';

function Project({project}){
  return (
    <BaseLayout>
      <BasePage header="Project Detail">
        {
          JSON.stringify(project)
        }
      </BasePage>
    </BaseLayout>
  )
}
export async function getServerSideProps({query}) {
  const json = await new ProjectApi().getById(query.id);
  const project = json.data;

  return {props: { project }};
}
export default Project;

