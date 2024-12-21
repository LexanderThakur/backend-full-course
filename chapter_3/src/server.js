import express from 'express'

const app=express();
const PORT= process.env.PORT || 5003

console.log("hello")
app.listen(PORT,()=>{
console.log(`Server has started on port ${PORT}`)
})