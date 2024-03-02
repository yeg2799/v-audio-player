// Import vue components
import * as components from './components/index.js'
// App style entrypoint
import './assets/style/scss/app.scss'

// install function executed by Vue.use()
const install = function installComponents(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
}

// Create module definition for Vue.use()
export default install

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './components/index.js'
