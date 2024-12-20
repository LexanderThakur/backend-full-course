//the addresss if this server is : 
// http://localhost:8383
// ip-> 127.0.0.1:8383


const express= require("express");
const app = express();


const PORT=8383

let data=["james"];
//Endpoint- HTTP VERBS(method) && routes()path
//the method informs the nature of req and 
// route is further subsirectory,this location are called
//endpoints



//Middleware
app.use(express.json());



//TYPE 1 Website endpoints (these endpoint are for sending back html)
//comes when user enters ul in browser
app.get('/',(req,res)=>{


    res.send(`
        <body style="background:pink;color:blue">
        <h1>DATA</h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">dashboard</a>
        </body>`);


})//this comes before app.listen



app.get('/dashboard',(req,res)=>{
    res.send(`
        <body>
        <h1>dashboard</h1>

        <a href="/">home</a>
        </body>
        
        
        `);
})

//Type2 -API endpoints(non visual) 




//CRUD - create-post,read-get,update-put,delete-delete





app.get('/api/data',(req,res)=>{
    console.log("this is for data");
    res.status(599).send(data);
})

app.post('/api/data',(req,res)=>{
    //someone want to create a user when they click sign up
    //the user clicks signup after entering cred then the browser sends a network req to hnadle that

    const newEntry=req.body;
    console.log(newEntry);
    data.push(newEntry.name);
    res.sendStatus(201);//201 is for creating


})

app.delete('/api/data',(req,res)=>{

    data.pop();
    console.log("deleted element fom end of arr")
res.sendStatus(203);

})


app.listen(PORT,()=> console.log(`server has started on: ${PORT}`));


