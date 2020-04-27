import users from "../dev-data/data/users"
import express from "express"

export { useUsersRouter }

function useUsersRouter(app) {
  const router = express.Router()
  app.use("/api/v1/users", router)
  router.route("/").get(getUsers).post(createUser)
  router.route("/:id").get(getUserById)
}

function getUsers(req, res) {
  res.status(200).json({
    status: "success",
    results: users.length,
    data: users,
  })
}

function createUser(req, res) {
  const userId = users.length
  const newUser = {
    id: userId,
    ...req.body,
  }
  users.push(newUser)
  fs.writeFile(
    `${__dirname}/dev-data/data/users.json`,
    JSON.stringify(users),
    (error) => {
      if (error) throw error
      res.status(201).json({
        status: "success",
        data: newUser,
      })
    }
  )
}

function getUserById(req, res) {
  const {
    params: { id },
  } = req
  const errorResponse = {
    status: "fail",
    message: "Invalid user ID",
  }

  const user = users.find(({ _id }) => _id === id)
  if (!user) return res.status(404).json(errorResponse)

  res.status(200).json({
    status: "success",
    data: user,
  })
}
