import express from "express"
const app=express()

app.use(express.static('static'))

app.get('/gethello',(req,res)=>{
    res.send("Hello NodeJS!!")
})

app.get('/gethello1',(req,res)=>{
    res.send("Hello NodeJS to Gethello1!!")
})

app.listen(8000,()=>{
    console.log("server is running")
})