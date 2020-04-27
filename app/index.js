import express from "express"
import morgan from "morgan"
import { useToursRouter, useUsersRouter } from "./modules"

const app = express()

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(express.json())
app.use(express.static(`public`))

useToursRouter(app)
useUsersRouter(app)

export default app