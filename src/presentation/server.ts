import express, { Router, urlencoded } from 'express'

interface Options {
  port: number
  routes: Router
}

export class Server {
  public app = express()
  public serverListenner?: any
  private readonly routes: Router
  private readonly port: number

  constructor(options: Options) {
    const { port, routes } = options
    this.port = port
    this.routes = routes
  }

  public async start() {
    //* Middlewares
    this.app.use(express.json())
    this.app.use(urlencoded({ extended: true }))

    //* Routes
    this.app.use(this.routes)

    //* Server start
    this.serverListenner = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }

  public close() {
    this.serverListenner?.close()
  }
}
