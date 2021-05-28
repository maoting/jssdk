// dev only

const path = require('path')
const { linkBin } = require('./linkBin')

module.exports = function setupDevProject (targetDir) {
    // maoting: 在这调用vue-cli-service
  return linkBin(
    require.resolve('@bjh/cli-service/bin/vue-cli-service'),
    path.join(targetDir, 'node_modules', '.bin', 'vue-cli-service')
  )
}
