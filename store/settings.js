export const state = () => ({
  panelActive: false
})

export const mutations = {
  statusSettings(state){
    state.panelActive = !state.panelActive
  }
}