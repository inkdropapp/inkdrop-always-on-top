module.exports = {
  activate() {
    inkdrop.window.setAlwaysOnTop(true)
  },
  deactivate() {
    inkdrop.window.setAlwaysOnTop(false)
  }
}
