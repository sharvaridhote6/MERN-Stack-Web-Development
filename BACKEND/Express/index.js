import express from 'express';
import 'dotenv/config';
import logger from './logger.js';//logger is a custom module that logs all the requests that come in
import morgan from 'morgan';//morgan is a middleware that logs all the requests that come in

const app= express(); 
const port= process.env.PORT || 4000;
app.use(express.json()); //middleware, meaning it will run before any route is hit and it will convert any data coming in the JSON format

const morganFormat = ":method :url :status :response-time ms";

app.use(
    morgan(morganFormat, {
      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    })
  );

let teaData=[]
let nextID=1;

//add a new tea
app.post('/tea',(req,res)=>{
    const {name,price}=req.body;
    const newTea={id:Number(nextID++),name, price}
    teaData.push(newTea);
    res.status(201).send(newTea);
})

//get all tea
app.get('/tea',(req,res)=>{
    console.log("Tea Data:", teaData); 
    res.status(200).send(teaData);
})

//get a tea by id
app.get('/tea/:id',(req,res)=>{
    const tea= teaData.find(t=>t.id===parseInt(req.params.id))
    console.log("found tea",tea);
    
    if(!tea){
        console.log("tea not found");
        return res.status(404).send('Tea not found');
    }
    res.status(200).send(tea);
})

//update a tea by id
app.put('/tea/:id',(req,res)=>{
   const tea= teaData.find(t=>t.id===parseInt(req.params.id))
   if(!tea){
    return res.status(404).send('Tea not found');
    }
    const{name,price}=req.body;
    tea.name=name;
    tea.price=price;
    res.status(200).send(tea);
})

//delete tea
app.delete('/tea/:id',(req,res)=>{
    const index= teaData.findIndex(t=>t.id==parseInt(req.params.id))
    if(index===-1){
        return res.status(404).send('Tea not found');
    }
    teaData.splice(index,1)
    return res.status(204).send('Tea deleted');
    
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


// app.get('/',(req,res)=>{
//     res.send('Hello from Sharvari!');
// })
// app.get('/iced-tea',(req,res)=>{
//     res.send('Ordered Iced Tea');
// })
// app.get('/github',(req,res)=>{
//     res.send('Sharvari Github');
// })