import { envs } from './config/config'
import { AppRoutes } from './presentation/routes'
import { Server } from './presentation/server'

(async () => {
  main()
})()

function main(): void {
  const server = new Server({
    port: envs.PORT_NUMBER,
    routes: AppRoutes.routes
  })

  server.start()
}
