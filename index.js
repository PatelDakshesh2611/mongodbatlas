const servere=require('express')
const app=servere()
const cors=require('cors')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')

const db="mongodb+srv://pdakshesh424:helloworld@cluster0.zvyusxa.mongodb.net/Mongodbatlas?retryWrites=true&w=majority"
mongoose.connect(db,{
   
}).then(()=>{
    console.log('connection succesfull')
}).catch(()=>{
    console.log('error')
})
const schema=new mongoose.Schema({
    name:String
})
const collection=mongoose.model('usersdata',schema)
app.use(cors())
app.use(bodyparser.json())
app.post('/add',(req,res)=>{
    const data=req.body
    console.log(data)
    const run=async()=>{
        const response=await collection.insertMany([{name:data.name}])
        console.log(response)
        res.json({message:'successfully got'})
      }
     run()
     
})
app.listen(3001,()=>{
    console.log('listening on port 3001')
})