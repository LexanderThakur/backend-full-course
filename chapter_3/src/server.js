import express from 'express'
import path, {dirname} from 'path'
import{fileURLToPath} from 'url'

import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'


const app=express();
const PORT= process.env.PORT || 5003

//get file path from url of the current module
const __filename=fileURLToPath(import.meta.url)
//get directory name from file path
const __dirname=dirname(__filename)

//middleware
//serves the html file from /public dir and tells express to serve all file frpm public folder as static assests
//any req for the css file will be resilved to public directory
app.use(express.json())

app.use(express.static(path.join(__dirname,'../public')));

//serving up the html file from /public dir
app.get('/',(req,res)=>{

res.sendFile(path.join(__dirname,'public','index.html'));

})
//routes
app.use('/auth',authRoutes)
app.use('/todos',todoRoutes)



app.listen(PORT,()=>{
console.log(`Server has started on port ${PORT}`)
})