import express from "express"
import morgan from "morgan"
import { useToursRouter, useUsersRouter } from "./modules"

const app = express()
app.use(express.json())
app.use(morgan("dev"))

useToursRouter(app)
useUsersRouter(app)


export default app