import express from "express"
import tours from "./dev-data/data/tours-simple"

const app = express()
const PORT = 3000

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: tours
  })
})
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
