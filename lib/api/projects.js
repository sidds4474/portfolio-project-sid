import axios from 'axios';

class ProjectApi {

  getAll() {
    return axios.get('http://localhost:3002/api/v1/projects')
  }


  getById(id) {
    return axios.get(`http://localhost:3002/api/v1/projects/${id}`)
  }

  createProject(data) {
    return axios.post("http://localhost:3002/api/v1/projects", data);
  }

}

export default ProjectApi;