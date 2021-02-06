import ProjectApi from '../../../lib/api/projects';

export default async function createProject(req, res) {
  try {
    const data = req.body;
    await new ProjectApi().createProject(data);
    return res.json({message: 'Project was created!'});
  } catch(e) {
    return res.status(e.status || 400).end(e.message)
  }
}