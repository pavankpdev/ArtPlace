
import * as dotenv from 'dotenv'
dotenv.config()

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
    MONGO_STRING:  string,
    DB_PORT: number,
      ENV: 'test'
    }
  }
}
