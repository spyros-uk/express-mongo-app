import express from "express"
import { registerToursRoutes } from "./api/tours"

const PORT = 3000
const app = express()

registerToursRoutes(app)

app.use(express.json())
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
