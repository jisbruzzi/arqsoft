const express= require("express")
const app = express()

app.get("/veloz",(req,res)=>{
    res.send("hola desde veloz js")
})

app.get("/timeout",(req,res)=>{
    setTimeout(()=>{
        res.send("hola desde timeout js")
    },1000)
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log("ESto escuchando en el puerto", PORT)
})