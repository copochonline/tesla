import middlewareMgr from './managers/middleware'
import templateMgr from './managers/template'
import compose from './common/compose'

import pipelineMiddleware from './middlewares/pipeline'

class Application {
  constructor() {
    this.middlewares = []
    // this.middlewareMgr = middlewareMgr
    // this.templateMgr = templateMgr

    this.use(pipelineMiddleware)
    this.start()
  }

  use(middleware) {
    this.middlewares.push(middleware)

    return this
  }

  start() {
    const fn = compose(this.middlewares)

    const ctx = Context
    fn()
  }

  //
  static origin = {
    name: 'application'
  }
}

export default Application
