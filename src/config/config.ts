import 'dotenv/config'
import { get } from 'env-var'

export const envs = {
  PORT_NUMBER: get('PORT_NUMBER').required().asPortNumber()
}
