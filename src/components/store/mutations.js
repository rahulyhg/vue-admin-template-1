export default {
  changeScreenWidth (state, width) {
    state.screenWidth = width
  },
  changeScreenHeight (state, height) {
    state.screenHeight = height
  },
  changeCollapseSwitch (state, status) {
    state.isCollapse = status
  }
}
