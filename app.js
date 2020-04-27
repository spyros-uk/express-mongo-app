import express from "express"
import morgan from "morgan"
import { useToursRouter, useUsersRouter } from "./api"

const PORT = 3000
const app = express()

app.use(express.json())
app.use(morgan("dev"))

useToursRouter(app)
useUsersRouter(app)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
