import * as chai from 'chai'
import { Application } from '../src'
// import CheckVersionMiddleware from '../src/middlewares'

describe('Application', () => {
  it('check version', (done) => {
    const app = new Application

    // app.use(CheckVersionMiddleware)
    // app.start()

    done()
  })
})
