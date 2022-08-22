const dotenv=require('dotenv')
const express=require('express')
const cors=require('cors')
const app=express()
const router=require('./router')

dotenv.config()

const port=process.env.PORT

app.use(cors())
app.use(express.static('public'))
app.use('/images', express.static('images'));
app.use(express.json());
app.use('/api',router)
app.listen(port,()=>{
    console.log(`Listening in port ${port}`)
})

module.exports=app
