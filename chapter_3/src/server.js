import express from 'express'
import path, {dirname} from 'path'
import{fileURLToPath} from 'url'
const app=express();
const PORT= process.env.PORT || 5003




//get file path from url of the current module
const __filename=fileURLToPath(import.meta.url)
//get directory name from file path
const __dirname=dirname(__filename)


//serving up the html file from /public dir
app.get('/',(req,res)=>{

res.sendFile(path.join(__dirname,'public','index.html'));

})




app.listen(PORT,()=>{
console.log(`Server has started on port ${PORT}`)
})