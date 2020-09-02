import axios from 'axios'
import { urlBase } from '@/services/config'

const projects = {}

projects.getProject = async (projectId) => {
  try {
    const request = {
      method: 'GET',
      url: `${urlBase}projects/${projectId}/.json`
    }
    const response = await axios(request)
    return response.data
  } catch (e) {
    throw new Error(e)
  }
}

projects.getProjects = async () => {
  try {
    const request = {
      method: 'GET',
      url: `${urlBase}projects.json`
    }
    const response = await axios(request)
    return response.data
  } catch (e) {
    throw new Error(e)
  }
}

export default projects
