import express from "express"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 8000

const app = express()
app.get("/", (req, res)=>{
    res.send("server ready!")
})

app.get('/api/auth/login', (req, res)=>{
    res.send("loginroute")
})

app.get("/api/logout", (req, res)=>{
    res.send("logout route")
})

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))