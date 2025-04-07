import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js"

dotenv.config()

const PORT = process.env.PORT || 8000
const app = express()


// to extract the fields from req.body and parse the incoming requests with json payloads 
app.use(express.json())

app.use("/api/auth", authRoutes)

// app.get("/", (req, res)=>{
//     res.send("server ready!")
// })



app.listen(PORT, ()=> {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})