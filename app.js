import express from "express"
import morgan from "morgan"
import { registerToursRoutes } from "./api/tours"

const PORT = 3000
const app = express()

app.use(express.json())
app.use(morgan("dev"))

registerToursRoutes(app)


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
