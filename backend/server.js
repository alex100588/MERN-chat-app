import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js"

dotenv.config()

const PORT = process.env.PORT || 8000
const app = express()


// to parse the incoming requests with json payloads from req.body
app.use(express.json())

app.get("/api/auth", authRoutes)

// app.get("/", (req, res)=>{
//     res.send("server ready!")
// })



app.listen(PORT, ()=> {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})