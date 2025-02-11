import express from 'express';

const app= express();
const port= 3000;
app.use(express.json()); //middleware, meaning it will run before any route is hit and it will any data coming in the JSON format

let teaData=[]
let nextID=1;

app.post('/tea',(req,res)=>{
    const {name,price}=req.body;
    const newTea={id:nextID++,name, price}
    teaData.push(newTea);
    res.status(201).send(newTea);
})

app.get('/tea',(req,res)=>{
    res.status(200).send(teaData);
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

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})