import tours from "../dev-data/data/tours-simple"

export { registerToursRoutes }

function registerToursRoutes(app) {
  app.route("/api/v1/tours").get(getTours).post(createTour)
  app.route("/api/v1/tours/:id").get(getTourById)
}

function getTours(req, res) {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: tours,
  })
}

function createTour(req, res) {
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
}

function getTourById(req, res) {
  const {
    params: { id },
  } = req
  const tourId = Number(id)
  const errorResponse = {
    status: "fail",
    message: "Invalid tour ID",
  }

  if (id > tours.length) return res.status(404).json(errorResponse)

  const tour = tours.find(({ id }) => id === tourId)
  if (!tour) return res.status(404).json(errorResponse)

  res.status(200).json({
    status: "success",
    data: tour,
  })
}
