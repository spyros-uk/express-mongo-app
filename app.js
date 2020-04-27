import express from "express"

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  res.ok = true
  res.status = 200
  res.send("It works!")
})
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})