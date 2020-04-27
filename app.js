import express from "express"
import fs from "fs"
import tours from "./dev-data/data/tours-simple"

const PORT = 3000
const app = express()
app.use(express.json())

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: tours,
  })
})
app.post("/api/v1/tours", (req, res) => {
  const tourId = tours.length
  const newTour = {
    id: tourId,
    ...req.body,
  }
  tours.push(newTour)
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (error) => {
      if (error) throw error
      res.status(201).json({
        status: "success",
        data: newTour,
      })
    }
  )
})

app.get("/api/v1/tours/:id", (req, res) => {
  const {
    params: { id },
  } = req
  const tourId = Number(id)

  const tour = tours.find(({ id }) => id === tourId)
  if (!tour)
    res.status(404).json({
      data: null,
    })

  res.status(200).json({
    status: "success",
    data: tour,
  })
})
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
