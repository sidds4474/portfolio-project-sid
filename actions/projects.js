import axios from 'axios';

export function createProject(data) {
  return axios.post('/api/v1/projects', data);
}