import dotenv from "dotenv"
import app from "./app"

dotenv.config({ path: ".env" })
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
