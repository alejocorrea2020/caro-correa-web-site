export const actions = {
  async nuxtServerInit (vuexContext) {
    await vuexContext.dispatch('projects/getProjects')
  }
}
