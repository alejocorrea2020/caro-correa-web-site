import projectsService from '@/services/projectsService'

export const state = () => ({
  projects: [],
  selectedProject: {}
})

export const mutations = {
  'CLEAR_PROJECT' (state) {
    state.selectedProject = {}
  },
  'CLEAR_PROJECTS' (state) {
    state.projects = []
  },
  'SET_PROJECT' (state, selectedProject) {
    state.selectedProject = selectedProject
  },
  'SET_PROJECTS' (state, projects) {
    state.projects = projects
  }
}

export const actions = {
  async getProject (vuexContext, projectId) {
    try {
      const response = await projectsService.getProject(projectId)
      vuexContext.commit('SET_PROJECT', response)
    } catch (e) {
      vuexContext.commit('CLEAR_PROJECT')
      throw e
    }
  },
  async getProjects (vuexContext) {
    try {
      const response = await projectsService.getProjects()
      vuexContext.commit('SET_PROJECTS', response)
    } catch (e) {
      vuexContext.commit('CLEAR_PROJECTS')
      throw e
    }
  }
}

export const getters = {
  previewProjects: (state) => {
    return state.projects.slice(0, 4)
  }
}
